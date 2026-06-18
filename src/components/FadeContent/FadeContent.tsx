import { useEffect, useRef, type HTMLAttributes, type ReactNode } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface FadeContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  container?: Element | string | null
  blur?: boolean
  distance?: number
  duration?: number
  ease?: string
  delay?: number
  threshold?: number
  initialOpacity?: number
  onComplete?: () => void
}

export default function FadeContent({
  children,
  container,
  blur = true,
  distance = 28,
  duration = 900,
  ease = 'power2.out',
  delay = 0,
  threshold = 0.15,
  initialOpacity = 0,
  onComplete,
  className = '',
  style,
  ...props
}: FadeContentProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      gsap.set(el, { autoAlpha: 1, filter: 'blur(0px)', y: 0 })
      return
    }

    let scrollerTarget: Element | string | null =
      container || document.getElementById('snap-main-container') || null

    if (typeof scrollerTarget === 'string') {
      scrollerTarget = document.querySelector(scrollerTarget)
    }

    const startPct = (1 - threshold) * 100
    const getSeconds = (value: number) => (value > 10 ? value / 1000 : value)

    gsap.set(el, {
      autoAlpha: initialOpacity,
      y: distance,
      filter: blur ? 'blur(10px)' : 'blur(0px)',
      willChange: 'opacity, filter, transform',
    })

    const timeline = gsap.timeline({
      paused: true,
      delay: getSeconds(delay),
      onComplete,
    })

    timeline.to(el, {
      autoAlpha: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: getSeconds(duration),
      ease,
    })

    const scrollTrigger = ScrollTrigger.create({
      trigger: el,
      scroller: scrollerTarget || window,
      start: `top ${startPct}%`,
      once: true,
      onEnter: () => timeline.play(),
    })

    const revealIfAlreadyInView = () => {
      ScrollTrigger.refresh()

      const rect = el.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const triggerLine = viewportHeight * (startPct / 100)
      const isVisible = rect.top < viewportHeight && rect.bottom > 0
      const passedTrigger = rect.top <= triggerLine
      const pinnedToPageBottom =
        isVisible && Math.abs(rect.bottom - viewportHeight) <= 2

      if (passedTrigger || pinnedToPageBottom) {
        timeline.play()
      }
    }

    revealIfAlreadyInView()
    window.addEventListener('load', revealIfAlreadyInView)

    return () => {
      window.removeEventListener('load', revealIfAlreadyInView)
      scrollTrigger.kill()
      timeline.kill()
      gsap.killTweensOf(el)
    }
  }, [
    blur,
    container,
    delay,
    distance,
    duration,
    ease,
    initialOpacity,
    onComplete,
    threshold,
  ])

  return (
    <div ref={ref} className={className} style={style} {...props}>
      {children}
    </div>
  )
}
