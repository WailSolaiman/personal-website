import { animate, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"

function parseStatValue(raw) {
  const match = String(raw).match(/^(\d+)(.*)$/)
  if (!match) return { target: 0, suffix: String(raw) }
  return { target: Number(match[1]), suffix: match[2] ?? "" }
}

function AnimatedCounter({
  value,
  className,
  style,
  duration = 2,
  active,
}) {
  const ref = useRef(null)
  const internalInView = useInView(ref, { once: true, amount: 0.4 })
  const shouldAnimate = active ?? internalInView
  const { target, suffix } = parseStatValue(value)
  const [display, setDisplay] = useState(`0${suffix}`)

  useEffect(() => {
    if (!shouldAnimate) return undefined
    setDisplay(`0${suffix}`)
    const controls = animate(0, target, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(`${Math.round(latest)}${suffix}`),
    })
    return () => controls.stop()
  }, [shouldAnimate, target, suffix, duration])

  return (
    <span ref={ref} className={className} style={style}>
      {display}
    </span>
  )
}

export default AnimatedCounter
