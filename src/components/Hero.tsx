import './Hero.css'

export default function Hero() {
  return (
    <header className="hero" id="home">
      <div className="red-glow hero-glow-left" aria-hidden />
      <div className="red-glow hero-glow-right" aria-hidden />

      <p className="hero-location">CEBU, PHILIPPINES</p>

      <div className="hero-stage">
        <div className="hero-head">
          <h1 className="hero-title oswald-display">PORTFOLIO</h1>
          <p className="hero-tech">
            <span>Figma | Expo | WordPress | PHP | HTML5 |</span>
            <span>CSS3 | React JS & Native | Typescript</span>
          </p>
        </div>

        <div className="hero-photo-wrap">
          <img
            src="/images/grad-pic.jpg"
            alt="Jamaica Anuba in graduation cap and gown"
            className="hero-photo"
          />
        </div>

        <div className="hero-roles">
          <span className="hero-role hero-role--left">ui/ux designer</span>
          <span className="hero-role hero-role--right">web developer</span>
        </div>
      </div>
    </header>
  )
}
