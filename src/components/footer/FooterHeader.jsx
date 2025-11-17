import { motion } from "framer-motion"

function FooterHeader() {
  return (
    <motion.div
      className="text-center mb-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500 rounded-full border border-purple-400 mb-8">
        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <span className="text-xs font-medium text-white">GET IN TOUCH</span>
      </div>

      <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
        Let's Build Something Amazing Together
      </h2>
      <p className="text-text-secondary/80 max-w-xl mx-auto mb-8">
        Have a project in mind? I'd love to hear from you and discuss how we can
        bring your ideas to life with modern web technologies.
      </p>
    </motion.div>
  )
}

export default FooterHeader
