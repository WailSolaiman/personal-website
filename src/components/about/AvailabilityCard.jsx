import { motion } from "framer-motion"

function AvailabilityCard() {
  return (
    <motion.div
      className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 backdrop-blur-sm rounded-2xl p-6 xl:p-8 border border-green-200/50 dark:border-green-800/30 w-full max-w-xs xl:max-w-sm mx-auto shadow-soft min-h-[220px] xl:min-h-[240px] flex flex-col justify-center"
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.8, type: "spring", stiffness: 200 }}
      viewport={{ once: true }}
    >
      {/* Header with animated elements */}
      <motion.div
        className="flex items-center justify-center gap-4 mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="relative"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full shadow-lg"></div>
          <div className="absolute inset-0 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
        </motion.div>

        <div className="text-center">
          <h4 className="text-lg font-bold text-text-primary mb-1">
            Available for Projects
          </h4>
          <p className="text-xs text-text-secondary/70 font-medium">
            Ready to collaborate
          </p>
        </div>
      </motion.div>

      {/* Main content */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6 }}
        viewport={{ once: true }}
      >
        <p className="text-text-primary/90 text-sm leading-relaxed mb-6">
          Currently accepting new projects and exciting collaborations. Let's
          create something extraordinary together.
        </p>

        {/* Action buttons */}
        <div className="space-y-3">
          <motion.a
            href="mailto:me@wailsolaiman.com"
            className="block w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold py-3 px-6 rounded-xl shadow-soft text-center no-underline hover:opacity-90 transition-opacity duration-200"
            whileTap={{ scale: 0.98 }}
          >
            💬 Let's Talk
          </motion.a>

          <motion.a
            href="#footer"
            className="inline-block text-sm text-green-600 font-medium hover:text-green-700 transition-colors duration-200"
          >
            View contact details →
          </motion.a>
        </div>
      </motion.div>

      {/* Decorative bottom element */}
      <motion.div
        className="mt-6 flex justify-center"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.8 }}
        viewport={{ once: true }}
      >
        <div className="flex space-x-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default AvailabilityCard
