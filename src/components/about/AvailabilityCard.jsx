import { motion } from "framer-motion"

function AvailabilityCard() {
  return (
    <motion.div
      className="bg-card rounded-xl p-4 shadow-soft border border-border/20 max-w-md mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-center gap-3 mb-2">
        <div className="w-2 h-2 bg-secondary rounded-full animate-bounce-subtle"></div>
        <span className="text-lg font-semibold text-text-primary">
          Available for new projects
        </span>
      </div>
      <div className="text-sm text-text-secondary/70">
        Let's build something amazing together
      </div>
    </motion.div>
  )
}

export default AvailabilityCard
