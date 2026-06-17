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
      <div className="hero-top">
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
      </div>

      <div className="hero-content">
        <div className="hero-intro">
          <p className="hero-greeting">Hello, I&apos;m</p>
          <h1 className="hero-name">
            <span>Jamaica</span>
            <span>Anuba</span>
          </h1>
        </div>

        <div className="hero-photo-wrap">
          <div className="hero-photo-glow" aria-hidden />
          <img
            src="/images/grad-pic.jpg"
            alt="Jamaica Anuba in graduation cap and gown"
            className="hero-photo"
          />
        </div>

        <div className="hero-title-block">
          <p className="hero-role-label">Creative</p>
          <HeroRoleTypewriter />
        </div>
      </div>
    </header>
  )
}
