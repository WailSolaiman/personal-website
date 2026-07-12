import { AnimatePresence, motion } from "framer-motion"
import { useTheme } from "../../contexts/ThemeContext"
import { useTranslation } from "react-i18next"
import { useEffect, useState } from "react"
import { FaTimes } from "react-icons/fa"
import { useRevealAnimation } from "../../hooks/useRevealAnimation"

function FooterBottom() {
  const { theme } = useTheme()
  const { t } = useTranslation(["footer", "ui"])
  const reveal = useRevealAnimation({
    initial: { opacity: 0 },
    visible: { opacity: 1 },
    transition: { duration: 0.6, delay: 0.8 },
  })
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
      {...reveal}
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

      <div className="mb-6 flex justify-center">
        <img
          src="/images/logo2.webp"
          alt=""
          width={80}
          height={80}
          className="h-16 w-16 rounded-xl object-contain opacity-90 sm:h-20 sm:w-20"
        />
      </div>

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
          . {t("footer:copyright")}
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

                <div className="p-4 md:p-6 text-start">
                  <p className="text-text-secondary/80 mb-4">
                    {t("footer:privacy.intro")}
                  </p>
                  <ul className="space-y-2 list-disc ps-5 text-sm text-text-secondary/80">
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
