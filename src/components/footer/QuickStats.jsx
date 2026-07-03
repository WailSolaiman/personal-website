import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { SITE_STATS } from "../../data/siteStats"

function QuickStats() {
  const { t } = useTranslation("ui")
  const items = [
    { number: SITE_STATS.projects, label: t("stats.projectsCompleted") },
    { number: SITE_STATS.years, label: t("stats.yearsExperience") },
    { number: SITE_STATS.clients, label: t("stats.happyClients") },
  ]

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: true }}
    >
      {items.map((item) => (
        <div key={item.label} className="text-center">
          <div
            className="text-3xl font-bold mb-2"
            style={{ color: "var(--accent-purple)" }}
          >
            {item.number}
          </div>
          <div className="text-sm text-text-secondary">{item.label}</div>
        </div>
      ))}
    </motion.div>
  )
}

export default QuickStats
