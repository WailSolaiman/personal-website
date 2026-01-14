import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

function PortfolioHeader() {
  const { t } = useTranslation(["sections", "portfolio"])
  return (
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
        {t("sections:titles.portfolio")}
      </h2>
      <div className="w-16 h-1 bg-gradient-to-r from-primary to-text-accent mx-auto rounded-full"></div>
      <p className="text-lg text-text-secondary/80 max-w-2xl mx-auto mt-6">
        {t("portfolio:description")}
      </p>
    </motion.div>
  )
}

export default PortfolioHeader
