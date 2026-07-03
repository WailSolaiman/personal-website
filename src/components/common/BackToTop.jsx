import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslation } from "react-i18next"
import { useTheme } from "../../contexts/ThemeContext"

const SCROLL_SHOW_Y = 320

function BackToTop() {
  const { t } = useTranslation("ui")
  const { theme } = useTheme()
  const isLightTheme = theme === "light"
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SCROLL_SHOW_Y)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.9 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 z-40 p-3 bg-card/80 backdrop-blur-sm hover:bg-card border ${
            isLightTheme ? "border-black/20" : "border-border/30"
          } rounded-full shadow-medium transition-colors duration-300 group`}
          aria-label={t("buttons.backToTop")}
        >
          <svg
            className="w-5 h-5 text-text-secondary/70 group-hover:text-primary transition-colors duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default BackToTop
