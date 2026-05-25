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
    icons: ['https://img.icons8.com/color/96/figma.png'],
    desc: 'The core of my UI/UX workflow. Mapping user flows, building design systems, and crafting high-fidelity prototypes.',
    size: 'large',
    brandColor: '#c42d00',
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
  return (
    <section className="foundation" id="foundation">
      <div className="red-glow foundation-glow-left" aria-hidden />

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
      </div>
    </section>
  )
}