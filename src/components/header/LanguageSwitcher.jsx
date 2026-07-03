import { useLanguage } from "../../contexts/LanguageContext"
import { motion } from "framer-motion"

function LanguageSwitcher({ compact = false }) {
  const { language, changeLanguage } = useLanguage()

  const languages = [
    { code: "de", label: "DE", name: "Deutsch" },
    { code: "en", label: "EN", name: "English" },
    { code: "ar", label: "AR", name: "العربية" },
  ]

  return (
    <div
      className={`flex flex-wrap items-center justify-end ${
        compact ? "gap-0.5" : "gap-1 md:gap-2"
      }`}
    >
      {languages.map((lang) => (
        <motion.button
          key={lang.code}
          type="button"
          onClick={() => changeLanguage(lang.code)}
          className={`rounded-lg font-medium transition-all duration-200 ${
            compact
              ? "px-1.5 py-0.5 text-[10px] md:text-xs"
              : "px-2 py-1 text-xs md:px-3 md:py-1.5 md:text-sm"
          } ${
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
