import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import './ProjectDetailPanel.css'

export type ProjectImage = {
  src: string
  alt: string
  width?: number
  height?: number
}

export type ProjectDetail = {
  title: string
  subtitle: string
  description: string
  stack: string[]
  category: string
  detailDescription: string
  images: ProjectImage[]
}

type ProjectDetailPanelProps = {
  project: ProjectDetail
  onClose: () => void
}

export default function ProjectDetailPanel({
  project,
  onClose,
}: ProjectDetailPanelProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [isClosing, setIsClosing] = useState(false)
  const [autoplay, setAutoplay] = useState(true)

  // Grab active image instantly without delay hooks
  const displayedImage = project.images[activeImageIndex] ?? project.images[0]

  useEffect(() => {
    setActiveImageIndex(0)
    setIsClosing(false)
    setAutoplay(true)
  }, [project.title])

  // Auto-advance every 2 seconds
  useEffect(() => {
    if (!autoplay || project.images.length <= 1) return
    const timer = setInterval(() => {
      setActiveImageIndex(prev => (prev + 1) % project.images.length)
    }, 2000)
    return () => clearInterval(timer)
  }, [autoplay, project.images.length])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') handleClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  function handleDotClick(index: number) {
    setActiveImageIndex(index)
    setAutoplay(false)
    setTimeout(() => setAutoplay(true), 5000)
  }

  function handleClose() {
    setIsClosing(true)
  }

  function handleAnimationEnd() {
    if (isClosing) onClose()
  }

  return createPortal(
    <div
      className={`project-panel${isClosing ? ' is-closing' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-panel-title"
      onAnimationEnd={handleAnimationEnd}
    >
      <div className="project-panel-layout">

        {/* Glows */}
        <div className="project-panel-glow project-panel-glow--left" aria-hidden />
        <div className="project-panel-glow project-panel-glow--right" aria-hidden />

        {/* Row 1: topbar */}
        <div className="project-panel-topbar">
          <button
            type="button"
            className="project-panel-close"
            onClick={handleClose}
            aria-label="Close project details"
          >
            <img
              width={24}
              height={24}
              src="https://img.icons8.com/puffy-filled/32/delete-sign.png"
              alt="Close panel"
            />
          </button>
        </div>

        {/* Row 2: media column */}
        <div className="project-panel-media">
          <img
            src={displayedImage.src}
            alt={displayedImage.alt}
            className={[
              'project-panel-img',
              displayedImage.width && displayedImage.height
                ? 'project-panel-media-img--natural'
                : '',
            ].filter(Boolean).join(' ')}
          />

          {project.images.length > 1 && (
            <div
              className="project-panel-dots"
              role="tablist"
              aria-label={`${project.title} gallery navigation`}
            >
              {project.images.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  role="tab"
                  className={`project-panel-dot${index === activeImageIndex ? ' project-panel-dot--active' : ''}`}
                  aria-label={`View image ${index + 1} of ${project.images.length}`}
                  aria-selected={index === activeImageIndex}
                  onClick={() => handleDotClick(index)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Row 2: copy column */}
        <div className="project-panel-copy">
          <h2 id="project-panel-title" className="project-panel-title">
            {project.title}
          </h2>
          <p className="project-panel-type">{project.subtitle.toUpperCase()}</p>

          <div className="project-panel-stack">
            {project.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <p className="project-panel-category">{project.category}</p>
          <p className="project-panel-desc">{project.detailDescription}</p>
        </div>

      </div>
    </div>,
    document.body,
  )
}