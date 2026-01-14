import { useTranslation } from "react-i18next"
import ResumeSectionHeader from "./ResumeSectionHeader"
import ExperienceTimeline from "./ExperienceTimeline"
import SkillsOverview from "./SkillsOverview"
import { andersBjorkTranslation } from "../../data/andersBjorkData"
import { viconTranslation } from "../../data/viconData"

function Resume() {
  const { t } = useTranslation("resume")
  const experiences = [
    {
      id: 1,
      title: t("experience.freelance.title"),
      period: t("experience.freelance.period"),
      role: t("experience.freelance.role"),
      description: t("experience.freelance.description"),
      skills: ["React", "Next.js", "AI-powered Tools"],
      icon: "💻",
      current: true,
    },
    {
      id: 2,
      title: t("experience.vicon.title"),
      period: t("experience.vicon.period"),
      role: t("experience.vicon.role"),
      description: t("experience.vicon.description"),
      skills: ["HTML", "CSS", "JavaScript", "Contao", "PHP"],
      icon: "🚀",
      hasCertificate: true,
      certificate: {
        imageSrc: "/images/zeugnis-vicon.jpg",
        imageAlt: "VICON Web Business Certificate",
        translationContent: viconTranslation,
        translationTitle: "",
      },
    },
    {
      id: 3,
      title: t("experience.andersBjork.title"),
      period: t("experience.andersBjork.period"),
      role: t("experience.andersBjork.role"),
      description: t("experience.andersBjork.description"),
      skills: ["HTML", "CSS", "JavaScript", "WordPress"],
      icon: "🔧",
      hasCertificate: true,
      certificate: {
        imageSrc: "/images/arbeitszeugnis-bjoerk.jpg",
        imageAlt: "Anders Björk GmbH Certificate",
        translationContent: andersBjorkTranslation,
        translationTitle: "",
      },
    },
  ]

  return (
    <section
      id="resume"
      className="py-24 lg:py-32 px-6 bg-surface/30 border-t-2 border-border/30"
    >
      <div className="container mx-auto">
        <ResumeSectionHeader />
        <ExperienceTimeline experiences={experiences} />
        <SkillsOverview />
      </div>
    </section>
  )
}

export default Resume
