import { motion } from "framer-motion"
import ProjectImage from "./ProjectImage"
import ProjectContent from "./ProjectContent"

function ProjectCard({ item, index, hoveredProject, setHoveredProject }) {
  return (
    <motion.div
      key={item.id}
      layout
      className="group relative overflow-hidden bg-card rounded-2xl shadow-soft border border-border/10 hover:shadow-hard transition-all duration-500"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      onHoverStart={() => setHoveredProject(item.id)}
      onHoverEnd={() => setHoveredProject(null)}
    >
      <ProjectImage
        item={item}
        hoveredProject={hoveredProject}
        setHoveredProject={setHoveredProject}
      />
      <ProjectContent item={item} hoveredProject={hoveredProject} />
    </motion.div>
  )
}

export default ProjectCard
