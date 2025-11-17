import { motion } from "framer-motion"

function SkillsStats() {
  return (
    <div className="grid grid-cols-3 gap-3">
      <motion.div
        className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-3 border border-border/10"
        whileHover={{ y: -2 }}
      >
        <div
          className="text-2xl font-bold mb-1"
          style={{ color: "var(--accent-purple)" }}
        >
          10+
        </div>
        <div className="text-xs font-medium text-text-secondary">Years</div>
        <div className="text-xs text-text-secondary/60 mt-0.5">Experience</div>
      </motion.div>

      <motion.div
        className="text-center p-3 bg-card rounded-xl shadow-soft border border-border/20 hover:shadow-medium transition-all duration-300"
        whileHover={{ y: -3 }}
      >
        <div className="text-2xl font-bold text-secondary mb-1">50+</div>
        <div className="text-xs font-medium text-text-secondary">Projects</div>
        <div className="text-xs text-text-secondary/60 mt-0.5">Completed</div>
      </motion.div>

      <motion.div
        className="text-center p-3 bg-card rounded-xl shadow-soft border border-border/20 hover:shadow-medium transition-all duration-300"
        whileHover={{ y: -3 }}
      >
        <div className="text-2xl font-bold text-text-accent mb-1">30+</div>
        <div className="text-xs font-medium text-text-secondary">Clients</div>
        <div className="text-xs text-text-secondary/60 mt-0.5">Happy</div>
      </motion.div>
    </div>
  )
}

export default SkillsStats
