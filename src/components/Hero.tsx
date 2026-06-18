import FadeContent from './FadeContent/FadeContent'
import './Hero.css'
import HeroRoleTypewriter from './HeroRoleTypewriter'

const SOCIALS = [
  { name: 'GitHub', icon: '/images/github.png', href: 'https://github.com/JaiAnoba' },
  { name: 'LinkedIn', icon: '/images/linkedin.png', href: 'https://www.linkedin.com/in/jamaica-anuba/' },
  { name: 'Facebook', icon: '/images/facebook.png', href: 'https://www.facebook.com/jai.anoba/' },
]

export default function Hero() {
  return (
    <header className="hero" id="home">
      <FadeContent className="hero-top" blur={false} distance={20} duration={800}>
        <a href="#home" className="hero-logo" aria-label="Home">
          <img src="/jai_logo.png" alt="Jai Anoba" />
        </a>

        <nav className="hero-socials" aria-label="Social links">
          {SOCIALS.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
            >
              <img src={s.icon} alt="" width={38} height={38} />
            </a>
          ))}
        </nav>
      </FadeContent>

      <div className="hero-content">
        <FadeContent className="hero-intro" delay={100}>
          <p className="hero-greeting">Hello, I&apos;m</p>
          <h1 className="hero-name">
            <span>Jamaica</span>
            <span>Anuba</span>
          </h1>
        </FadeContent>

        <FadeContent className="hero-photo-wrap" delay={220}>
          <div className="hero-photo-glow" aria-hidden />
          <img
            src="/images/grad-pic.jpg"
            alt="Jamaica Anuba in graduation cap and gown"
            className="hero-photo"
          />
        </FadeContent>

        <FadeContent className="hero-title-block" delay={340}>
          <p className="hero-role-label">Creative</p>
          <HeroRoleTypewriter />
        </FadeContent>
      </div>
    </header>
  )
}
