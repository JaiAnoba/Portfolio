import { useCallback, useEffect, useRef, useState } from 'react'
import ProjectDetailPanel, { type ProjectDetail } from './ProjectDetailPanel'
import './Projects.css'

const PROJECTS: ProjectDetail[] = [
  {
    title: 'Worxist',
    subtitle: 'Virtual Art Gallery System',
    description: 'Virtual art gallery for digital exhibitions, auctions, and artwork sales.',
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
    description: 'Tracks shared expenses and auto-calculates individual balances.',
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
    description: 'Responsive travel platform with flight search and streamlined booking.',
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
    description: 'Mobile app for browsing burger recipes and saving custom creations.',
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
    description: 'Luxury landing page showcasing a professional photo editing portfolio.',
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
  {
    title: 'Smart Solar',
    subtitle: 'Smart Solar Decisions Landing Page',
    description: 'Dark-themed UI guiding homeowners through a custom solar calculator.',
    stack: ['Figma', 'UI/UX Design'],
    category: 'UI/UX Design',
    detailDescription:
      'Helping homeowners transition to renewable energy requires a clear, data-driven entry point. I designed the user interface for a solar service platform that puts key savings and system lifespans front and center. My focus was on shaping an easy user path for the built-in calculator, letting users find their ideal solar setup and see potential bill cuts in under a minute.',
    images: [
      {
        src: '/images/s_home.png',
        alt: 'Hero section of the Smart Solar Decisions landing page featuring a dark premium theme, a bold headline, and key energy savings metrics.',
        width: 1024,
        height: 630,
      },
      {
        src: '/images/s_setup.png',
        alt: 'Interactive solar calculator step interface displaying custom fields and options for estimating home solar configurations.',
        width: 1024,
        height: 630,
      },
      {
        src: '/images/s_how.png',
        alt: 'Process section showing a clean step-by-step layout explaining how the solar installation and calculation system works.',
        width: 1024,
        height: 630,
      },
      {
        src: '/images/s_contact.png',
        alt: 'Contact and inquiry section with a minimal form designed to collect user requirements for final solar setup consulting.',
        width: 1024,
        height: 630,
      },
    ],
  },
  {
    title: 'Video Editing Service',
    subtitle: 'Video Editing Services Landing Page',
    description: 'Landing page highlighting editing portfolios and client onboarding flows.',
    stack: ['Figma', 'UI/UX Design'],
    category: 'UI/UX Design',
    detailDescription:
      'Establishing creative trust immediately requires a compelling presentation. I designed a dark-themed landing page for a professional video editing service. The layout highlights key performance metrics and operational proof while placing prominent action buttons to streamline client onboarding and inquiry paths.',
    images: [
      {
        src: '/images/v_home.png',
        alt: 'Hero section of the video editing landing page featuring a dark theme, an editor at a workstation, key performance metrics, and a prominent upload button.',
        width: 1024,
        height: 630,
      },
      {
        src: '/images/v_featured.png',
        alt: 'Featured portfolio section showcasing video project thumbnails in a clean grid layout to highlight editing quality.',
        width: 1024,
        height: 630,
      },
      {
        src: '/images/v_services.png',
        alt: 'Services section detailing different video editing tiers, specialties, and professional capabilities offered to clients.',
        width: 1024,
        height: 630,
      },
      {
        src: '/images/v_works.png',
        alt: 'Process workflow section mapping out the step-by-step client journey from initial video upload to final file delivery.',
        width: 1024,
        height: 630,
      },
      {
        src: '/images/v_blogs.png',
        alt: 'Resources and blog section displaying content cards with tips on video marketing, production, and editing strategies.',
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

const COMPACT_MEDIA_QUERY = '(max-width: 1024px)'

function useCompactViewport() {
  const [isCompact, setIsCompact] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia(COMPACT_MEDIA_QUERY).matches,
  )

  useEffect(() => {
    const media = window.matchMedia(COMPACT_MEDIA_QUERY)
    const onChange = (event: MediaQueryListEvent) => setIsCompact(event.matches)

    setIsCompact(media.matches)
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  return isCompact
}

type ProjectSlideCardProps = {
  project: ProjectDetail
  projectIndex: number
  isHovered?: boolean
  isDimmed?: boolean
  isCompact?: boolean
  onMouseEnter?: (event: React.MouseEvent) => void
  onOpenDetails: (index: number) => void
}

function ProjectSlideCard({
  project,
  projectIndex,
  isHovered = false,
  isDimmed = false,
  isCompact = false,
  onMouseEnter,
  onOpenDetails,
}: ProjectSlideCardProps) {
  const cardImage = getCardImage(project)
  const showDetail = isCompact || isHovered

  return (
    <article
      data-project-index={projectIndex}
      className={[
        'projects-slide',
        cardImage.width && cardImage.height ? 'projects-slide--natural' : '',
        isCompact ? 'projects-slide--compact' : '',
        showDetail ? 'projects-slide--expanded' : '',
        isDimmed ? 'projects-slide--dimmed' : '',
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
      onMouseEnter={onMouseEnter}
    >
      <img src={cardImage.src} alt={cardImage.alt} loading="lazy" />

      <div className="projects-slide-detail" aria-hidden={!showDetail}>
        <div className="projects-slide-detail-backdrop" />
        <div className="projects-slide-detail-copy">
          <div className="projects-slide-detail-text">
            <h3 className="projects-slide-detail-title">{project.title}</h3>
            <p className="projects-slide-detail-desc">{project.description}</p>
          </div>
          <button
            type="button"
            className="projects-slide-detail-link"
            onClick={(event) => {
              event.stopPropagation()
              onOpenDetails(projectIndex)
            }}
          >
            Details
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.25"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const isCompactView = useCompactViewport()
  const trackRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [hoveredSlideKey, setHoveredSlideKey] = useState<string | null>(null)
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(
    null,
  )

  const [isManualMode, setIsManualMode] = useState<boolean>(false)
  const [manualIndex, setManualIndex] = useState<number>(0)
  const [slideDirection, setSlideDirection] = useState<'forward' | 'backward'>('forward')
  const [activeDotIndex, setActiveDotIndex] = useState(0)
  
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track || isManualMode || isCompactView) return

    track.style.animationPlayState =
      hoveredSlideKey !== null && activeProjectIndex === null
        ? 'paused'
        : 'running'
  }, [hoveredSlideKey, activeProjectIndex, isManualMode, isCompactView])

  // Handles smooth programmatic jumps during manual sliding layout
  useEffect(() => {
    if (!isManualMode || isCompactView) return

    const outer = carouselRef.current?.querySelector('.projects-marquee-outer') as HTMLDivElement
    const firstSlide = trackRef.current?.querySelector('.projects-slide')

    if (outer && firstSlide) {
      const slideWidth = firstSlide.getBoundingClientRect().width + 24
      outer.scrollTo({ left: manualIndex * slideWidth, behavior: 'smooth' })
    }
  }, [manualIndex, isManualMode, isCompactView])

  // Handles automated loops with direct bounce parameters while inside manual control window
  useEffect(() => {
    if (!isManualMode || isCompactView) {
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
    }, 2500) 

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isManualMode, slideDirection, isCompactView])

  // Gentle auto-advance on compact screens
  useEffect(() => {
    if (!isCompactView || activeProjectIndex !== null) return

    const autoAdvance = setInterval(() => {
      setActiveDotIndex((prevIndex) => (prevIndex + 1) % PROJECTS.length)
    }, 5000)

    return () => clearInterval(autoAdvance)
  }, [isCompactView, activeProjectIndex])

  const activateManualOverride = (newTargetIndex: number) => {
    setHoveredSlideKey(null)
    setIsManualMode(true)
    setManualIndex(newTargetIndex)
    setActiveDotIndex(newTargetIndex)

    if (timeoutRef.current) clearTimeout(timeoutRef.current)

    timeoutRef.current = setTimeout(() => {
      setIsManualMode(false)
      const outer = carouselRef.current?.querySelector('.projects-marquee-outer') as HTMLDivElement
      if (outer) {
        outer.scrollTo({ left: 0, behavior: 'instant' })
      }
    }, 6000)
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

  const handlePrevClick = () => {
    const currentIndex = isCompactView
      ? activeDotIndex
      : isManualMode
        ? manualIndex
        : activeDotIndex
    const targetIndex =
      (currentIndex - 1 + PROJECTS.length) % PROJECTS.length

    if (isCompactView) {
      setActiveDotIndex(targetIndex)
      return
    }

    setSlideDirection('backward')
    activateManualOverride(targetIndex)
  }

  const handleNextClick = () => {
    const currentIndex = isCompactView
      ? activeDotIndex
      : isManualMode
        ? manualIndex
        : activeDotIndex
    const targetIndex = (currentIndex + 1) % PROJECTS.length

    if (isCompactView) {
      setActiveDotIndex(targetIndex)
      return
    }

    setSlideDirection('forward')
    activateManualOverride(targetIndex)
  }

  const items = isManualMode ? PROJECTS : [...PROJECTS, ...PROJECTS]

  const updateActiveDotFromCenter = useCallback(() => {
    const outer = carouselRef.current?.querySelector(
      '.projects-marquee-outer',
    ) as HTMLElement | null
    if (!outer) return

    const outerRect = outer.getBoundingClientRect()
    const outerCenterX = outerRect.left + outerRect.width / 2
    const slides = outer.querySelectorAll<HTMLElement>('[data-project-index]')

    let bestIndex = 0
    let bestDistance = Infinity

    slides.forEach((slide) => {
      const rect = slide.getBoundingClientRect()
      if (rect.width === 0) return

      const slideCenter = rect.left + rect.width / 2
      const distance = Math.abs(slideCenter - outerCenterX)
      const index = Number(slide.dataset.projectIndex)

      if (!Number.isNaN(index) && distance < bestDistance) {
        bestDistance = distance
        bestIndex = index
      }
    })

    setActiveDotIndex(bestIndex)
  }, [])

  useEffect(() => {
    if (isCompactView) return

    if (isManualMode) {
      setActiveDotIndex(manualIndex)
      return
    }

    updateActiveDotFromCenter()
    const interval = setInterval(updateActiveDotFromCenter, 120)
    return () => clearInterval(interval)
  }, [isCompactView, isManualMode, manualIndex, updateActiveDotFromCenter, items.length])

  const handleDotClick = (index: number) => {
    if (isCompactView) {
      setActiveDotIndex(index)
      return
    }

    setSlideDirection(index >= activeDotIndex ? 'forward' : 'backward')
    activateManualOverride(index)
  }

  return (
    <section
      className={`projects${hoveredSlideKey !== null && !isCompactView ? ' projects--hovered' : ''}${isCompactView ? ' projects--compact' : ''}`}
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
        onMouseMove={isCompactView ? undefined : handleCarouselMouseMove}
        onMouseLeave={isCompactView ? undefined : handleCarouselLeave}
      >
        {!isCompactView && (
          <>
            <div className="projects-fade projects-fade--left" aria-hidden />
            <div className="projects-fade projects-fade--right" aria-hidden />
          </>
        )}

        {isCompactView ? (
          <div className="projects-fade-viewport">
            <ProjectSlideCard
              key={activeDotIndex}
              project={PROJECTS[activeDotIndex]}
              projectIndex={activeDotIndex}
              isCompact
              onOpenDetails={openProjectPanel}
            />
          </div>
        ) : (
          <div className={`projects-marquee-outer ${isManualMode ? 'is-manual-mode' : ''}`}>
            <div className={`projects-marquee-track ${isManualMode ? 'is-manual-sliding' : ''}`} ref={trackRef}>
              {items.map((project, i) => {
                const projectIndex = i % PROJECTS.length
                const slideKey = `${project.title}-${i}`
                const isHovered = hoveredSlideKey === slideKey

                return (
                  <ProjectSlideCard
                    key={slideKey}
                    project={project}
                    projectIndex={projectIndex}
                    isHovered={isHovered}
                    isDimmed={hoveredSlideKey !== null && !isHovered}
                    onMouseEnter={(e) => handleSlideEnter(slideKey, e)}
                    onOpenDetails={openProjectPanel}
                  />
                )
              })}
            </div>
          </div>
        )}
      </div>

      <div className="projects-pagination">
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

        <div className="projects-dots" role="tablist" aria-label="Project slides">
          {PROJECTS.map((project, index) => (
            <button
              key={project.title}
              type="button"
              role="tab"
              className={`projects-dot${index === activeDotIndex ? ' is-active' : ''}`}
              aria-label={`Go to ${project.title}`}
              aria-selected={index === activeDotIndex}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>

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

      {activeProjectIndex !== null && (
        <ProjectDetailPanel
          project={PROJECTS[activeProjectIndex]}
          onClose={closeProjectPanel}
        />
      )}
    </section>
  )
}