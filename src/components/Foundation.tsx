import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import FadeContent from './FadeContent/FadeContent'
import './Foundation.css'

type TabId = 'education' | 'certificates' | 'tech-stack'

const TAB_ICONS: Partial<Record<TabId, string>> = {
  education: 'https://img.icons8.com/sf-regular/48/ffffff/graduation-cap.png',
  'tech-stack': 'https://img.icons8.com/forma-regular/48/ffffff/sheets.png',
}

const ACHIEVEMENT_ICON_SRC = 'https://img.icons8.com/pulsar-line/48/filled-sent.png'
const CLOSE_ICON_SRC = 'https://img.icons8.com/puffy-filled/32/delete-sign.png'

const TABS: { id: TabId; label: string }[] = [
  { id: 'education', label: 'EDUCATION' },
  { id: 'certificates', label: 'CERTIFICATES' },
  { id: 'tech-stack', label: 'TECH STACK' },
]

const ACHIEVEMENTS = [
  {
    title: "Dean's Lister",
    description: "Dean's Honor Roll (AY 2022-2025).",
  },
  {
    title: 'Capstone',
    description: 'Recognized in Web Dev, Digital Innovation, and Project Leadership.',
  },
  {
    title: 'Leadership & Involvement',
    description: 'Active student officer and consistent IT Congress participant.',
  },
]

const CERTIFICATES = [
  { text: 'Excellence in Web Development & Digital Innovation', img: 'webwise.jpg' },
  { text: 'Excellence in Computer Systems & Troubleshooting', img: 'troubleshooting.jpg' },
  { text: 'Excellence in Capstone Project', img: 'capstone.jpg' },
  { text: 'Project Leadership Excellence Award', img: 'leadership.jpg' },
  { text: 'Outstanding iTech Society Officer Award', img: 'itech.jpg' },
]

type Certificate = (typeof CERTIFICATES)[number]

