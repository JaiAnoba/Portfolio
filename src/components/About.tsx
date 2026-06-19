import FadeContent from './FadeContent/FadeContent'
import './About.css'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="red-glow about-glow about-glow-portrait" aria-hidden />

      <FadeContent className="about-content" delay={0}>
        <div className="red-glow about-glow about-glow-name" aria-hidden />
        <p className="hand-label-sm about-location">Based in Cebu, PH</p>

        <h2 className="about-heading oswald-display">
        BUILT WITH <span className="about-name">INTENTION</span>
        </h2>

        <p className="about-text">
          I design and build across UI/UX, front-end, web, and mobile app development, driven by the pursuit of creating smooth, production-ready digital products. 
          My approach to technology is strictly multidisciplinary. I bridge the gap between high-fidelity aesthetics and functional engineering, end to end.
        </p>

        <p className="about-text about-tagline">
          “No handoffs. No gaps. Just one person seeing it through, from concept to code.”
        </p>

        <a href="#projects" className="about-projects-btn">
          View Projects
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.25"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </a>
      </FadeContent>

      <FadeContent className="about-portrait-wrap" delay={120}>
        <img
          src="/images/about pic.png"
          alt="Jamaica Anuba portrait"
          className="about-portrait"
          width={859}
          height={1024}
          decoding="async"
        />
      </FadeContent>
    </section>
  )
}
