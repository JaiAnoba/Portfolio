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

  const activeImage = project.images[activeImageIndex] ?? project.images[0]

  useEffect(() => {
    setActiveImageIndex(0)
  }, [project.title])

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
      <div className="project-panel-glow project-panel-glow--left" aria-hidden />
      <div className="project-panel-glow project-panel-glow--right" aria-hidden />

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

      <div className="project-panel-layout">
        <div className="project-panel-media">
          <img
            key={activeImage.src}
            src={activeImage.src}
            alt={activeImage.alt}
            className={
              activeImage.width && activeImage.height
                ? 'project-panel-media-img--natural'
                : undefined
            }
          />
        </div>

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
              onClick={() => setActiveImageIndex(index)}
            />
          ))}
        </div>
      )}
    </div>,
    document.body,
  )
}