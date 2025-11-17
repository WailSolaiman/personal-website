import { motion } from "framer-motion"

function AboutContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      <div className="prose prose-base">
        <p className="text-sm md:text-base text-text-secondary leading-relaxed mb-4">
          With over a decade in{" "}
          <strong style={{ color: "var(--accent-purple)" }}>
            front-end development
          </strong>
          , I've worked with multiple companies and now provide freelance
          services, delivering innovative web solutions with cutting-edge
          technologies.
        </p>

        <p className="text-text-secondary/80 leading-relaxed text-sm">
          My journey began with traditional web technologies and has evolved to
          embrace modern frameworks, performance optimization, and user
          experience design.
        </p>
      </div>
    </motion.div>
  )
}

export default AboutContent
