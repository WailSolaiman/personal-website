import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { useTranslation } from "react-i18next"
import { SITE_STATS } from "../../data/siteStats"
import { useIsMobile } from "../../hooks/useIsMobile"
import { revealAnimation, useRevealAnimation } from "../../hooks/useRevealAnimation"
import AnimatedCounter from "../common/AnimatedCounter"

function SkillsStats() {
  const { t } = useTranslation("ui")
  const isMobile = useIsMobile()
  const gridRef = useRef(null)
  const countersInView = useInView(gridRef, { once: true, amount: 0.3 })
  const gridReveal = useRevealAnimation({
    initial: { opacity: 0, y: 30 },
    transition: { duration: 0.6, delay: 0.6 },
  })
  const stats = [
    {
      id: 1,
      number: SITE_STATS.years,
      label: t("stats.years"),
      sublabel: t("stats.experience"),
      icon: "🏆",
      color: "from-violet-500 to-purple-600",
      delay: 0,
      counterDuration: 1.4,
    },
    {
      id: 2,
      number: SITE_STATS.projects,
      label: t("stats.projects"),
      sublabel: t("stats.completed"),
      icon: "🚀",
      color: "from-blue-500 to-cyan-500",
      delay: 0.1,
      counterDuration: 2.2,
    },
    {
      id: 3,
      number: SITE_STATS.clients,
      label: t("stats.clients"),
      sublabel: t("stats.happy"),
      icon: "😊",
      color: "from-green-500 to-emerald-500",
      delay: 0.2,
      counterDuration: 2,
    },
  ]

  return (
    <motion.div
      ref={gridRef}
      className="grid grid-cols-1 md:grid-cols-3 gap-4"
      {...gridReveal}
    >
      {stats.map((stat) => (
        <motion.div
          key={stat.id}
          className="relative group"
          {...revealAnimation(isMobile, {
            initial: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
            transition: {
              duration: 0.8,
              delay: stat.delay,
              type: "spring",
              stiffness: 200,
            },
          })}
          {...(!isMobile && { whileHover: { y: -8 } })}
        >
          {/* Gradient background */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 rounded-2xl md:blur-xl transition-opacity duration-500`}
          ></div>

          <motion.div
            className="relative bg-card md:bg-card/80 md:backdrop-blur-sm rounded-2xl p-6 border border-border/20 shadow-soft md:group-hover:shadow-xl transition-all duration-500 md:group-hover:border-white/20"
            {...(!isMobile && { whileHover: { scale: 1.05 } })}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Icon */}
            <div className="flex items-center justify-between mb-4">
              <div className="text-3xl md:drop-shadow-sm">
                {stat.icon}
              </div>
              <div
                className={`w-2 h-2 rounded-full bg-gradient-to-r ${stat.color} group-hover:scale-125 transition-transform duration-300`}
              ></div>
            </div>

            {/* Number */}
            <AnimatedCounter
              value={stat.number}
              duration={stat.counterDuration}
              active={countersInView}
              className={`text-4xl md:text-5xl font-bold mb-2 block bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
            />

            {/* Labels */}
            <div className="text-text-primary font-semibold text-sm mb-1">
              {stat.label}
            </div>
            <div className="text-text-secondary/70 text-xs uppercase tracking-wide font-medium">
              {stat.sublabel}
            </div>

            {/* Progress bar */}
            <motion.div
              className="mt-4 h-1 bg-surface/30 rounded-full overflow-hidden"
              {...revealAnimation(isMobile, {
                initial: { opacity: 0 },
                visible: { opacity: 1 },
                transition: { delay: stat.delay + 0.5 },
              })}
            >
              <motion.div
                className={`h-full bg-gradient-to-r ${stat.color} rounded-full`}
                {...revealAnimation(isMobile, {
                  initial: { width: 0 },
                  visible: { width: "100%" },
                  transition: {
                    duration: 1.5,
                    delay: stat.delay + 0.7,
                    ease: "easeOut",
                  },
                })}
              ></motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default SkillsStats
