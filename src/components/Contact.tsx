import { useState } from 'react'
import './Contact.css'

const EMAIL = 'JAMAICAANUBA3@GMAIL.COM'

const SOCIALS = [
  { name: 'GitHub', icon: '/images/github.png', href: 'https://github.com/JaiAnoba' },
  { name: 'LinkedIn', icon: '/images/linkedin.png', href: 'https://www.linkedin.com/in/jamaica-anuba/' },
  { name: 'Facebook', icon: '/images/facebook.png', href: 'https://www.facebook.com/jai.anoba/' },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('jamaicaanuba3@gmail.com')
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <footer className="contact" id="contact">
      <div className="red-glow contact-glow" aria-hidden />

      <div className="contact-layout">
        <div className="contact-left">
          <h2 className="contact-title">
            LET&apos;S BUILD <span className="gradient-text-vertical">SOMETHING</span>
          </h2>

          <p className="contact-desc">
            Available for full-time roles and freelance opportunities.
            <br />
            Let&apos;s team up to take your ideas from initial Figma concepts all the way into
            production-ready products.
          </p>

          <div className="contact-info">
            <p className="section-label contact-talk">LET&apos;S TALK</p>
            <div className="contact-email-row">
              <a href="mailto:jamaicaanuba3@gmail.com" className="contact-email">
                {EMAIL}
              </a>
              <button
                type="button"
                className="contact-copy"
                onClick={copyEmail}
                aria-label="Copy email address"
              >
                <img src="/images/copy-icon.png" alt="" width={27} height={27} />
                {copied && <span className="contact-copied">Copied!</span>}
              </button>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <div className="contact-socials">
            {SOCIALS.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name}>
                <img src={s.icon} alt="" width={38} height={38} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="contact-footer">
        <p>© 2026 Jai Anoba. All rights reserved.</p>
        <p className="contact-signature">Jai Anoba</p>
      </div>
    </footer>
  )
}