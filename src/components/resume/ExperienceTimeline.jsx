import { motion } from "framer-motion"
import ExperienceItem from "./ExperienceItem"

function ExperienceTimeline({ experiences }) {
  return (
    <div className="relative max-w-6xl mx-auto overflow-hidden">
      {/* Timeline connector */}
      <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary to-text-accent opacity-20"></div>

      {experiences.map((exp, index) => (
        <ExperienceItem key={exp.id} experience={exp} index={index} />
      ))}
    </div>
  )
}

export default ExperienceTimeline
