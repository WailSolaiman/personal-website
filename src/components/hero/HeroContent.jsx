import { motion } from "framer-motion"
import { useTheme } from "../../contexts/ThemeContext"

function HeroContent() {
  const { theme } = useTheme()

  return (
    <>
      {/* Badge */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="inline-block px-4 py-2 bg-white/85 dark:bg-black/50 backdrop-blur-sm rounded-full border border-white/20 dark:border-white/10 text-sm font-bold text-purple-900 dark:text-purple-200 mb-6 animate-fade-in">
          ✨ Crafting Digital Experiences
        </span>
      </motion.div>

      {/* Title */}
      <motion.h1
        className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
      >
        <span className="bg-gradient-to-r from-gray-900 via-purple-600 to-purple-800 dark:from-purple-100 dark:via-purple-200 dark:to-purple-300 bg-clip-text text-transparent">
          Wail Solaiman
        </span>
      </motion.h1>

      {/* Subtitle and Divider */}
      <motion.div
        className="mb-10"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 dark:text-gray-200 mb-4">
          Freelancer, Frontend Developer
        </h2>
        <div
          className={`w-16 h-1 mx-auto rounded-full mb-6 ${
            theme === "light"
              ? "bg-gradient-to-r from-purple-400 to-purple-600"
              : "bg-gradient-to-r from-white to-gray-300"
          }`}
        ></div>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Building interactive web experiences with cutting-edge technologies
          and user-centered design principles.
        </p>
      </motion.div>
    </>
  )
}

export default HeroContent
