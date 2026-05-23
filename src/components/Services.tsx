import { useCallback, useEffect, useState } from 'react'
import './Services.css'

const SLIDES = [
  {
    title: 'UI/UX Design',
    text: 'I design how an app feels and functions, wireframing and building interactive prototypes in Figma to create intuitive layouts that make sense to the user.',
    image: '/images/ui-mockup.jpg',
    alt: 'UI dashboard mockup on tablet',
  },
  {
    title: 'Front-End Development',
    text: 'I write clean, lightweight code using React Native and TypeScript to build smooth mobile apps and web tools that load fast and work perfectly.',
    image: '/images/service-frontend.png',
    alt: 'Monitor showing React Native code beside a mobile app preview',
  },
  {
    title: 'Web Development',
    text: 'I build responsive, easy-to-manage websites and custom WordPress platforms that look great and scale naturally onto any screen.',
    image: '/images/service-web.png',
    alt: 'Quasar dashboard shown on desktop, tablet, and phone',
  },
] as const

const AUTOPLAY_MS = 5000

function slideOffset(index: number, active: number, total: number) {
  return (index - active + total) % total
}

export default function Services() {
  const [active, setActive] = useState(0)
  const slide = SLIDES[active]

  const goTo = useCallback((index: number) => {
    setActive(((index % SLIDES.length) + SLIDES.length) % SLIDES.length)
  }, [])

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length)
    }, AUTOPLAY_MS)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className="services" id="services">
      <p className="hand-label-sm services-sub">Services</p>
      <h2 className="services-title gradient-text">WHAT I DO</h2>

      <div className="services-grid">
        <div className="services-copy">
          <h3 className="hand-title services-copy-title" key={slide.title}>
            {slide.title}
          </h3>
          <p className="services-copy-text" key={slide.text}>
            {slide.text}
          </p>
          <div className="services-underline" aria-hidden />
        </div>

        <div className="services-visual">
          <div className="services-carousel" aria-roledescription="carousel">
            <div className="services-carousel-glow" aria-hidden />
            <div className="services-stack" aria-hidden>
              <div className="services-stack-card services-stack-card--back" />
              <div className="services-stack-card services-stack-card--mid" />
            </div>

            <div className="services-carousel-viewport">
              <div className="services-carousel-track">
                {SLIDES.map((item, index) => {
                  const offset = slideOffset(index, active, SLIDES.length)
                  return (
                    <article
                      key={item.title}
                      className="services-carousel-card"
                      data-offset={offset}
                      aria-hidden={offset !== 0}
                    >
                      <img src={item.image} alt={item.alt} loading="lazy" />
                    </article>
                  )
                })}
              </div>
            </div>

            <div className="services-dots" role="tablist" aria-label="Service slides">
              {SLIDES.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  role="tab"
                  className={index === active ? 'active' : ''}
                  aria-selected={index === active}
                  aria-label={`Show ${item.title}`}
                  onClick={() => goTo(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
