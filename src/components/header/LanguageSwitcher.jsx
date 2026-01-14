import { useLanguage } from "../../contexts/LanguageContext"
import { motion } from "framer-motion"

function LanguageSwitcher() {
  const { language, changeLanguage } = useLanguage()

  const languages = [
    { code: "en", label: "EN", name: "English" },
    { code: "de", label: "DE", name: "Deutsch" },
  ]

  return (
    <div className="flex items-center gap-1 md:gap-2">
      {languages.map((lang) => (
        <motion.button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`px-2 py-1 md:px-3 md:py-1.5 rounded-lg text-xs md:text-sm font-medium transition-all duration-200 ${
            language === lang.code
              ? "bg-white/20 text-white border border-white/30"
              : "text-white/70 hover:text-white hover:bg-white/10 border border-transparent"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title={lang.name}
        >
          {lang.label}
        </motion.button>
      ))}
    </div>
  )
}

export default LanguageSwitcher
