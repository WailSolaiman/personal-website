import { useTranslation } from "react-i18next"
import { FaMagic, FaJs, FaWordpress } from "react-icons/fa"
import { SiContao, SiTypo3 } from "react-icons/si"
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
      icon: {
        Icon: FaMagic,
        className:
          "w-8 h-8 shrink-0 text-[var(--accent-purple)] opacity-90",
      },
      current: true,
    },
    {
      id: 2,
      title: t("experience.vicon.title"),
      period: t("experience.vicon.period"),
      role: t("experience.vicon.role"),
      description: t("experience.vicon.description"),
      skills: ["HTML", "CSS", "JavaScript", "Contao", "PHP"],
      icon: {
        Icon: SiContao,
        className: "w-8 h-8 shrink-0 text-amber-800 dark:text-amber-600",
      },
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
      icon: {
        Icon: FaWordpress,
        className: "w-8 h-8 shrink-0 text-sky-600 dark:text-sky-400",
      },
      hasCertificate: true,
      certificate: {
        imageSrc: "/images/arbeitszeugnis-bjoerk.jpg",
        imageAlt: "Anders Björk GmbH Certificate",
        translationContent: andersBjorkTranslation,
        translationTitle: "",
      },
    },
    {
      id: 4,
      title: t("experience.eTailersIss.title"),
      period: t("experience.eTailersIss.period"),
      role: t("experience.eTailersIss.role"),
      description: t("experience.eTailersIss.description"),
      skills: ["HTML", "CSS", "JavaScript"],
      icon: {
        Icon: FaJs,
        className: "w-8 h-8 shrink-0 text-yellow-500",
      },
    },
    {
      id: 5,
      title: t("experience.parrotMedia.title"),
      period: t("experience.parrotMedia.period"),
      role: t("experience.parrotMedia.role"),
      description: t("experience.parrotMedia.description"),
      skills: ["HTML", "CSS", "JavaScript", "TYPO3"],
      icon: {
        Icon: SiTypo3,
        className: "w-8 h-8 shrink-0 text-orange-600",
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
