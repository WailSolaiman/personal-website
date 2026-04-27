import { createContext, useContext, useState, useEffect } from "react"
import { useTranslation } from "react-i18next"

const LanguageContext = createContext()

function readStoredLanguage() {
  if (typeof window === "undefined") return "en"
  return localStorage.getItem("language") || "en"
}

function applyDocumentLanguage(lng) {
  const isRtl = lng === "ar"
  document.documentElement.lang = lng === "ar" ? "ar" : lng === "de" ? "de" : "en"
  document.documentElement.dir = isRtl ? "rtl" : "ltr"
}

export function LanguageProvider({ children }) {
  const { i18n } = useTranslation()
  const [language, setLanguage] = useState(readStoredLanguage)

  useEffect(() => {
    applyDocumentLanguage(language)
    if (i18n.language !== language) {
      i18n.changeLanguage(language)
    }
  }, [language, i18n])

  const changeLanguage = (lng) => {
    setLanguage(lng)
    localStorage.setItem("language", lng)
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
