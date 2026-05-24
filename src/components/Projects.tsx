import { useEffect, useRef, useState } from 'react'
import ProjectDetailPanel, { type ProjectDetail } from './ProjectDetailPanel'
import './Projects.css'

const PROJECTS: ProjectDetail[] = [
  {
    title: 'Worxist',
    subtitle: 'Virtual Art Gallery System',
    description:
      'Web-based platform for artists and collectors to host digital exhibitions, manage live auctions, and securely sell original artwork.',
    stack: ['React.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'Three.js'],
    category: 'Front-End Development',
    detailDescription:
      'To bridge the gap between digital art and physical galleries, I built the client-side architecture for a virtual art gallery system. I utilized Three.js to develop interactive 3D digital exhibitions that allow users to navigate art spaces. The main focus was building responsive interfaces, implementing smooth UI transitions, and connecting components directly with APIs to handle a real-time chatbox, online payments, and e-commerce transactions.',
    images: [
      {
        src: '/images/project-1.jpg',
        alt: 'Worxist virtual art gallery dashboard',
      },
    ],
  },
  {
    title: 'SplitBill System',
    subtitle: 'Expense Management Utility',
    description:
      'Web application engineered to track shared expenses, calculate individual balances, and automate group bill-splitting.',
    stack: ['React.js', 'TypeScript', 'Tailwind CSS', 'Vite'],
    category: 'Full-Stack',
    detailDescription:
      'Managing group financial logistics often leads to calculation errors and disagreement. This web utility was built to completely automate group expense management from the ground up. The system processes dynamic data inputs, tracks shared costs in real time, and automatically calculates precise individual balances, ensuring a clear process from data entry to the final breakdown.',
    images: [
      {
        src: '/images/project-2.jpg',
        alt: 'SplitBill expense management interface',
      },
    ],
  },
  {
    title: 'AirLux Odyssey',
    subtitle: 'Flight Booking System',
    description:
      'Responsive travel platform featuring intuitive search engines, dynamic ticket selection, and streamlined booking flows.',
    stack: ['HTML', 'CSS'],
    category: 'Full-Stack Development',
    detailDescription:
      'To build a complete user path for the travel industry, I created a flight booking concept. The platform features a search console, dynamic ticket selection, and a clean checkout flow. I focused on semantic HTML, advanced CSS layouts, and logical data routing to ensure a clean, responsive, and working user path across the entire travel platform.',
    images: [
      {
        src: '/images/project-3.jpg',
        alt: 'AirLux Odyssey flight booking platform',
      },
    ],
  },
  {
    title: 'Burgify',
    subtitle: 'Burger Recipe Application',
    description:
      'Mobile-focused app designed for exploring structured ingredients, custom creations, and step-by-step preparation guides.',
    stack: ['React Native', 'Expo', 'API', 'Firebase'],
    category: 'Front-End Development',
    detailDescription:
      'I built the mobile application interface for a recipe platform designed for easy cooking exploration. Leveraging React Native and Expo, I built a fluid, cross-platform mobile experience that connects with external APIs to fetch recipe data. The development focused on turning design wireframes into interactive components and setting up Firebase services so users can browse ingredients, follow preparation guides, and save custom creations.',
    images: [
      {
        src: '/images/project-burgify.png',
        alt: 'Burgify mobile app UI prototype across multiple phone screens',
        width: 1024,
        height: 630,
      },
    ],
  },
  {
    title: 'Jewelry Foto Editor',
    subtitle: 'Service Platform Landing Page',
    description:
      'High-converting, responsive website built with a luxury aesthetic to showcase professional editing portfolios and drive client inquiries.',
    stack: ['WordPress'],
    category: 'Front-End Development',
    detailDescription:
      'Online sales optimization and high-end visual presentation are critical for luxury service brands. This responsive service platform landing page was built specifically for a jewelry photo editing business. Development involved crafting a clean, minimal layout, creating frontend galleries to display high-resolution portfolios, optimization for quick load times, and structuring clear buttons to drive client inquiries.',
    images: [
      {
        src: '/images/project-4.jpg',
        alt: 'Jewelry Foto Editor luxury landing page',
      },
    ],
  },
]

function getCardImage(project: ProjectDetail) {
  return project.images[0]
}

export default function Projects() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [hoveredSlideKey, setHoveredSlideKey] = useState<string | null>(null)
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(
    null,
  )

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    track.style.animationPlayState =
      hoveredSlideKey !== null && activeProjectIndex === null
        ? 'paused'
        : 'running'
  }, [hoveredSlideKey, activeProjectIndex])

  const handleSlideEnter = (slideKey: string) => {
    if (activeProjectIndex !== null) return
    setHoveredSlideKey(slideKey)
  }

  const handleCarouselLeave = () => {
    if (activeProjectIndex !== null) return
    setHoveredSlideKey(null)
  }

  const openProjectPanel = (projectIndex: number) => {
    setActiveProjectIndex(projectIndex)
    setHoveredSlideKey(null)
  }

  const closeProjectPanel = () => {
    setActiveProjectIndex(null)
  }

  const items = [...PROJECTS, ...PROJECTS]

  return (
    <section
      className={`projects${hoveredSlideKey !== null ? ' projects--hovered' : ''}`}
      id="projects"
    >
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
          A showcase of web systems, responsive interfaces, and cross-platform
          mobile development.
        </p>
      </div>

      <div
        className="projects-carousel"
        aria-label="Projects showcase"
        onMouseLeave={handleCarouselLeave}
      >
        <div className="projects-fade projects-fade--left" aria-hidden />
        <div className="projects-fade projects-fade--right" aria-hidden />

        <div className="projects-marquee-outer">
          <div className="projects-marquee-track" ref={trackRef}>
            {items.map((project, i) => {
              const projectIndex = i % PROJECTS.length
              const slideKey = `${project.title}-${i}`
              const isHovered = hoveredSlideKey === slideKey
              const cardImage = getCardImage(project)

              return (
                <article
                  key={slideKey}
                  className={[
                    'projects-slide',
                    cardImage.width && cardImage.height
                      ? 'projects-slide--natural'
                      : '',
                    isHovered ? 'projects-slide--expanded' : '',
                    hoveredSlideKey !== null && !isHovered
                      ? 'projects-slide--dimmed'
                      : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  style={
                    cardImage.width && cardImage.height
                      ? ({
                          '--slide-aspect': `${cardImage.width} / ${cardImage.height}`,
                        } as React.CSSProperties)
                      : undefined
                  }
                  onMouseEnter={() => handleSlideEnter(slideKey)}
                >
                  <img
                    src={cardImage.src}
                    alt={cardImage.alt}
                    loading="lazy"
                  />

                  <div className="projects-slide-detail" aria-hidden={!isHovered}>
                    <div className="projects-slide-detail-backdrop" />
                    <div className="projects-slide-detail-copy">
                      <h3 className="projects-slide-detail-title">
                        {project.title}
                      </h3>
                      <p className="projects-slide-detail-desc">
                        {project.description}
                      </p>
                      <button
                        type="button"
                        className="projects-slide-detail-link"
                        onClick={(event) => {
                          event.stopPropagation()
                          openProjectPanel(projectIndex)
                        }}
                      >
                        View more &gt;
                      </button>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>

      {activeProjectIndex !== null && (
        <ProjectDetailPanel
          project={PROJECTS[activeProjectIndex]}
          onClose={closeProjectPanel}
        />
      )}
    </section>
  )
}
