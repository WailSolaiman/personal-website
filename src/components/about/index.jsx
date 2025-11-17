import { motion } from "framer-motion"
import AboutContent from "./AboutContent"
import SkillsStats from "./SkillsStats"
import TechStack from "./TechStack"
import ProfileImage from "./ProfileImage"
import AvailabilityCard from "./AvailabilityCard"

function About() {
  return (
    <section id="about" className="py-12 lg:py-16 px-6 bg-surface/30">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">
            About Me
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-text-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          <div className="space-y-6">
            <AboutContent />
            <SkillsStats />
            <TechStack />
          </div>

          <div>
            <ProfileImage />
            <AvailabilityCard />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
