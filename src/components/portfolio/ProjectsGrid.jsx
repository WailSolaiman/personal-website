import { motion } from "framer-motion"
import ProjectCard from "./ProjectCard"

function ProjectsGrid({ filteredProjects, hoveredProject, setHoveredProject }) {
  return (
    <motion.div
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
      layout
    >
      {filteredProjects.map((item, index) => (
        <ProjectCard
          key={item.id}
          item={item}
          index={index}
          hoveredProject={hoveredProject}
          setHoveredProject={setHoveredProject}
        />
      ))}
    </motion.div>
  )
}

export default ProjectsGrid
