import { motion } from "framer-motion"

function QuickStats() {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: true }}
    >
      <div className="text-center">
        <div
          className="text-3xl font-bold mb-2"
          style={{ color: "var(--accent-purple)" }}
        >
          50+
        </div>
        <div className="text-sm text-text-secondary">Projects Completed</div>
      </div>
      <div className="text-center">
        <div
          className="text-3xl font-bold mb-2"
          style={{ color: "var(--accent-purple)" }}
        >
          10+
        </div>
        <div className="text-sm text-text-secondary">Years Experience</div>
      </div>
      <div className="text-center">
        <div
          className="text-3xl font-bold mb-2"
          style={{ color: "var(--accent-purple)" }}
        >
          100%
        </div>
        <div className="text-sm text-text-secondary">Client Satisfaction</div>
      </div>
    </motion.div>
  )
}

export default QuickStats
