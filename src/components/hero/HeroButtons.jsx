import { motion } from "framer-motion"

function HeroButtons() {
  return (
    <motion.div
      className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 xl:mb-8"
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.6 }}
    >
      <a
        href="#portfolio"
        className="group px-8 py-4 bg-gradient-to-r from-primary-default to-primary-dark text-white font-semibold rounded-xl shadow-hard hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 animate-bounce-subtle inline-block"
      >
        View My Work
      </a>

      <a
        href="https://drive.google.com/file/d/1YXhX9obY3KQz25NEoEIpXZFnyfoyHASb/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-4 bg-white text-gray-800 font-semibold rounded-xl border border-purple-300/50 backdrop-blur-sm hover:border-purple-600 hover:text-purple-900 transition-all duration-300"
      >
        Download CV
      </a>
    </motion.div>
  )
}

export default HeroButtons
