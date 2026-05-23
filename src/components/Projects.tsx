import { useState } from 'react'
import './Projects.css'

const PROJECTS = [
  {
    src: '/images/project-burgify.png',
    alt: 'Burgify mobile app UI prototype across multiple phone screens',
    width: 1024,
    height: 630,
  },
  {
    src: '/images/project-1.jpg',
    alt: 'Web dashboard project',
    width: 1024,
    height: 630,
  },
  {
    src: '/images/project-2.jpg',
    alt: 'Mobile app project',
    width: 1024,
    height: 630,
  },
  {
    src: '/images/project-3.jpg',
    alt: 'Travel website project',
    width: 1024,
    height: 630,
  },
  {
    src: '/images/project-4.jpg',
    alt: 'Interface design project',
    width: 1024,
    height: 630,
  },
] as const

export default function Projects() {
  const [index, setIndex] = useState(0)

  const prev = () => setIndex((i) => (i === 0 ? PROJECTS.length - 1 : i - 1))
  const next = () => setIndex((i) => (i === PROJECTS.length - 1 ? 0 : i + 1))

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

      <div className="projects-carousel">
        {PROJECTS.map((p, i) => (
          <div
            key={p.src}
            className={`projects-slide ${i === index ? 'active' : ''} ${'width' in p && 'height' in p ? 'projects-slide--natural' : ''}`}
            style={
              {
                '--offset': i - index,
                ...('width' in p && 'height' in p
                  ? { '--slide-aspect': `${p.width} / ${p.height}` }
                  : {}),
              } as React.CSSProperties
            }
          >
            <img
              src={p.src}
              alt={p.alt}
              {...('width' in p && 'height' in p ? { width: p.width, height: p.height } : {})}
            />
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