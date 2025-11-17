import { useState, useMemo } from "react"
import PortfolioHeader from "./PortfolioHeader"
import ProjectsGrid from "./ProjectsGrid"

function Portfolio({ portfolioItems }) {
  const [hoveredProject, setHoveredProject] = useState(null)

  // Filter out specific projects and create display items
  const filteredProjects = useMemo(() => {
    const projectsToRemove = [
      "React Crypto Universe",
      "Web Agency React Template",
      "React Tour Guide",
    ]
    return portfolioItems.filter(
      (item) => !projectsToRemove.includes(item.title)
    )
  }, [portfolioItems])

  return (
    <section
      id="portfolio"
      className="py-24 lg:py-32 px-6 bg-surface/30 border-t border-border/20"
    >
      <div className="container mx-auto">
        <PortfolioHeader />
        <ProjectsGrid
          filteredProjects={filteredProjects}
          hoveredProject={hoveredProject}
          setHoveredProject={setHoveredProject}
        />
      </div>
    </section>
  )
}

export default Portfolio
