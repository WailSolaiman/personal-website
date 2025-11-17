import { motion } from "framer-motion"

function SkillsStats() {
  const stats = [
    {
      id: 1,
      number: "10+",
      label: "Years",
      sublabel: "Experience",
      icon: "🏆",
      color: "from-violet-500 to-purple-600",
      delay: 0,
    },
    {
      id: 2,
      number: "50+",
      label: "Projects",
      sublabel: "Completed",
      icon: "🚀",
      color: "from-blue-500 to-cyan-500",
      delay: 0.1,
    },
    {
      id: 3,
      number: "30+",
      label: "Clients",
      sublabel: "Happy",
      icon: "😊",
      color: "from-green-500 to-emerald-500",
      delay: 0.2,
    },
  ]

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      viewport={{ once: true }}
    >
      {stats.map((stat) => (
        <motion.div
          key={stat.id}
          className="relative group"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: stat.delay,
            type: "spring",
            stiffness: 200,
          }}
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
        >
          {/* Gradient background */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-500`}
          ></div>

          <motion.div
            className="relative bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/20 shadow-soft group-hover:shadow-xl transition-all duration-500 group-hover:border-white/20"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Icon */}
            <div className="flex items-center justify-between mb-4">
              <div className={`text-3xl filter drop-shadow-sm`}>
                {stat.icon}
              </div>
              <div
                className={`w-2 h-2 rounded-full bg-gradient-to-r ${stat.color} group-hover:scale-125 transition-transform duration-300`}
              ></div>
            </div>

            {/* Number */}
            <div
              className={`text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
            >
              {stat.number}
            </div>

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
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: stat.delay + 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div
                className={`h-full bg-gradient-to-r ${stat.color} rounded-full`}
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{
                  duration: 1.5,
                  delay: stat.delay + 0.7,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              ></motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default SkillsStats
