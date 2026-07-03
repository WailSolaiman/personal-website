import { motion } from "framer-motion"
import { useTheme } from "../../contexts/ThemeContext"
import { useIsMobile } from "../../hooks/useIsMobile"

function SkillCategory({ category }) {
  const { theme } = useTheme()
  const isMobile = useIsMobile()

  return (
    <motion.div
      className="p-6 bg-card rounded-xl shadow-soft border border-border/10 md:hover:shadow-medium transition-all duration-300"
      {...(!isMobile && { whileHover: { y: -5 } })}
    >
      <h4
        className={`text-lg font-semibold mb-2 ${
          theme === "dark" ? "text-purple-300" : "text-gray-800"
        }`}
      >
        {category.title}
      </h4>
      <p className="text-sm text-text-secondary leading-relaxed">
        {category.skills}
      </p>
    </motion.div>
  )
}

export default SkillCategory
