import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

function AITools() {
  const { t } = useTranslation(["sections", "aiTools"])
  const tools = [
    {
      name: "Cursor IDE",
      image: "/images/ai-tools/cursor-ai.svg",
      size: 96,
      color: "text-primary",
      position: { top: "10%", left: "10%" },
      floatDuration: 4,
      floatDelay: 0,
      rotation: -3,
    },
    {
      name: "Claude Code",
      image: "/images/ai-tools/claudecode.svg",
      size: 92,
      color: "text-secondary",
      position: { top: "10%", right: "10%" },
      floatDuration: 4.3,
      floatDelay: 0.3,
      rotation: 2,
      darkInvert: true,
      secondaryGlow: true,
    },
    {
      name: "VS Code",
      image: "/images/ai-tools/vs-code.svg",
      size: 112,
      color: "text-primary",
      position: { top: "50%", left: "50%", transform: "translate(-50%, -50%)" },
      floatDuration: 5,
      floatDelay: 0.5,
      rotation: 2,
    },
    {
      name: "ChatGPT",
      image: "/images/ai-tools/chatgpt.svg",
      size: 100,
      color: "text-secondary",
      position: { bottom: "10%", left: "10%" },
      floatDuration: 4.7,
      floatDelay: 0.7,
      rotation: -2,
      darkInvert: true,
      secondaryGlow: true,
    },
    {
      name: "Codex",
      image: "/images/ai-tools/codex.svg",
      size: 88,
      color: "text-primary",
      position: { bottom: "10%", right: "10%" },
      floatDuration: 4.5,
      floatDelay: 1,
      rotation: -2,
      darkInvert: true,
    },
  ]

  return (
    <section
      id="ai-tools"
      className="py-24 lg:py-32 px-6 bg-gradient-to-br from-surface/30 via-background to-surface/30 border-t-2 border-border/30 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-2 leading-tight">
                <span className="bg-gradient-to-r from-purple-600 via-purple-400 to-purple-600 bg-clip-text text-transparent">
                  {t("aiTools:title")}
                </span>
                <br />
                <span className="text-text-primary">{t("aiTools:subtitle")}</span>
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-secondary to-primary rounded-full"></div>
            </motion.div>
            
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-xl md:text-2xl text-text-secondary leading-relaxed font-light">
                {t("aiTools:paragraph1.before")}{" "}
                <span className="font-bold text-primary relative">
                  <span className="absolute inset-0 bg-primary/20 blur-sm"></span>
                  <span className="relative">{t("aiTools:paragraph1.highlight")}</span>
                </span>{" "}
                {t("aiTools:paragraph1.after")}
              </p>
              
              <p className="text-lg md:text-xl text-text-secondary/90 leading-relaxed">
                {t("aiTools:paragraph2.before")}{" "}
                <span className="font-bold text-primary px-2 py-1 bg-primary/10 rounded-md border border-primary/20">
                  {t("aiTools:paragraph2.highlight")}
                </span>
                {t("aiTools:paragraph2.after")}
              </p>
              
              <p className="text-lg md:text-xl text-text-secondary/90 leading-relaxed">
                {t("aiTools:paragraph3.before")}{" "}
                <span className="font-bold text-secondary px-2 py-1 bg-secondary/10 rounded-md border border-secondary/20">
                  {t("aiTools:paragraph3.highlight1")}
                </span>{" "}
                {t("aiTools:paragraph3.middle")}{" "}
                <span className="font-bold text-primary px-2 py-1 bg-primary/10 rounded-md border border-primary/20">
                  {t("aiTools:paragraph3.highlight2")}
                </span>{" "}
                {t("aiTools:paragraph3.via")}{" "}
                <span className="font-bold text-primary px-2 py-1 bg-primary/10 rounded-md border border-primary/20">
                  {t("aiTools:paragraph3.highlight3")}
                </span>
                {t("aiTools:paragraph3.and")}{" "}
                <span className="font-bold text-secondary px-2 py-1 bg-secondary/10 rounded-md border border-secondary/20">
                  {t("aiTools:paragraph3.highlight4")}
                </span>{" "}
                {t("aiTools:paragraph3.after")}
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Floating Icons */}
          <motion.div
            className="relative h-[400px] md:h-[500px] lg:h-[650px]"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {tools.map((tool, index) => {
              return (
                <motion.div
                  key={tool.name}
                  className="absolute group"
                  style={
                    tool.position.transform
                      ? {
                          top: tool.position.top,
                          left: tool.position.left,
                        }
                      : tool.position
                  }
                  initial={{ 
                    opacity: 0, 
                    scale: 0.5, 
                    rotate: -180,
                    x: tool.position.transform ? "-50%" : 0,
                    y: tool.position.transform ? "-50%" : 0,
                  }}
                  whileInView={{ 
                    opacity: 1, 
                    scale: 1,
                    x: tool.position.transform ? "-50%" : 0,
                    y: tool.position.transform ? "-50%" : 0,
                    transition: {
                      duration: 0.8,
                      delay: 0.5 + index * 0.3,
                      type: "spring",
                      stiffness: 100,
                    }
                  }}
                  viewport={{ once: true }}
                  animate={{
                    y: tool.position.transform 
                      ? "-50%"
                      : [0, -15, 0],
                    rotate: [tool.rotation, tool.rotation + 1.5, tool.rotation],
                    x: tool.position.transform ? "-50%" : undefined,
                  }}
                  transition={{
                    y: {
                      duration: tool.floatDuration,
                      repeat: tool.position.transform ? 0 : Infinity,
                      ease: "easeInOut",
                      delay: tool.floatDelay,
                    },
                    rotate: {
                      duration: tool.floatDuration * 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: tool.floatDelay,
                    },
                  }}
                  whileHover={{
                    scale: 1.2,
                    rotate: 0,
                    z: 50,
                    transition: { duration: 0.3 },
                  }}
                >
                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      width: tool.size * 2.5,
                      height: tool.size * 2.5,
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                      background: `radial-gradient(circle, ${tool.secondaryGlow ? "rgba(168, 85, 247, 0.5)" : "rgba(124, 58, 237, 0.5)"} 0%, rgba(124, 58, 237, 0.2) 50%, transparent 100%)`,
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.4, 0.7, 0.4],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: tool.floatDelay,
                    }}
                  />

                  {/* Glassmorphic container */}
                  <motion.div
                    className="relative backdrop-blur-lg bg-card/60 border-2 border-primary/30 rounded-3xl p-4 md:p-5 lg:p-6 shadow-2xl"
                    style={{
                      boxShadow:
                        "0 20px 60px rgba(124, 58, 237, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 0 0 1px rgba(124, 58, 237, 0.1)",
                    }}
                    whileHover={{
                      boxShadow:
                        "0 30px 80px rgba(124, 58, 237, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
                      borderColor: "rgba(124, 58, 237, 0.5)",
                    }}
                  >
                    {/* Pulsing ring */}
                    <motion.div
                      className="absolute -inset-1 border-2 border-primary/40 rounded-3xl"
                      animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.4, 0.7, 0.4],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: tool.floatDelay,
                      }}
                    />

                    <div className="flex flex-col items-center relative z-10">
                      <motion.div
                        className="relative"
                        whileHover={{ scale: 1.15 }}
                        transition={{ duration: 0.2 }}
                      >
                        <img
                          src={tool.image}
                          alt={tool.name}
                          style={{
                            width: 'clamp(48px, 10vw, ' + tool.size + 'px)',
                            height: 'clamp(48px, 10vw, ' + tool.size + 'px)',
                          }}
                          className={`object-contain ${
                            tool.darkInvert ? "dark:brightness-0 dark:invert" : ""
                          }`}
                        />
                      </motion.div>
                      <motion.span
                        className="text-xs md:text-sm font-bold text-text-primary mt-2 md:mt-4 tracking-wide"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.8 + index * 0.3 }}
                        viewport={{ once: true }}
                      >
                        {tool.name}
                      </motion.span>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AITools
