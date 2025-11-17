import { motion } from "framer-motion"

function ExperienceItem({ experience, index }) {
  const { icon, title, period, role, description, skills, current } = experience

  // Zig-zag layout: odd items go left, even items go right
  const isLeft = index % 2 !== 0
  const containerPadding = isLeft ? "pr-16 md:pr-20" : "pl-16 md:pl-20"

  return (
    <motion.div
      className={`relative mb-12 ${index === 0 ? "mt-8" : ""}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {/* Card container for positioning */}
      <div
        className={`relative ${
          isLeft ? "md:text-right md:flex md:justify-end" : ""
        }`}
      >
        {/* Experience card */}
        <motion.div
          className={`bg-card/50 backdrop-blur-sm p-8 rounded-2xl shadow-medium border border-border/10 hover:shadow-hard transition-all duration-300 max-w-2xl ${
            current ? "ring-2 ring-primary/30" : ""
          } ${isLeft ? "md:mr-8" : "md:ml-8"}`}
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-start gap-4">
              <div className="text-3xl">{icon}</div>
              <div>
                <h3 className="text-2xl font-bold text-text-primary mb-1">
                  {title}
                  {current && (
                    <span
                      className="inline-block ml-2 px-2 py-1 text-xs font-semibold bg-primary/20 rounded-full animate-pulse"
                      style={{ color: "var(--accent-purple)" }}
                    >
                      Current
                    </span>
                  )}
                </h3>
                <p className="text-text-primary/80 font-medium">{role}</p>
                <p
                  className="font-semibold text-sm"
                  style={{ color: "var(--accent-purple)" }}
                >
                  {period}
                </p>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-text-secondary mb-6 leading-relaxed text-left">
            {description}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-surface/50 text-text-primary text-xs font-medium rounded-full border border-border/30 hover:border-primary/50 transition-colors duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ExperienceItem
