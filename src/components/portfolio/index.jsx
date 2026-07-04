import { useMemo } from "react"
import PortfolioHeader from "./PortfolioHeader"
import ProjectsGrid from "./ProjectsGrid"

const FEATURED_PROJECT_TITLES = [
  "Cybercore",
  "Buildplane",
  "EchoRealm",
  "Either AI",
  "EVOGYM",
  "Metaverse World",
  "Onix",
  "Restaura Paris",
  "Velvet",
  "Webbly",
]

function Portfolio({ portfolioItems }) {
  const filteredProjects = useMemo(() => {
    return FEATURED_PROJECT_TITLES.map((title) =>
      portfolioItems.find((item) => item.title === title)
    ).filter(Boolean)
  }, [portfolioItems])

  return (
    <section
      id="portfolio"
      className="section-deferred border-t border-border/20 bg-surface/30 px-6 py-24 lg:py-32"
    >
      <div className="container mx-auto">
        <PortfolioHeader />
        <ProjectsGrid filteredProjects={filteredProjects} />
      </div>
    </section>
  )
}

export default Portfolio
