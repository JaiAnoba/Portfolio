import { useState } from 'react'
import './Projects.css'

const PROJECTS = [
  { src: '/images/project-1.jpg', alt: 'Web dashboard project' },
  { src: '/images/project-2.jpg', alt: 'Mobile app project' },
  { src: '/images/project-3.jpg', alt: 'Travel website project' },
  { src: '/images/project-4.jpg', alt: 'Interface design project' },
]

export default function Projects() {
  const [index, setIndex] = useState(0)

  const prev = () => setIndex((i) => (i === 0 ? PROJECTS.length - 1 : i - 1))
  const next = () => setIndex((i) => (i === PROJECTS.length - 1 ? 0 : i + 1))

  return (
    <section className="projects" id="projects">
      <div className="red-glow projects-glow" aria-hidden />

      <div className="projects-header">
        <span className="script-accent projects-accent" aria-hidden>
          projects
        </span>
        <h2 className="projects-title">PROJECTS</h2>
        <p className="projects-desc">
          A showcase of web systems, responsive interfaces, and cross-platform mobile development.
        </p>
      </div>

      <div className="projects-carousel">
        {PROJECTS.map((p, i) => (
          <div
            key={p.src}
            className={`projects-slide ${i === index ? 'active' : ''}`}
            style={{ '--offset': i - index } as React.CSSProperties}
          >
            <img src={p.src} alt={p.alt} />
          </div>
        ))}
      </div>

      <div className="projects-nav">
        <button type="button" onClick={prev} aria-label="Previous project">
          &lt;
        </button>
        <button type="button" onClick={next} aria-label="Next project">
          &gt;
        </button>
      </div>
    </section>
  )
}
