import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

function LegacyFooter() {
  const { t } = useTranslation("sections")

  return (
    <motion.div
      className="mt-16 text-center font-mono"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <div className="inline-block bg-card/30 backdrop-blur-sm rounded-lg border border-secondary/20 p-6 max-w-2xl">
        <div className="flex items-center justify-center gap-2 mb-4 retro-text-medium">
          <span>$</span>
          <span className="animate-pulse">●</span>
          <span>legacy_archive</span>
        </div>
        <p className="text-text-secondary text-sm leading-relaxed">
          {t("legacy.footerText")}
          <br />
          <span className="retro-text-medium text-xs opacity-75">
            {t("legacy.footerHint")}
          </span>
        </p>
      </div>
    </motion.div>
  )
}

export default LegacyFooter
