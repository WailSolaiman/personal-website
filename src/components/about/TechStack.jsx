import { motion } from "framer-motion"
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPhp,
  FaWordpress,
  FaRobot,
} from "react-icons/fa"
import { SiNextdotjs } from "react-icons/si"

function TechStack() {
  const technologies = [
    {
      name: "HTML5",
      icon: FaHtml5,
      color: "bg-orange-500",
    },
    {
      name: "CSS3",
      icon: FaCss3Alt,
      color: "bg-blue-500",
    },
    {
      name: "JavaScript",
      icon: FaJs,
      color: "bg-yellow-500",
    },
    { name: "React", icon: FaReact, color: "bg-cyan-500" },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      color: "bg-gray-800",
    },
    {
      name: "PHP",
      icon: FaPhp,
      color: "bg-purple-500",
    },
    {
      name: "WordPress",
      icon: FaWordpress,
      color: "bg-blue-600",
    },
    {
      name: "AI/Automation",
      icon: FaRobot,
      color: "bg-green-500",
    },
  ]

  return (
    <motion.div
      className="bg-card/60 backdrop-blur-sm rounded-2xl p-4 xl:p-6 border border-border/20 shadow-soft w-full max-w-xs xl:max-w-sm mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.9 }}
      viewport={{ once: true }}
    >
      <h3 className="text-lg font-bold text-text-primary text-center mb-4">
        Technology Stack
      </h3>

      <div className="grid grid-cols-2 grid-rows-4 gap-2">
        {technologies.map((tech, index) => (
          <div
            key={tech.name}
            className="flex flex-col items-center justify-center p-2"
          >
            {/* Tech Icon */}
            <div
              className={`w-10 h-10 ${tech.color} rounded-lg flex items-center justify-center text-white shadow-md mb-1`}
            >
              <tech.icon size={20} />
            </div>
            {/* Tech Name */}
            <span className="text-xs font-medium text-text-primary text-center">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default TechStack
