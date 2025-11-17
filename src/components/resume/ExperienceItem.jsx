import { motion } from "framer-motion"

function ExperienceItem({ experience, index }) {
  const { icon, title, period, role, description, skills, current } = experience

  return (
    <motion.div
      className="relative mb-12 pl-16 md:pl-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {/* Timeline dot */}
      <motion.div
        className="absolute left-8 top-8 w-4 h-4 bg-primary rounded-full border-4 border-card transform -translate-x-1/2 z-10"
        whileHover={{ scale: 1.2, backgroundColor: "#581c87" }}
        transition={{ type: "spring", stiffness: 400 }}
      />

      {/* Experience card */}
      <motion.div
        className={`bg-card/50 backdrop-blur-sm p-8 rounded-2xl shadow-medium border border-border/10 hover:shadow-hard transition-all duration-300 ${
          current ? "ring-2 ring-primary/30" : ""
        }`}
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
        <p className="text-text-secondary mb-6 leading-relaxed">
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
    </motion.div>
  )
}

export default ExperienceItem
