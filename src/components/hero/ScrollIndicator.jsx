import { motion } from "framer-motion"
import { useTheme } from "../../contexts/ThemeContext"

function ScrollIndicator() {
  const { theme } = useTheme()

  return (
    <motion.div
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 1 }}
    >
      <div
        className={`w-6 h-10 border-2 rounded-full flex justify-center ${
          theme === "light" ? "border-purple-400/60" : "border-white/60"
        }`}
      >
        <motion.div
          className={`w-1 h-3 rounded-full mt-2 ${
            theme === "light" ? "bg-purple-500" : "bg-white"
          }`}
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  )
}

export default ScrollIndicator
