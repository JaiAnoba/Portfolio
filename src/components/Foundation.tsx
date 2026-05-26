import { useEffect, useState } from 'react'
import './Foundation.css'

const AWARDS = [
  { text: 'Excellence in Web Development & Digital Innovation', img: 'webwise.jpg' },
  { text: 'Excellence in Computer Systems & Troubleshooting', img: 'troubleshooting.jpg' },
  { text: 'Excellence in Capstone Project', img: 'capstone.jpg' },
  { text: 'Project Leadership Excellence Award', img: 'leadership.jpg' },
  { text: 'Outstanding iTech Society Officer Award', img: 'itech.jpg' },
]

const STACK = [
  {
    name: 'FIGMA',
    icons: ['https://img.icons8.com/color/96/figma.png'],
    desc: 'The core of my UI/UX workflow. Mapping user flows, building design systems, and crafting high-fidelity prototypes.',
    size: 'large',
    brandColor: '#6b0000',
  },
  {
    name: 'TYPESCRIPT',
    icons: ['https://img.icons8.com/color/96/typescript.png'],
    size: 'small',
    brandColor: '#3178c6',
  },
  {
    name: 'REACT NATIVE & EXPO',
    icons: [
      'https://img.icons8.com/color/96/react-native.png',
      'https://img.icons8.com/color/96/expo.png',
    ],
    size: 'small',
    brandColor: '#61dafb',
  },
  {
    name: 'HTML5 & CSS3',
    icons: [
      'https://img.icons8.com/color/96/html-5--v1.png',
      'https://img.icons8.com/color/96/css3.png',
    ],
    size: 'medium',
    brandColor: '#e34f26',
  },
  {
    name: 'TAILWIND',
    icons: ['https://img.icons8.com/color/96/tailwind_css.png'],
    size: 'medium',
    brandColor: '#38bdf8',
  },
  {
    name: 'REACT JS',
    icons: ['https://img.icons8.com/color/96/react-native.png'],
    size: 'tiny',
    brandColor: '#61dafb',
  },
  {
    name: 'GITHUB',
    icons: ['https://img.icons8.com/color/96/github--v1.png'],
    size: 'tiny',
    brandColor: '#ffffff',
  },
  {
    name: 'WORDPRESS & PHP',
    icons: [
      'https://img.icons8.com/color/96/wordpress.png',
      'https://img.icons8.com/color/96/php.png',
    ],
    desc: 'Developing optimized, highly custom backend content management systems.',
    size: 'wide',
    brandColor: '#21759b',
  },
]

function StackCard({ item }: { item: typeof STACK[number] }) {
  return (
    <div
      className={`stack-card stack-${item.size}`}
      style={{ '--brand-color': item.brandColor } as React.CSSProperties}
    >
      <div className="stack-card-inner">
        {item.icons && item.icons.length > 0 && (
          <div className="stack-icons-row">
            {item.icons.map((icon, i) => (
              <img key={i} src={icon} alt="" className="stack-icon" />
            ))}
          </div>
        )}
        <div className="stack-text">
          <span className="stack-name">{item.name}</span>
          {item.desc && <p className="stack-desc">{item.desc}</p>}
        </div>
      </div>
    </div>
  )
}

export default function Foundation() {
  const [activeAwardIndex, setActiveAwardIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAwardIndex((prevIndex) => (prevIndex + 1) % AWARDS.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="foundation" id="foundation">
      <h2 className="foundation-heading">
        <span>THE</span>
        <span className="foundation-script">Foundation</span>
      </h2>

      <div className="foundation-main-grid">
        <div className="foundation-left">
          <p className="section-label">EDUCATION</p>
          <h3 className="foundation-degree">BS Information Technology</h3>
          <p className="foundation-school">St. Cecilia&apos;s College-Cebu, Inc.</p>
          <div className="foundation-line" aria-hidden />

          <p className="section-label foundation-awards-label">RECOGNITIONS & CERTIFICATIONS</p>
          <ul className="foundation-awards">
            {AWARDS.map((award, index) => (
              <li 
                key={index}
                className={index === activeAwardIndex ? 'award-item-active' : ''}
                onClick={() => setActiveAwardIndex(index)}
                style={{ cursor: 'pointer' }}
              >
                {award.text}
              </li>
            ))}
          </ul>
        </div>

        <div className="foundation-right-canvas">
          <div className="certificate-single-container">
            <div className="foundation-glow-shadow" aria-hidden />

            {AWARDS.map((award, index) => {
              const isActive = index === activeAwardIndex

              return (
                <div
                  key={index}
                  className={`certificate-solo-frame ${isActive ? 'solo-active' : 'solo-hidden'}`}
                >
                  <img 
                    src={`/images/${award.img}`} 
                    alt={award.text} 
                    className="certificate-asset-render" 
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="foundation-bottom-stack">
        <div className="foundation-stack-header">
          <h3 className="foundation-stack-title">
            CORE <span className="gradient-text-stack">STACK</span>
          </h3>
          <div className="foundation-stack-line" aria-hidden />
        </div>

        <div className="stack-grid">
          {STACK.map((item) => (
            <StackCard key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}