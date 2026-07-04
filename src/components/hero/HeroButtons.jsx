import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

function HeroButtons() {
  const { t } = useTranslation("ui")
  return (
    <motion.div
      className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row md:mt-10"
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.55, duration: 0.6 }}
    >
      <a
        href="#portfolio"
        className="group px-8 py-4 bg-gradient-to-r from-primary-default to-primary-dark text-white font-semibold rounded-xl shadow-hard hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 md:animate-bounce-subtle inline-block"
      >
        {t("buttons.viewWork")}
      </a>

      <a
        href="#footer"
        className="hidden sm:inline-block px-8 py-4 bg-white text-gray-800 font-semibold rounded-xl border border-purple-300/50 backdrop-blur-sm hover:border-purple-600 hover:text-purple-900 transition-all duration-300"
      >
        {t("buttons.contact")}
      </a>
    </motion.div>
  )
}

export default HeroButtons
