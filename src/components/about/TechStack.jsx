import { motion } from "framer-motion"

function TechStack() {
  const technologies = [
    "React",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "Framer Motion",
  ]

  return (
    <motion.div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-4 border border-border/10">
      <h3 className="text-xl font-semibold text-text-primary mb-3">
        Tech Stack Highlights
      </h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 bg-card/50 text-text-primary text-xs font-medium rounded-full border border-border/20 hover:border-primary/50 transition-colors duration-200"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default TechStack
