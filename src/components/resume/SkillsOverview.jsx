import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import SkillCategory from "./SkillCategory"

function SkillsOverview() {
  const { t } = useTranslation("resume")
  const skillCategories = [
    {
      title: t("skills.frontend"),
      skills: "React, Next.js, TypeScript, Tailwind",
    },
    {
      title: t("skills.backend"),
      skills: "Node.js, PHP, MySQL, REST APIs",
    },
    {
      title: t("skills.cms"),
      skills: "WordPress, Contao, Git, AI Integration",
    },
    {
      title: t("skills.aiTools"),
      skills: "GitHub Copilot, ChatGPT, Cursor, VS-Code Cline",
    },
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
        {t("skills.expertise")}
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
