import { useRef } from 'react'
import './Projects.css'

const PROJECTS = [
  {
    src: '/images/project-burgify.png',
    alt: 'Burgify mobile app UI prototype across multiple phone screens',
  },
  {
    src: '/images/project-1.jpg',
    alt: 'Web dashboard project',
  },
  {
    src: '/images/project-2.jpg',
    alt: 'Mobile app project',
  },
  {
    src: '/images/project-3.jpg',
    alt: 'Travel website project',
  },
  {
    src: '/images/project-4.jpg',
    alt: 'Interface design project',
  },
]

const SLIDE_WIDTH = 580 // px — must match CSS card width + gap

export default function Projects() {
  const trackRef = useRef<HTMLDivElement>(null)

  // Manually shift the marquee by one card width on button press
  const shift = (direction: 'prev' | 'next') => {
    const track = trackRef.current
    if (!track) return
    // Temporarily pause animation and nudge scroll
    track.style.animationPlayState = 'paused'
    const current = new DOMMatrix(getComputedStyle(track).transform).m41
    const nudge = direction === 'next' ? -SLIDE_WIDTH : SLIDE_WIDTH
    track.style.transform = `translateX(${current + nudge}px)`
    // Resume after a short delay
    setTimeout(() => {
      track.style.transform = ''
      track.style.animationPlayState = 'running'
    }, 600)
  }

  const items = [...PROJECTS, ...PROJECTS]

  return (
    <section className="projects" id="projects">
      <div className="red-glow projects-glow" aria-hidden />

      <div className="projects-header">
        <span className="script-accent projects-accent" aria-hidden>
          <span className="pa-p">p</span>
          <span className="pa-r">r</span>
          <span className="pa-o">o</span>
          <span className="pa-j">j</span>
          <span className="pa-e">e</span>
          <span className="pa-c">c</span>
          <span className="pa-t">t</span>
          <span className="pa-s">s</span>
        </span>
        <h2 className="projects-title">PROJECTS</h2>
        <p className="projects-desc">
          A showcase of web systems, responsive interfaces, and cross-platform mobile development.
        </p>
      </div>

      <div className="projects-carousel" aria-label="Projects showcase">
        <div className="projects-fade projects-fade--left" aria-hidden />
        <div className="projects-fade projects-fade--right" aria-hidden />

        <div className="projects-marquee-outer">
          <div className="projects-marquee-track" ref={trackRef}>
            {items.map((p, i) => (
              <div className="projects-slide" key={`${p.src}-${i}`}>
                <img src={p.src} alt={p.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Nav buttons kept */}
      <div className="projects-nav">
        <button
          type="button"
          onClick={() => shift('prev')}
          aria-label="Previous project"
        >
          &lt;
        </button>
        <button
          type="button"
          onClick={() => shift('next')}
          aria-label="Next project"
        >
          &gt;
        </button>
      </div>
    </section>
  )
}