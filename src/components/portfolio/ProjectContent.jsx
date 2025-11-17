import { motion } from "framer-motion"

function ProjectContent({ item, hoveredProject }) {
  return (
    <div className="p-8">
      <motion.div
        animate={{
          y: hoveredProject === item.id ? -5 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-2xl font-bold text-text-primary mb-2 group-hover:text-primary transition-colors duration-300">
          {item.title}
        </h3>

        <div className="flex items-center gap-2 mb-4">
          <span
            className="px-3 py-1 bg-primary/20 text-xs font-semibold rounded-full"
            style={{ color: "var(--accent-purple)" }}
          >
            {item.tech}
          </span>
        </div>

        <p className="text-text-secondary text-sm leading-relaxed mb-6">
          {item.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {item.techList
            ?.split(", ")
            .slice(0, 3)
            .map((tech) => (
              <span
                key={tech}
                className="px-1.5 py-0.5 bg-surface/50 text-text-primary text-xs rounded border border-border/30"
              >
                {tech}
              </span>
            ))}
          {item.techList?.split(", ").length > 3 && (
            <span
              className="px-1.5 py-0.5 bg-primary/20 text-xs rounded font-medium"
              style={{ color: "var(--accent-purple)" }}
            >
              +{item.techList.split(", ").length - 3}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <motion.a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold py-3 px-6 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 text-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg
              className="inline w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              />
            </svg>
            Live Demo
          </motion.a>
        </div>
      </motion.div>
    </div>
  )
}

export default ProjectContent
