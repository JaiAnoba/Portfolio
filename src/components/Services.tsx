import './Services.css'

const SERVICES_DATA = [
  {
    title: 'ui/ux design',
    text: 'I design how an app feels and functions, wireframing and building interactive prototypes in Figma to create intuitive layouts that make sense to the user.',
  },
  {
    title: 'front-end dev',
    text: 'I write clean, lightweight code using React Native and TypeScript to build smooth mobile apps and web tools that load fast and work perfectly.',
  },
  {
    title: 'web development',
    text: 'I build responsive, easy-to-manage websites and custom WordPress platforms that look great and scale naturally onto any screen.',
  },
  {
    title: 'QA & testing',
    text: 'I ensure software reliability by running detailed functional, usability, and cross-browser tests to catch bugs before launch, delivering a flawless user experience.',
  },
] as const

export default function Services() {
  return (
    <section className="services" id="services">
      <p className="services-sub">Services</p>
      <h2 className="services-title">WHAT I OFFER</h2>

      <div className="services-container">
        {SERVICES_DATA.map((service, index) => (
          <div key={index} className="service-card">
            <p className="service-text">{service.text}</p>
            <h3 className="service-heading">{service.title}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}