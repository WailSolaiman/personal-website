import { motion } from "framer-motion"
import SkillCategory from "./SkillCategory"

function SkillsOverview() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: "React, Next.js, Vue.js, TypeScript, Tailwind CSS",
    },
    {
      title: "Backend",
      skills: "Node.js, Express, PHP, MySQL, REST APIs",
    },
    {
      title: "CMS & Tools",
      skills: "WordPress, Contao, Git, AI Integration",
    },
    { title: "Deployment", skills: "Vercel, Netlify, Heroku, AWS" },
  ]

  return (
    <motion.div
      className="mt-20 text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-bold text-text-primary mb-8">
        Technology Expertise
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {skillCategories.map((category) => (
          <SkillCategory key={category.title} category={category} />
        ))}
      </div>
    </motion.div>
  )
}

export default SkillsOverview
