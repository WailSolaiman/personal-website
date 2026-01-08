import ResumeSectionHeader from "./ResumeSectionHeader"
import ExperienceTimeline from "./ExperienceTimeline"
import SkillsOverview from "./SkillsOverview"
import { andersBjorkTranslation } from "../../data/andersBjorkData"
import { viconTranslation } from "../../data/viconData"

function Resume() {
  const experiences = [
    {
      id: 1,
      title: "Freelance Developer",
      period: "2020–Present",
      role: "Full-stack Web Developer",
      description:
        "Working as a freelance web developer for websites and web applications using HTML/CSS/JS, React/Next.js, and WordPress. Recently, I have been integrating AI tools and LLM APIs to accelerate development and enhance functionality. My AI-assisted development environment includes VS Code with GitHub Copilot and Cline extensions, as well as Cursor as an AI-first IDE.",
      skills: ["React", "Next.js", "AI-powered Tools"],
      icon: "💻",
      current: true,
    },
    {
      id: 2,
      title: "VICON Web Business",
      period: "2018–2019",
      role: "Frontend Developer",
      description:
        "Responsible for creating high-quality client websites using HTML, CSS, and JavaScript. Developed responsive themes/templates based on Contao Content Management System and managed backends, including database and server integration.",
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
      title: "Anders Björk GmbH",
      period: "2017–2018",
      role: "WordPress Developer",
      description:
        "Focused on developing responsive WordPress themes with HTML, CSS, JavaScript, and PHP. Conducted ongoing monitoring and performance optimization of live WordPress sites to ensure a positive user experience, along with maintaining and enhancing existing themes.",
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
