import { useEffect, useRef, useState } from 'react'
import ProjectDetailPanel, { type ProjectDetail } from './ProjectDetailPanel'
import './Projects.css'

const PROJECTS: ProjectDetail[] = [
  {
    title: 'Worxist',
    subtitle: 'Virtual Art Gallery System',
    description:
      'Web-based platform for artists and collectors to host digital exhibitions, manage auctions, and securely sell original artwork.',
    stack: ['React.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'Three.js'],
    category: 'Front-End Development',
    detailDescription:
      'Bridging the gap between digital art and physical galleries required an immersive user experience. I built the client-side architecture for a virtual art gallery system using Three.js for interactive 3D digital exhibitions. The work focused on responsive interfaces and API integration to handle a real-time chatbox, online payments, and e-commerce transactions.',
    images: [
      {
        src: '/images/worxist.png',
        alt: 'Worxist virtual art gallery dashboard',
      },
      {
        src: '/images/exhibit.png',
        alt: 'Worxist virtual art gallery exhibit dashboard',
      },
      {
        src: '/images/auction.png',
        alt: 'Worxist virtual art gallery auction dashboard',
      },
      {
        src: '/images/sell.png',
        alt: 'Worxist virtual art gallery marketplace dashboard',
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
      'This web utility was built to completely automate group expense management from the ground up. The system processes dynamic data inputs, tracks shared costs in real time, and automatically calculates precise individual balances, ensuring a clear calculation process from initial data entry to the final bill breakdown.',
    images: [
      {
        src: '/images/splitbill.png',
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
      'To build a complete user path for the travel industry, I created a flight booking concept featuring a search console, ticket selection, and a clean checkout flow. The project relied on semantic HTML and advanced CSS layouts to ensure a clean, responsive user experience across the platform.',
    images: [
      {
        src: '/images/airlux.png',
        alt: 'AirLux Odyssey flight booking platform',
      },
      {
        src: '/images/a_booking.png',
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
      'To provide an easy cooking exploration experience, I built a mobile application interface for a recipe platform using React Native and Expo. I turned design wireframes into interactive components and connected external APIs and Firebase services so users can browse ingredients and save custom creations.',
    images: [
      {
        src: '/images/burgify_2.png',
        alt: 'Burgify mobile app UI prototype across multiple phone screens',
        width: 1024,
        height: 630,
      },
      {
        src: '/images/burgify.png',
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
      'This responsive service platform landing page was built specifically for a jewelry photo editing business. Development involved crafting a clean, minimal layout, creating frontend galleries to display high-resolution portfolios, optimizing the site for quick load times, and structuring clear buttons to drive client inquiries.',
    images: [
      {
        src: '/images/home-jfe.png',
        alt: 'Jewelry Foto Editor luxury home page',
        width: 1024,
        height: 630,
      },
      {
        src: '/images/services-jfe.png',
        alt: 'Jewelry Foto Editor luxury services page',
        width: 1024,
        height: 630,
      },
      {
        src: '/images/blog-jfe.png',
        alt: 'Jewelry Foto Editor luxury blogs page',
        width: 1024,
        height: 630,
      },
    ],
  },
]

function getCardImage(project: ProjectDetail) {
  return project.images[0]
}

function isInFadeZone(carousel: HTMLDivElement, mouseX: number): boolean {
  const { left, right, width } = carousel.getBoundingClientRect()
  const fadeWidth = width * 0.16
  return mouseX < left + fadeWidth || mouseX > right - fadeWidth
}

export default function Projects() {
  const trackRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
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

  const handleCarouselMouseMove = (e: React.MouseEvent) => {
    if (activeProjectIndex !== null) return
    const carousel = carouselRef.current
    if (!carousel) return

    if (isInFadeZone(carousel, e.clientX)) {
      setHoveredSlideKey(null)
    }
  }

  const handleSlideEnter = (slideKey: string, e: React.MouseEvent) => {
    if (activeProjectIndex !== null) return
    const carousel = carouselRef.current
    if (!carousel) return

    if (isInFadeZone(carousel, e.clientX)) return

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
        ref={carouselRef}
        aria-label="Projects showcase"
        onMouseMove={handleCarouselMouseMove}
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
                  onMouseEnter={(e) => handleSlideEnter(slideKey, e)}
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