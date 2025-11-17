import { motion } from "framer-motion"
import ExperienceItem from "./ExperienceItem"

function ExperienceTimeline({ experiences }) {
  return (
    <div className="relative max-w-6xl mx-auto overflow-hidden">
      {/* Timeline connector - dotted pattern */}
      <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-0.5 h-full">
        {/* Arrow at top */}
        <div
          className="absolute -top-3 left-1/2 transform -translate-x-1/2 text-purple-500 text-2xl"
          style={{ fontSize: "24px" }}
        >
          ▲
        </div>
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, var(--accent-purple) 2px, transparent 2px)`,
            backgroundSize: "2px 16px",
          }}
        ></div>
      </div>

      {experiences.map((exp, index) => (
        <ExperienceItem key={exp.id} experience={exp} index={index} />
      ))}
    </div>
  )
}

export default ExperienceTimeline
