import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

function ResumeSectionHeader() {
  const { t } = useTranslation("sections")
  return (
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
        {t("titles.resume")}
      </h2>
      <p className="text-lg text-text-secondary mb-6">{t("descriptions.resume")}</p>
      <div className="w-16 h-1 bg-gradient-to-r from-primary to-text-accent mx-auto rounded-full"></div>
    </motion.div>
  )
}

export default ResumeSectionHeader
