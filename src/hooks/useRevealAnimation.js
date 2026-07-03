import { useIsMobile } from "./useIsMobile"

function buildReveal(isMobile, {
  initial = { opacity: 0, y: 40 },
  visible = { opacity: 1, y: 0 },
  transition = { duration: 0.6 },
  viewport = { once: true },
} = {}) {
  if (isMobile) return { initial: false }
  return { initial, whileInView: visible, transition, viewport }
}

/** Hook for a single reveal animation in a component. */
export function useRevealAnimation(config) {
  const isMobile = useIsMobile()
  return buildReveal(isMobile, config)
}

/** Non-hook helper — use inside loops with `isMobile` from `useIsMobile()`. */
export function revealAnimation(isMobile, config) {
  return buildReveal(isMobile, config)
}
