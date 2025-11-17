import { motion } from "framer-motion"

function NewsletterCTA() {
  return (
    <motion.div
      className="mb-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-border/20 max-w-2xl mx-auto">
        <div className="text-center">
          <h3 className="text-xl font-bold text-text-primary mb-3">
            Stay Connected
          </h3>
          <p className="text-text-secondary/80 text-sm mb-6">
            Follow my journey and stay updated with the latest projects and
            insights.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-card/50 backdrop-blur-sm border border-border/30 rounded-xl text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-primary/50 transition-colors duration-300"
            />
            <button className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl shadow-soft hover:shadow-medium transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default NewsletterCTA
