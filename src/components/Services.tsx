import './Services.css'

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="red-glow services-glow" aria-hidden />

      <p className="hand-label-sm services-sub">Services</p>
      <h2 className="services-title gradient-text">WHAT I DO</h2>

      <div className="services-grid">
        <div className="services-copy">
          <h3 className="hand-title">UI/UX Design</h3>
          <p>
            I design how an app feels and functions, wireframing and building interactive
            prototypes in Figma to create intuitive layouts that make sense to the user.
          </p>
          <div className="services-underline" aria-hidden />
        </div>

        <div className="services-visual">
          <div className="services-card-stack" aria-hidden>
            <div className="services-card services-card-back" />
            <div className="services-card services-card-mid" />
          </div>
          <img
            src="/images/ui-mockup.jpg"
            alt="UI dashboard mockup on tablet"
            className="services-mockup"
          />
          <div className="services-dots" aria-label="Carousel pagination">
            <span className="active" />
            <span />
            <span />
          </div>
        </div>
      </div>
    </section>
  )
}
