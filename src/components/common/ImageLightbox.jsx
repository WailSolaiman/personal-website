import { motion, AnimatePresence } from "framer-motion"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { FaTimes } from "react-icons/fa"

function ImageLightbox({ isOpen, onClose, imageSrc, imageAlt }) {
  const { t } = useTranslation("ui")

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) onClose()
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={imageAlt}
        >
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-default"
            onClick={onClose}
            aria-label={t("labels.closeModal")}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative max-h-[90vh] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute -top-3 -right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-lg transition-colors hover:bg-white dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
              aria-label={t("labels.closeModal")}
            >
              <FaTimes className="h-4 w-4" />
            </button>
            <img
              src={imageSrc}
              alt={imageAlt}
              className="max-h-[90vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default ImageLightbox
