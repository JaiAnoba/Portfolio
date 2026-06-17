import { useEffect, useState } from 'react'

const ROLES = [
  { primary: 'Frontend', secondary: 'Developer' },
  { primary: 'Web', secondary: 'Developer' },
  { primary: 'App', secondary: 'Developer' },
  { primary: 'UI/UX', secondary: 'Designer' },
] as const

const LONGEST_PRIMARY = 'Frontend'
const LONGEST_SECONDARY = 'Development'

type Phase = 'type-primary' | 'type-secondary' | 'pause' | 'delete-secondary' | 'delete-primary'

interface HeroRoleTypewriterProps {
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
  initialDelay?: number
}

export default function HeroRoleTypewriter({
  typingSpeed = 70,
  deletingSpeed = 40,
  pauseDuration = 2200,
  initialDelay = 600,
}: HeroRoleTypewriterProps) {
  const [roleIndex, setRoleIndex] = useState(0)
  const [primaryLen, setPrimaryLen] = useState(0)
  const [secondaryLen, setSecondaryLen] = useState(0)
  const [phase, setPhase] = useState<Phase>('type-primary')
  const [started, setStarted] = useState(false)

  const role = ROLES[roleIndex]
  const primaryText = role.primary.slice(0, primaryLen)
  const secondaryText = role.secondary.slice(0, secondaryLen)

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), initialDelay)
    return () => clearTimeout(timeout)
  }, [initialDelay])

  useEffect(() => {
    if (!started) return

    let timeout: ReturnType<typeof setTimeout>

    switch (phase) {
      case 'type-primary':
        if (primaryLen < role.primary.length) {
          timeout = setTimeout(() => setPrimaryLen((len) => len + 1), typingSpeed)
        } else {
          setPhase('type-secondary')
        }
        break

      case 'type-secondary':
        if (secondaryLen < role.secondary.length) {
          timeout = setTimeout(() => setSecondaryLen((len) => len + 1), typingSpeed)
        } else {
          timeout = setTimeout(() => setPhase('pause'), pauseDuration)
        }
        break

      case 'pause':
        setPhase('delete-secondary')
        break

      case 'delete-secondary':
        if (secondaryLen > 0) {
          timeout = setTimeout(() => setSecondaryLen((len) => len - 1), deletingSpeed)
        } else {
          setPhase('delete-primary')
        }
        break

      case 'delete-primary':
        if (primaryLen > 0) {
          timeout = setTimeout(() => setPrimaryLen((len) => len - 1), deletingSpeed)
        } else {
          const nextIndex = (roleIndex + 1) % ROLES.length
          setRoleIndex(nextIndex)
          setPhase('type-primary')
        }
        break
    }

    return () => clearTimeout(timeout)
  }, [
    started,
    phase,
    primaryLen,
    secondaryLen,
    roleIndex,
    role.primary.length,
    role.secondary.length,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ])

  const showPrimaryCursor = phase === 'type-primary'
  const showSecondaryCursor =
    phase === 'type-secondary' || phase === 'pause' || phase === 'delete-secondary'

  return (
    <h2 className="hero-role-title hero-role-typewriter" aria-live="polite" aria-atomic="true">
      <span className="hero-role-line">
        <span className="hero-role-ghost" aria-hidden>
          {LONGEST_PRIMARY}
        </span>
        <span className="hero-role-gradient hero-role-live">
          {primaryText}
          {showPrimaryCursor && (
            <span className="hero-role-cursor" aria-hidden>
              |
            </span>
          )}
        </span>
      </span>

      <span className="hero-role-line">
        <span className="hero-role-ghost" aria-hidden>
          {LONGEST_SECONDARY}
        </span>
        <span className="hero-role-secondary hero-role-live">
          {secondaryText}
          {showSecondaryCursor && (
            <span className="hero-role-cursor" aria-hidden>
              |
            </span>
          )}
        </span>
      </span>
    </h2>
  )
}
