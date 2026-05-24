import './Foundation.css'

const AWARDS = [
  'Excellence in Web Development & Digital Innovation',
  'Excellence in Computer Systems & Troubleshooting',
  'Excellence in Capstone Project',
  'Project Leadership Excellence Award',
  'Outstanding iTech Society Officer Award',
]

const STACK = [
  {
    name: 'FIGMA',
    icon: '/images/figma.png',
    desc: 'The core of my UI/UX workflow. Mapping user flows, building design systems, and crafting high-fidelity prototypes.',
    size: 'large',
  },
  { name: 'TYPESCRIPT', icon: '/images/typescript.png', size: 'small' },
  { name: 'REACT NATIVE & EXPO', icon: '/images/react-native.png', size: 'small' },
  { name: 'HTML5 & CSS3', icon: '/images/html-css.png', size: 'medium' },
  { name: 'TAILWIND', icon: '/images/tailwind.png', size: 'medium' },
  { name: 'REACT JS', icon: '/images/react.png', size: 'tiny' },
  { name: 'GITHUB', icon: '/images/github-stack.png', size: 'tiny' },
  {
    name: 'WORDPRESS & PHP',
    icon: '/images/wordpress.png',
    desc: 'Developing optimized, highly custom backend content management systems.',
    size: 'wide',
  },
]

export default function Foundation() {
  return (
    <section className="foundation" id="foundation">
      <div className="red-glow foundation-glow-left" aria-hidden />
      {/* <div className="red-glow foundation-glow-right" aria-hidden /> */}

      <h2 className="foundation-heading">
        <span>THE</span>
        <span className="foundation-script">Foundation</span>
      </h2>

      <div className="foundation-grid">
        <div className="foundation-left">
          <p className="section-label">EDUCATION</p>
          <h3 className="foundation-degree">BS Information Technology</h3>
          <p className="foundation-school">St. Cecilia&apos;s College-Cebu, Inc.</p>
          <div className="foundation-line" aria-hidden />

          <p className="section-label foundation-awards-label">RECOGNITIONS & CERTIFICATIONS</p>
          <ul className="foundation-awards">
            {AWARDS.map((award) => (
              <li key={award}>{award}</li>
            ))}
          </ul>
        </div>

        <div className="foundation-right">
          <h3 className="foundation-stack-title">
            CORE <span className="gradient-text-stack">STACK</span>
          </h3>
          <div className="foundation-stack-line" aria-hidden />

          <div className="stack-grid">
            {STACK.map((item) => (
              <div key={item.name} className={`stack-card stack-${item.size}`}>
                <div className="stack-card-inner">
                  {item.icon && (
                    <img src={item.icon} alt="" className="stack-icon" />
                  )}
                  <span className="stack-name">{item.name}</span>
                  {item.desc && <p className="stack-desc">{item.desc}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
