import './About.css'

const SOCIALS = [
  { name: 'GitHub', icon: '/images/github.png', href: 'https://github.com' },
  { name: 'LinkedIn', icon: '/images/linkedin.png', href: 'https://linkedin.com' },
  { name: 'Facebook', icon: '/images/facebook.png', href: 'https://facebook.com' },
  { name: 'Instagram', icon: '/images/instagram.png', href: 'https://instagram.com' },
]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="red-glow about-glow" aria-hidden />
      <div className="about-blur about-blur-top" aria-hidden />
      <div className="about-blur about-blur-bottom" aria-hidden />

      <div className="about-content">
        <p className="hand-label-sm about-location">Based in Cebu, PH</p>

        <h2 className="about-heading oswald-display">
          HELLO, I&apos;M <span className="about-name">JAMAICA ANUBA</span>
        </h2>

        <p className="about-text">
          I am a UI/UX Designer and Web Developer driven by the pursuit of building smooth,
          production-ready digital products. My approach to technology is strictly
          multidisciplinary. I bridge the gap between high-fidelity aesthetics and functional web
          engineering.
        </p>

        <p className="about-text">
          With my background in Information Technology, I can take a project from the very first
          sketch to the final code. I spend my time mapping out user flows and prototyping in Figma,
          then bringing those designs to life.
        </p>

        <div className="about-socials">
          {SOCIALS.map((s) => (
            <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name}>
              <img src={s.icon} alt="" width={38} height={38} />
            </a>
          ))}
        </div>
      </div>

      <div className="about-portrait-wrap">
        <img
          src="/images/about-portrait.jpg"
          alt="Jamaica Anuba portrait"
          className="about-portrait"
        />
      </div>
    </section>
  )
}
