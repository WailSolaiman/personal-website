import { createContext, useContext, useState, useEffect } from "react"
import { useTranslation } from "react-i18next"

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const { i18n } = useTranslation()
  const [language, setLanguage] = useState("en")

  useEffect(() => {
    // Get language from localStorage or default to 'en'
    const savedLanguage = localStorage.getItem("language") || "en"
    setLanguage(savedLanguage)
    i18n.changeLanguage(savedLanguage)
  }, [i18n])

  const changeLanguage = (lng) => {
    setLanguage(lng)
    i18n.changeLanguage(lng)
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
