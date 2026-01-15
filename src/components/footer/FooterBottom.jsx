import { AnimatePresence, motion } from "framer-motion"
import { useTheme } from "../../contexts/ThemeContext"
import { useTranslation } from "react-i18next"
import { useEffect, useState } from "react"
import { FaTimes } from "react-icons/fa"

function FooterBottom() {
  const { theme } = useTheme()
  const { t } = useTranslation(["footer", "ui"])
  const isLightTheme = theme === "light"
  const currentYear = new Date().getFullYear()
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false)

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isPrivacyOpen) {
        setIsPrivacyOpen(false)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isPrivacyOpen])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isPrivacyOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isPrivacyOpen])

  const privacyPointsRaw = t("footer:privacy.points", { returnObjects: true })
  const privacyPoints = Array.isArray(privacyPointsRaw) ? privacyPointsRaw : []

  return (
    <motion.div
      className="border-t border-border/30 pt-8 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Navigation Links */}
      <div className="flex flex-wrap justify-center gap-8 mb-6 text-sm">
        {[
          { name: t("ui:navigation.home"), href: "#home" },
          { name: t("ui:navigation.about"), href: "#about" },
          { name: t("ui:navigation.resume"), href: "#resume" },
          { name: t("ui:navigation.portfolio"), href: "#portfolio" },
          { name: t("ui:navigation.legacy"), href: "#legacy" },
        ].map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-text-secondary/70 transition-colors duration-300 hover-accent"
          >
            {link.name}
          </a>
        ))}
        <button
          type="button"
          onClick={() => setIsPrivacyOpen(true)}
          className="text-text-secondary/70 transition-colors duration-300 hover-accent"
          aria-haspopup="dialog"
          aria-expanded={isPrivacyOpen}
        >
          {t("footer:privacy.label")}
        </button>
      </div>

      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`mb-6 p-3 bg-card/50 hover:bg-card border ${
          isLightTheme ? "border-black/20" : "border-border/30"
        } rounded-full transition-all duration-300 group`}
        aria-label="Back to top"
      >
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            className="w-5 h-5 text-text-secondary/70 group-hover:text-primary transition-colors duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.div>
      </button>

      {/* Copyright */}
      <div className="text-text-secondary/60 text-sm">
        <p>
          © {currentYear}{" "}
          <span
            className="font-semibold"
            style={{ color: "var(--accent-purple)" }}
          >
            Wail Solaiman
          </span>
          . {t("footer:copyright")}{" "}
          <motion.span
            className="inline-block"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
          >
            ❤️
          </motion.span>{" "}
        </p>
        <p className="mt-2 text-xs">
          {t("footer:builtWith")}
        </p>
      </div>

      {/* Privacy Modal */}
      <AnimatePresence>
        {isPrivacyOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
              onClick={() => setIsPrivacyOpen(false)}
            />

            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className={`w-full max-w-xl overflow-hidden rounded-2xl shadow-2xl bg-white dark:bg-gray-800 border ${
                  isLightTheme ? "border-black/10" : "border-border"
                }`}
                role="dialog"
                aria-modal="true"
                aria-labelledby="privacy-modal-title"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between p-4 md:p-6 border-b border-border bg-white dark:bg-gray-800">
                  <h3
                    id="privacy-modal-title"
                    className="text-lg md:text-xl font-bold text-text-primary"
                  >
                    {t("footer:privacy.title")}
                  </h3>
                  <button
                    onClick={() => setIsPrivacyOpen(false)}
                    className="p-2 hover:bg-surface rounded-lg transition-colors"
                    aria-label={t("ui:labels.closeModal")}
                  >
                    <FaTimes className="w-5 h-5 text-text-secondary" />
                  </button>
                </div>

                <div className="p-4 md:p-6 text-left">
                  <p className="text-text-secondary/80 mb-4">
                    {t("footer:privacy.intro")}
                  </p>
                  <ul className="space-y-2 list-disc pl-5 text-sm text-text-secondary/80">
                    {privacyPoints.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default FooterBottom