function CertificateLightbox({
  certificate,
  onClose,
}: {
  certificate: Certificate
  onClose: () => void
}) {
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsClosing(true)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  function handleClose() {
    setIsClosing(true)
  }

  function handleAnimationEnd() {
    if (isClosing) onClose()
  }

  return createPortal(
    <div
      className={`foundation-cert-lightbox${isClosing ? ' is-closing' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label={certificate.text}
      onAnimationEnd={handleAnimationEnd}
    >
      <button
        type="button"
        className="foundation-cert-lightbox-close"
        onClick={handleClose}
        aria-label="Close certificate view"
      >
        <img width={24} height={24} src={CLOSE_ICON_SRC} alt="" />
      </button>

      <button
        type="button"
        className="foundation-cert-lightbox-backdrop"
        onClick={handleClose}
        aria-label="Close certificate view"
      />

      <div className="foundation-cert-lightbox-content">
        <img
          src={`/images/${certificate.img}`}
          alt={certificate.text}
          className="foundation-cert-lightbox-img"
        />
      </div>
    </div>,
    document.body,
  )
}

const TECH_SECTIONS = [
  {
    label: 'FRONT-END (CLIENT-SIDE)',
    items: [
      { name: 'HTML', icon: 'https://img.icons8.com/color/96/html-5--v1.png' },
      { name: 'CSS', icon: 'https://img.icons8.com/color/96/css3.png' },
      { name: 'JavaScript', icon: 'https://img.icons8.com/color/96/javascript.png' },
      { name: 'ReactJS', icon: 'https://img.icons8.com/color/96/react-native.png' },
      { name: 'React Native', icon: 'https://img.icons8.com/nolan/64/react-native.png' },
      { name: 'Tailwind', icon: 'https://img.icons8.com/color/96/tailwind_css.png' },
      { name: 'Bootstrap', icon: 'https://img.icons8.com/fluency/96/bootstrap.png' },
      { name: 'Vite', icon: 'https://img.icons8.com/color/96/vite.png' },
    ],
  },
  {
    label: 'BACK-END (SERVER-SIDE)',
    items: [
      { name: 'PHP', icon: 'https://img.icons8.com/nolan/64/php--v2.png' },
      { name: 'WordPress', icon: 'https://img.icons8.com/color/96/wordpress.png' },
      { name: 'MySQL', icon: 'https://img.icons8.com/color/96/mysql-logo.png' },
      { name: 'Firebase', icon: 'https://img.icons8.com/color/96/firebase.png' },
      { name: 'RESTful APIs', icon: 'https://img.icons8.com/softteal-gradient/96/api-settings.png' },
    ],
  },
  {
    label: 'WORKFLOW & DEPLOYMENT',
    items: [
      { name: 'Figma', icon: 'https://img.icons8.com/color/96/figma.png' },
      { name: 'VS Code', icon: 'https://img.icons8.com/color/96/visual-studio-code-2019.png' },
      { name: 'GitHub', icon: 'https://img.icons8.com/material-outlined/48/ffffff/github.png' },
      { name: 'Vercel', icon: 'https://img.icons8.com/material-rounded/96/ffffff/vercel.png' },
    ],
  },
]

function TabIcon({ tab }: { tab: TabId }) {
  const iconSrc = TAB_ICONS[tab]

  if (iconSrc) {
    return <img src={iconSrc} alt="" className="foundation-tab-icon" aria-hidden />
  }

  if (tab === 'certificates') {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="8" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
        <path
          d="M8.5 13.5L7 22l5-3 5 3-1.5-8.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    )
  }

  return null
}

function AchievementIcon() {
  return (
    <img
      src={ACHIEVEMENT_ICON_SRC}
      alt=""
      className="foundation-achievement-icon-img"
      aria-hidden
    />
  )
}

export default function Foundation() {
  const [activeTab, setActiveTab] = useState<TabId>('education')
  const [openCertificate, setOpenCertificate] = useState<Certificate | null>(null)

  return (
    <section className="foundation" id="foundation">
      {/* <div className="foundation-glow" aria-hidden /> */}

      <FadeContent className="foundation-header">
        <h2 className="foundation-heading">
          Background <span className="foundation-heading-accent">Showcase</span>
        </h2>
        <p className="foundation-subtitle">
          Explore my academic foundation, certifications, and core technical skills. This overview
          highlights the background and expertise I bring to every project.
        </p>
      </FadeContent>

      <FadeContent delay={100}>
        <nav className="foundation-tabs" aria-label="Background showcase tabs">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`foundation-tab${activeTab === tab.id ? ' foundation-tab--active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
              aria-selected={activeTab === tab.id}
              role="tab"
            >
              <TabIcon tab={tab.id} />
              {tab.label}
            </button>
          ))}
        </nav>
      </FadeContent>

      <FadeContent
        delay={180}
        role="tabpanel"
        className={`foundation-content${
          activeTab === 'certificates'
            ? ' foundation-content--certificates'
            : activeTab === 'education'
              ? ' foundation-content--education'
              : ''
        }`}
      >
        <div key={activeTab} className="foundation-panel-animation">
          {activeTab === 'education' && (
            <div className="foundation-education">
              <div className="foundation-education-logos">
                <div className="foundation-education-logos-glow" aria-hidden />
                <img
                  src="/images/scc.png"
                  alt="St. Cecilia's College Cebu"
                  className="foundation-logo-scc"
                />
                <img
                  src="/images/itech.png"
                  alt="St. Cecilia's College College of Information Technology"
                  className="foundation-logo-itech"
                />
              </div>

              <div className="foundation-education-details">
                <div className="foundation-education-header">
                  <h3 className="foundation-degree">BS in Information Technology</h3>
                  <div className="foundation-education-meta">
                    <p className="foundation-school">St. Cecilia&apos;s College-Cebu, Inc.</p>
                    <span className="foundation-years">2022-2026</span>
                  </div>
                </div>

                <ul className="foundation-achievements">
                  {ACHIEVEMENTS.map((item) => (
                    <li key={item.title} className="foundation-achievement-card">
                      <span className="foundation-achievement-icon">
                        <AchievementIcon />
                      </span>
                      <div className="foundation-achievement-text">
                        <strong>{item.title}</strong>
                        <p>{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'certificates' && (
            <ul className="foundation-certificates">
              {CERTIFICATES.map((cert, index) => (
                <li key={cert.text}>
                  <button
                    type="button"
                    className="foundation-certificate-card"
                    onClick={() => setOpenCertificate(cert)}
                    aria-label={`View certificate: ${cert.text}`}
                  >
                    <span className="foundation-cert-number">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="foundation-cert-text">
                      <strong>{cert.text}</strong>
                      <p>St. Cecilia&apos;s College-Cebu, Inc. · 2026</p>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          )}

          {activeTab === 'tech-stack' && (
            <div className="foundation-tech">
              {TECH_SECTIONS.map((section) => (
                <div key={section.label} className="foundation-tech-section">
                  <h4 className="foundation-tech-label">{section.label}</h4>
                  <ul className="foundation-tech-grid">
                    {section.items.map((item) => (
                      <li key={item.name} className="foundation-tech-tile">
                        <img src={item.icon} alt="" className="foundation-tech-icon" />
                        <span>{item.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </FadeContent>

      {openCertificate && (
        <CertificateLightbox
          certificate={openCertificate}
          onClose={() => setOpenCertificate(null)}
        />
      )}
    </section>
  )
}
