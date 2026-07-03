import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { SITE_STATS } from "../../data/siteStats"
import { useRevealAnimation } from "../../hooks/useRevealAnimation"
import AnimatedCounter from "../common/AnimatedCounter"

function QuickStats() {
  const { t } = useTranslation("ui")
  const reveal = useRevealAnimation({
    initial: { opacity: 0, y: 30 },
    transition: { duration: 0.6, delay: 0.4 },
  })
  const items = [
    { number: SITE_STATS.projects, label: t("stats.projectsCompleted"), duration: 2.2 },
    { number: SITE_STATS.years, label: t("stats.yearsExperience"), duration: 1.4 },
    { number: SITE_STATS.clients, label: t("stats.happyClients"), duration: 2 },
  ]

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto"
      {...reveal}
    >
      {items.map((item) => (
        <div key={item.label} className="text-center">
          <AnimatedCounter
            value={item.number}
            duration={item.duration}
            className="text-3xl font-bold mb-2 block"
            style={{ color: "var(--accent-purple)" }}
          />
          <div className="text-sm text-text-secondary">{item.label}</div>
        </div>
      ))}
    </motion.div>
  )
}

export default QuickStats
