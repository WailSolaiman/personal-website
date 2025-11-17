import { motion } from "framer-motion"
import AboutContent from "./AboutContent"
import SkillsStats from "./SkillsStats"
import TechStack from "./TechStack"
import ProfileImage from "./ProfileImage"
import AvailabilityCard from "./AvailabilityCard"

function About() {
  return (
    <section
      id="about"
      className="py-20 lg:py-28 px-6 bg-gradient-to-br from-background via-surface/20 to-background relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-12 lg:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-primary mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-text-secondary/80 max-w-2xl mx-auto">
            Passionate full-stack developer crafting digital experiences with
            modern technologies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-10">
            <AboutContent />
            <SkillsStats />
            <motion.div
              className="p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-primary/20"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">✨</span>
                </div>
                <p className="text-sm text-text-secondary/80">
                  <span className="font-semibold text-primary">
                    Always learning
                  </span>{" "}
                  - Continuously adding new tools to my arsenal for better
                  development experiences
                </p>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col items-center space-y-8">
            <ProfileImage />
            <div className="flex gap-8 w-full justify-center">
              <AvailabilityCard />
              <TechStack />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
