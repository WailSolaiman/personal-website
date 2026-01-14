import { motion, AnimatePresence } from "framer-motion"
import { useEffect } from "react"
import { FaTimes } from "react-icons/fa"

function CertificateModal({ isOpen, onClose, title = "Certificate", imageSrc, imageAlt = "Certificate Image" }) {
  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="bg-white dark:bg-gray-800 border border-border shadow-2xl w-full max-w-5xl max-h-[95vh] overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 md:p-6 border-b border-border bg-white dark:bg-gray-800">
                <h3 className="text-lg md:text-xl font-bold text-text-primary">
                  {title}
                </h3>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-surface rounded-lg transition-colors"
                  aria-label="Close modal"
                >
                  <FaTimes className="w-5 h-5 text-text-secondary" />
                </button>
              </div>

              {/* Image Content */}
              <div className="p-4 md:p-6 bg-white dark:bg-gray-800 overflow-y-auto max-h-[calc(95vh-80px)]">
                <div className="relative w-full bg-white rounded-lg overflow-hidden border border-border shadow-lg">
                  {imageSrc ? (
                    <img
                      src={imageSrc}
                      alt={imageAlt}
                      className="w-full h-auto object-contain"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-96 text-text-secondary bg-gray-50">
                      <p>No image available</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

export default CertificateModal
