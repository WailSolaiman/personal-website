import { useMemo } from "react"
import PortfolioHeader from "./PortfolioHeader"
import ProjectsGrid from "./ProjectsGrid"

function Portfolio({ portfolioItems }) {
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
      className="border-t border-border/20 bg-surface/30 px-6 py-24 lg:py-32"
    >
      <div className="container mx-auto">
        <PortfolioHeader />
        <ProjectsGrid filteredProjects={filteredProjects} />
      </div>
    </section>
  )
}

export default Portfolio
