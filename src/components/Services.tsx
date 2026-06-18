import FadeContent from './FadeContent/FadeContent'
import './Services.css'

const SERVICES_DATA = [
  {
    titleLines: ['UI/UX', 'Design'],
    text: 'Designing intuitive, user-focused layouts by wireframing and prototyping in Figma.',
  },
  {
    titleLines: ['Front-End', 'Development'],
    text: 'Building fast, smooth mobile and web tools using React Native and TypeScript.',
  },
  {
    titleLines: ['Web', 'Development'],
    text: 'Creating responsive, scalable websites and custom WordPress platforms.',
  },
  {
    titleLines: ['App', 'Development'],
    text: 'Architecting and building high-performance mobile applications tailored to user needs.',
  },
] as const

export default function Services() {
  return (
    <section className="services" id="services">
      <FadeContent>
        <p className="services-sub">Services</p>
      </FadeContent>
      <FadeContent delay={80}>
        <h2 className="services-title">What I Offer</h2>
      </FadeContent>

      <div className="services-container">
        {/* Dashed arc connectors between items — rendered behind content */}
        <svg
          className="services-arcs"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Arc 1→2: Downward (Belly-Down/Smile) */}
          <path
            d="M 245 45 Q 300 85, 355 45"
            fill="none"
            stroke="rgba(255,255,255,0.75)"
            strokeWidth="1.8"
            strokeDasharray="6 6"
          />
          
          {/* Arc 2→3: Upward (Belly-Up/Frown) */}
          <path
            d="M 545 55 Q 600 15, 655 55"
            fill="none"
            stroke="rgba(255,255,255,0.75)"
            strokeWidth="1.8"
            strokeDasharray="6 6"
          />
          
          {/* Arc 3→4: Downward (Belly-Down/Smile) */}
          <path
            d="M 845 45 Q 900 85, 955 45"
            fill="none"
            stroke="rgba(255,255,255,0.75)"
            strokeWidth="1.8"
            strokeDasharray="6 6"
          />
        </svg>

        {SERVICES_DATA.map((service, index) => (
          <FadeContent key={index} className="service-item" delay={140 + index * 90}>
            <div className="service-number-stage" aria-hidden="true">
              <span className="service-number">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
            <h3 className="service-heading">
              <span className="service-heading-line">{service.titleLines[0]}</span>
              <span className="service-heading-line">{service.titleLines[1]}</span>
            </h3>
            <p className="service-text">{service.text}</p>
          </FadeContent>
        ))}
      </div>
    </section>
  )
}