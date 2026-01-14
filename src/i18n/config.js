import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import enUI from "../locales/en/ui.json"
import enSections from "../locales/en/sections.json"
import enHero from "../locales/en/hero.json"
import enAbout from "../locales/en/about.json"
import enResume from "../locales/en/resume.json"
import enPortfolio from "../locales/en/portfolio.json"
import enCertificates from "../locales/en/certificates.json"
import enAITools from "../locales/en/aiTools.json"
import enFooter from "../locales/en/footer.json"
import enPortfolioData from "../locales/en/portfolioData.json"
import enLegacyData from "../locales/en/legacyData.json"
import deUI from "../locales/de/ui.json"
import deSections from "../locales/de/sections.json"
import deHero from "../locales/de/hero.json"
import deAbout from "../locales/de/about.json"
import deResume from "../locales/de/resume.json"
import dePortfolio from "../locales/de/portfolio.json"
import deCertificates from "../locales/de/certificates.json"
import deAITools from "../locales/de/aiTools.json"
import deFooter from "../locales/de/footer.json"
import dePortfolioData from "../locales/de/portfolioData.json"
import deLegacyData from "../locales/de/legacyData.json"

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        ui: enUI,
        sections: enSections,
        hero: enHero,
        about: enAbout,
        resume: enResume,
        portfolio: enPortfolio,
        certificates: enCertificates,
        aiTools: enAITools,
        footer: enFooter,
        portfolioData: enPortfolioData,
        legacyData: enLegacyData,
      },
      de: {
        ui: deUI,
        sections: deSections,
        hero: deHero,
        about: deAbout,
        resume: deResume,
        portfolio: dePortfolio,
        certificates: deCertificates,
        aiTools: deAITools,
        footer: deFooter,
        portfolioData: dePortfolioData,
        legacyData: deLegacyData,
      },
    },
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    defaultNS: "ui",
    ns: [
      "ui",
      "sections",
      "hero",
      "about",
      "resume",
      "portfolio",
      "certificates",
      "aiTools",
      "footer",
      "portfolioData",
      "legacyData",
    ],
  })

export default i18n
