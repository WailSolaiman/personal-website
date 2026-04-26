import { motion } from "framer-motion"
import ProjectCard from "./ProjectCard"

function ProjectsGrid({ filteredProjects }) {
  return (
    <motion.div
      className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-8"
      layout
    >
      {filteredProjects.map((item, index) => (
        <ProjectCard key={item.id} item={item} index={index} />
      ))}
    </motion.div>
  )
}

export default ProjectsGrid
