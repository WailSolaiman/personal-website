import ExperienceItem from "./ExperienceItem"

function ExperienceTimeline({ experiences }) {
  return (
    <div className="relative max-w-6xl mx-auto overflow-hidden">
      {/* Arrow head — desktop only */}
      <div className="relative hidden h-8 pointer-events-none md:block" aria-hidden="true">
        <div className="absolute start-8 md:start-1/2 -translate-x-1/2 text-purple-500 text-2xl leading-none">
          ▲
        </div>
      </div>

      {/* Dotted timeline line — desktop only */}
      <div
        className="absolute start-8 md:start-1/2 md:-translate-x-1/2 top-8 bottom-0 w-0.5 z-0 pointer-events-none hidden md:block"
        style={{
          backgroundImage: `radial-gradient(circle, var(--accent-purple) 2px, transparent 2px)`,
          backgroundSize: "2px 16px",
        }}
        aria-hidden="true"
      />

      {experiences.map((exp, index) => (
        <ExperienceItem key={exp.id} experience={exp} index={index} />
      ))}
    </div>
  )
}

export default ExperienceTimeline
