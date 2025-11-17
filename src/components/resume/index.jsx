import { useTheme } from "../../contexts/ThemeContext"
import ResumeSectionHeader from "./ResumeSectionHeader"
import ExperienceTimeline from "./ExperienceTimeline"
import SkillsOverview from "./SkillsOverview"

function Resume() {
  const { theme } = useTheme()

  const experiences = [
    {
      id: 1,
      title: "Freelance Developer",
      period: "2020–Present",
      role: "Full-stack Web Developer",
      description:
        "Working as a freelance web developer specializing in websites and web applications using HTML/CSS/JS, React/Next.js, and WordPress. Integrated AI tools for enhanced development.",
      skills: ["React", "Next.js", "TypeScript", "WordPress"],
      icon: "💻",
      current: true,
    },
    {
      id: 2,
      title: "VICON Web Business",
      period: "2018–2019",
      role: "Frontend Developer",
      description:
        "Created high-quality client websites using HTML, CSS, and JavaScript with responsive Contao templates.",
      skills: ["HTML", "CSS", "JavaScript", "Contao", "PHP"],
      icon: "🚀",
    },
    {
      id: 3,
      title: "Anders Björk GmbH",
      period: "2017–2018",
      role: "WordPress Developer",
      description:
        "Developed responsive WordPress themes and monitored/maintained WordPress sites.",
      skills: ["WordPress", "PHP", "MySQL"],
      icon: "🔧",
    },
    {
      id: 4,
      title: "eTailers ISS GmbH",
      period: "2014–2016",
      role: "Junior Web Developer",
      description:
        "Built websites using HTML/CSS with a focus on WordPress and Vanilla JS projects.",
      skills: ["HTML", "CSS", "JavaScript", "WordPress"],
      icon: "🌱",
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
