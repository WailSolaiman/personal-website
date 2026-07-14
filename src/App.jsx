import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MotionConfig } from "framer-motion"
import { ThemeProvider } from "./contexts/ThemeContext"
import { LanguageProvider } from "./contexts/LanguageContext"
import { useIsMobile } from "./hooks/useIsMobile"
import Header from "./components/header"
import HomePage from "./pages/HomePage"
import PrivacyPage from "./pages/PrivacyPage"
import ImprintPage from "./pages/ImprintPage"

function AppContent() {
  const isMobile = useIsMobile()

  return (
    <MotionConfig reducedMotion={isMobile ? "always" : "never"}>
      <div className="min-h-screen bg-background text-text-primary transition-colors duration-300 dark:bg-background dark:text-text-primary">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <HomePage />
              </>
            }
          />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/imprint" element={<ImprintPage />} />
        </Routes>
      </div>
    </MotionConfig>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <LanguageProvider>
          <AppContent />
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
