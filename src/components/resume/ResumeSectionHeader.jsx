import { motion } from "framer-motion"

function ResumeSectionHeader() {
  return (
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
        Professional Experience
      </h2>
      <p className="text-lg text-text-secondary mb-6">Latest 10 Years</p>
      <div className="w-16 h-1 bg-gradient-to-r from-primary to-text-accent mx-auto rounded-full"></div>
    </motion.div>
  )
}

export default ResumeSectionHeader
