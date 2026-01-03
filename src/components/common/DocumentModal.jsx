import { motion, AnimatePresence } from "framer-motion"
import { useEffect } from "react"
import { FaTimes } from "react-icons/fa"

function DocumentModal({
  isOpen,
  onClose,
  title = "Document",
  imageSrc,
  imageAlt = "Document Image",
  translationContent = "Translation content will be displayed here.",
  translationTitle = "English Translation",
}) {
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
            className="fixed inset-0 bg-black/50 z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-2xl w-full md:max-w-6xl max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 md:p-6 border-b border-border">
                <h3 className="text-lg md:text-xl font-bold text-text-primary">
                  {title}
                </h3>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-surface-hover rounded-lg transition-colors"
                  aria-label="Close modal"
                >
                  <FaTimes className="w-5 h-5 text-text-secondary" />
                </button>
              </div>

              {/* Content */}
              <div className="flex flex-col md:flex-row min-h-[400px] md:h-[calc(100%-80px)] overflow-y-auto md:overflow-hidden">
                {/* Image Section */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="w-full md:w-3/5 p-4 md:p-6 border-r border-border"
                >
                  <div className="bg-surface-hover rounded-lg p-4 h-full">
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-text-secondary uppercase tracking-wide">
                        Document Image
                      </h4>
                    </div>

                    <div className="relative w-full h-[60vh] md:h-[80vh] bg-white rounded-lg overflow-hidden border border-border">
                      {imageSrc ? (
                        <img
                          src={imageSrc}
                          alt={imageAlt}
                          className="w-full h-full object-contain object-top"
                          loading="lazy"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full text-text-secondary bg-gray-50">
                          <p>No image available</p>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                    </div>
                  </div>
                </motion.div>

                {/* Translation Section */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="w-full md:w-2/5 p-4 md:p-6"
                >
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 h-full overflow-y-auto max-h-[calc(100vh-150px)] custom-scrollbar">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-4 h-4 bg-primary rounded-full"></span>
                      <h4 className="text-sm font-medium text-text-secondary uppercase tracking-wide">
                        {translationTitle}
                      </h4>
                    </div>

                    <div className="space-y-3 text-sm leading-relaxed">
                      {typeof translationContent === "string" ? (
                        <div className="text-text-secondary whitespace-pre-line">
                          {translationContent}
                        </div>
                      ) : (
                        translationContent
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

export default DocumentModal
