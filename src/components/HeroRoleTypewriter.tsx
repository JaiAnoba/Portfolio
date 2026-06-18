import { useEffect, useState } from 'react'
import TextType from './TextType/TextType'

const ROLES = [
  { primary: 'Frontend', secondary: 'Developer' },
  { primary: 'Web', secondary: 'Developer' },
  { primary: 'App', secondary: 'Developer' },
  { primary: 'UI/UX', secondary: 'Designer' },
] as const

const LONGEST_PRIMARY = 'Frontend'
const LONGEST_SECONDARY = 'Developer'

type Phase =
  | 'type-primary'
  | 'type-secondary'
  | 'pause'
  | 'delete-secondary'
  | 'delete-primary'

const TYPEWRITER_PROPS = {
  showCursor: false,
  loop: false,
  typingSpeed: 58,
  deletingSpeed: 38,
  variableSpeed: { min: 48, max: 72 },
  pauseDuration: 2600,
  initialDelay: 0,
} as const

interface HeroRoleTypewriterProps {
  initialDelay?: number
  pauseDuration?: number
}

export default function HeroRoleTypewriter({
  initialDelay = 600,
  pauseDuration = 2600,
}: HeroRoleTypewriterProps) {
  const [roleIndex, setRoleIndex] = useState(0)
  const [phase, setPhase] = useState<Phase>('type-primary')
  const [started, setStarted] = useState(false)

  const role = ROLES[roleIndex]

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), initialDelay)
    return () => clearTimeout(timeout)
  }, [initialDelay])

  useEffect(() => {
    if (!started || phase !== 'pause') return

    const timeout = setTimeout(() => setPhase('delete-secondary'), pauseDuration)
    return () => clearTimeout(timeout)
  }, [started, phase, pauseDuration])

  const typewriterProps = { ...TYPEWRITER_PROPS, pauseDuration }

  return (
    <h2 className="hero-role-title hero-role-typewriter" aria-live="polite" aria-atomic="true">
      <span className="hero-role-line">
        <span className="hero-role-ghost" aria-hidden>
          {LONGEST_PRIMARY}
        </span>
        {started && phase === 'type-primary' ? (
          <TextType
            key={`primary-type-${roleIndex}`}
            as="span"
            className="hero-role-gradient hero-role-live"
            text={role.primary}
            mode="type"
            holdAfterType
            onTypeComplete={() => setPhase('type-secondary')}
            {...typewriterProps}
          />
        ) : started && phase === 'delete-primary' ? (
          <TextType
            key={`primary-delete-${roleIndex}`}
            as="span"
            className="hero-role-gradient hero-role-live"
            text={role.primary}
            mode="delete"
            onSentenceComplete={() => {
              setRoleIndex((index) => (index + 1) % ROLES.length)
              setPhase('type-primary')
            }}
            {...typewriterProps}
          />
        ) : started ? (
          <TextType
            key={`primary-display-${roleIndex}-${phase}`}
            as="span"
            className="hero-role-gradient hero-role-live"
            text={role.primary}
            mode="display"
            {...typewriterProps}
          />
        ) : (
          <span className="hero-role-gradient hero-role-live" />
        )}
      </span>

      <span className="hero-role-line">
        <span className="hero-role-ghost" aria-hidden>
          {LONGEST_SECONDARY}
        </span>
        {started && phase === 'type-secondary' ? (
          <TextType
            key={`secondary-type-${roleIndex}`}
            as="span"
            className="hero-role-secondary hero-role-live"
            text={role.secondary}
            mode="type"
            holdAfterType
            onTypeComplete={() => setPhase('pause')}
            {...typewriterProps}
          />
        ) : started && phase === 'delete-secondary' ? (
          <TextType
            key={`secondary-delete-${roleIndex}`}
            as="span"
            className="hero-role-secondary hero-role-live"
            text={role.secondary}
            mode="delete"
            onSentenceComplete={() => setPhase('delete-primary')}
            {...typewriterProps}
          />
        ) : started && phase !== 'type-primary' && phase !== 'delete-primary' ? (
          <TextType
            key={`secondary-display-${roleIndex}-${phase}`}
            as="span"
            className="hero-role-secondary hero-role-live"
            text={role.secondary}
            mode="display"
            {...typewriterProps}
          />
        ) : (
          <span className="hero-role-secondary hero-role-live" />
        )}
      </span>
    </h2>
  )
}
