import { motion } from "framer-motion"

function PortfolioHeader() {
  return (
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
        Featured Projects
      </h2>
      <div className="w-16 h-1 bg-gradient-to-r from-primary to-text-accent mx-auto rounded-full"></div>
      <p className="text-lg text-text-secondary/80 max-w-2xl mx-auto mt-6">
        A showcase of innovative web solutions and creative development projects
      </p>
    </motion.div>
  )
}

export default PortfolioHeader
