import { motion } from "framer-motion"

function ProjectImage({ item, hoveredProject, setHoveredProject }) {
  return (
    <div className="relative h-64 overflow-hidden rounded-t-2xl">
      <motion.img
        src={item.image}
        alt={item.alt}
        className="w-full h-full object-cover"
        animate={{
          scale: hoveredProject === item.id ? 1.1 : 1,
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80"></div>

      {/* Hover Overlay */}
      <motion.div
        className="absolute inset-0 bg-primary/20 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{
          opacity: hoveredProject === item.id ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="text-white text-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: hoveredProject === item.id ? 1 : 0.8,
            opacity: hoveredProject === item.id ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <svg
            className="w-12 h-12 mx-auto mb-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <span className="font-semibold">View Details</span>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default ProjectImage
