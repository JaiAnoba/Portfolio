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
  if (project.title === 'Jewelry Foto Editor') return project.images[2]
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

  // Override State Engines
  const [isManualMode, setIsManualMode] = useState<boolean>(false)
  const [manualIndex, setManualIndex] = useState<number>(0)
  const [slideDirection, setSlideDirection] = useState<'forward' | 'backward'>('forward')
  
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track || isManualMode) return

    track.style.animationPlayState =
      hoveredSlideKey !== null && activeProjectIndex === null
        ? 'paused'
        : 'running'
  }, [hoveredSlideKey, activeProjectIndex, isManualMode])

  // Handles smooth programmatic jumps during manual sliding layout
  useEffect(() => {
    if (!isManualMode) return

    const outer = carouselRef.current?.querySelector('.projects-marquee-outer') as HTMLDivElement
    const firstSlide = trackRef.current?.querySelector('.projects-slide')

    if (outer && firstSlide) {
      const slideWidth = firstSlide.getBoundingClientRect().width + 24
      outer.scrollTo({ left: manualIndex * slideWidth, behavior: 'smooth' })
    }
  }, [manualIndex, isManualMode])

  // Handles automated loops with direct bounce parameters while inside manual control window
  useEffect(() => {
    if (!isManualMode) {
      if (intervalRef.current) clearInterval(intervalRef.current)
      return
    }

    intervalRef.current = setInterval(() => {
      setManualIndex((prevIndex) => {
        const totalItems = PROJECTS.length
        
        if (slideDirection === 'forward') {
          if (prevIndex >= totalItems - 1) {
            setSlideDirection('backward')
            return prevIndex - 1
          }
          return prevIndex + 1
        } else {
          if (prevIndex <= 0) {
            setSlideDirection('forward')
            return prevIndex + 1
          }
          return prevIndex - 1
        }
      })
    }, 2500) // Transition period when running automatically in manual mode

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isManualMode, slideDirection])

  // Registers manual execution action and starts/renews the 3 second delay count
  const activateManualOverride = (newTargetIndex: number) => {
    setHoveredSlideKey(null)
    setIsManualMode(true)
    setManualIndex(newTargetIndex)

    if (timeoutRef.current) clearTimeout(timeoutRef.current)

    timeoutRef.current = setTimeout(() => {
      setIsManualMode(false)
      const outer = carouselRef.current?.querySelector('.projects-marquee-outer') as HTMLDivElement
      if (outer) {
        outer.scrollTo({ left: 0, behavior: 'instant' })
      }
    }, 3000)
  }

  const handleCarouselMouseMove = (e: React.MouseEvent) => {
    if (activeProjectIndex !== null) return
    const carousel = carouselRef.current
    if (!carousel) return

    if (isInFadeZone(carousel, e.clientX)) {
      setHoveredSlideKey(null)
    }
  }

  const handleSlideEnter = (slideKey: string, e: React.MouseEvent) => {
    if (activeProjectIndex !== null) return // Removed 'isManualMode' constraint here
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

  const handlePrevClick = () => {
    let targetIndex = isManualMode ? manualIndex - 1 : PROJECTS.length - 1
    
    // Bounce Back evaluation
    if (targetIndex < 0) {
      targetIndex = 1
      setSlideDirection('forward')
    } else {
      setSlideDirection('backward')
    }
    
    activateManualOverride(targetIndex)
  }

  const handleNextClick = () => {
    let targetIndex = isManualMode ? manualIndex + 1 : 1
    const maxIndex = PROJECTS.length - 1

    // Bounce Back evaluation
    if (targetIndex > maxIndex) {
      targetIndex = maxIndex - 1
      setSlideDirection('backward')
    } else {
      setSlideDirection('forward')
    }

    activateManualOverride(targetIndex)
  }

  // Switches dataset structure seamlessly based on active control modes
  const items = isManualMode ? PROJECTS : [...PROJECTS, ...PROJECTS]

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

        <div className={`projects-marquee-outer ${isManualMode ? 'is-manual-mode' : ''}`}>
          <div className={`projects-marquee-track ${isManualMode ? 'is-manual-sliding' : ''}`} ref={trackRef}>
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
                        View Project &gt;
                      </button>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>

        <div className="projects-nav-controls">
          <button 
            type="button" 
            className="projects-nav-btn projects-nav-btn--prev" 
            onClick={handlePrevClick}
            aria-label="Previous projects"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button 
            type="button" 
            className="projects-nav-btn projects-nav-btn--next" 
            onClick={handleNextClick}
            aria-label="Next projects"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
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