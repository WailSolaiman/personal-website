import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { useIsMobile } from "../../hooks/useIsMobile"
import { revealAnimation, useRevealAnimation } from "../../hooks/useRevealAnimation"

function AITools() {
  const { t } = useTranslation(["sections", "aiTools"])
  const isMobile = useIsMobile()
  const leftColumnReveal = useRevealAnimation({
    initial: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
    transition: { duration: 0.8 },
  })
  const titleReveal = useRevealAnimation({
    initial: { opacity: 0, y: 20 },
    transition: { duration: 0.6 },
  })
  const textReveal = useRevealAnimation({
    initial: { opacity: 0, y: 20 },
    transition: { duration: 0.8, delay: 0.2 },
  })
  const iconsColumnReveal = useRevealAnimation({
    initial: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
    transition: { duration: 0.8, delay: 0.2 },
  })
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
      floatMotion: {
        y: [0, -16, 0],
        x: [0, 5, 0],
        rotate: [-3, 2, -3],
      },
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
      floatMotion: {
        y: [0, 12, 0],
        x: [0, -7, 0],
        rotate: [2, -4, 2],
      },
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
      floatMotion: {
        y: ["-50%", "-56%", "-50%"],
        rotate: [2, 6, 2],
        center: true,
      },
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
      floatMotion: {
        y: [0, -10, 4, 0],
        x: [0, 6, -4, 0],
        rotate: [-2, 3, -2],
      },
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
      floatMotion: {
        y: [0, -20, 0],
        x: [0, -5, 0],
        rotate: [-2, -5, -2],
      },
    },
  ]

  return (
    <section
      id="ai-tools"
      className="section-deferred py-24 lg:py-32 px-6 bg-gradient-to-br from-surface/30 via-background to-surface/30 border-t-2 border-border/30 relative overflow-hidden"
    >
      {/* Background Effects — desktop only */}
      <div className="absolute inset-0 -z-10 overflow-hidden hidden md:block">
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
            {...leftColumnReveal}
          >
            <motion.div
              {...titleReveal}
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
              {...textReveal}
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

          {/* Right Column - Icons */}
          <motion.div
            className="relative md:h-[500px] lg:h-[650px]"
            {...iconsColumnReveal}
          >
            {/* Mobile: single row */}
            <div className="grid grid-cols-5 gap-2 md:hidden">
              {tools.map((tool) => (
                <div key={tool.name} className="flex min-w-0 flex-col items-center">
                  <div className="flex w-full flex-col items-center rounded-xl border border-primary/30 bg-card p-2 shadow-soft">
                    <img
                      src={tool.image}
                      alt={tool.name}
                      className={`h-8 w-8 object-contain ${
                        tool.darkInvert ? "dark:brightness-0 dark:invert" : ""
                      }`}
                    />
                  </div>
                  <span className="mt-1.5 line-clamp-2 text-center text-[9px] font-semibold leading-tight text-text-primary">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Desktop: floating layout */}
            <div className="relative hidden h-full md:block">
            {tools.map((tool, index) => {
              const iconCard = (
                <div
                  className="relative rounded-3xl border-2 border-primary/30 bg-card/60 p-5 shadow-2xl backdrop-blur-lg lg:p-6"
                  style={{
                    boxShadow:
                      "0 20px 60px rgba(124, 58, 237, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 0 0 1px rgba(124, 58, 237, 0.1)",
                  }}
                >
                  <motion.div
                    className="absolute -inset-1 rounded-3xl border-2 border-primary/40"
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

                  <div className="relative z-10 flex flex-col items-center">
                    <img
                      src={tool.image}
                      alt={tool.name}
                      style={{
                        width: "clamp(48px, 10vw, " + tool.size + "px)",
                        height: "clamp(48px, 10vw, " + tool.size + "px)",
                      }}
                      className={`object-contain ${
                        tool.darkInvert ? "dark:brightness-0 dark:invert" : ""
                      }`}
                    />
                    <motion.span
                      className="mt-4 text-sm font-bold tracking-wide text-text-primary"
                      {...revealAnimation(isMobile, {
                        initial: { opacity: 0 },
                        visible: { opacity: 1 },
                        transition: { delay: 0.8 + index * 0.3 },
                      })}
                    >
                      {tool.name}
                    </motion.span>
                  </div>
                </div>
              )

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
                  {...revealAnimation(isMobile, {
                    initial: {
                      opacity: 0,
                      scale: 0.5,
                      rotate: -180,
                      x: tool.position.transform ? "-50%" : 0,
                      y: tool.position.transform ? "-50%" : 0,
                    },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      x: tool.position.transform ? "-50%" : 0,
                      y: tool.position.transform ? "-50%" : 0,
                    },
                    transition: {
                      duration: 0.8,
                      delay: 0.5 + index * 0.3,
                      type: "spring",
                      stiffness: 100,
                    },
                  })}
                  animate={{
                    y: tool.floatMotion.y,
                    x: tool.floatMotion.center ? "-50%" : tool.floatMotion.x,
                    rotate: tool.floatMotion.rotate,
                  }}
                  transition={{
                    y: {
                      duration: tool.floatDuration,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: tool.floatDelay,
                    },
                    x: tool.floatMotion.center
                      ? undefined
                      : {
                          duration: tool.floatDuration * 1.2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: tool.floatDelay + 0.2,
                        },
                    rotate: {
                      duration: tool.floatDuration * 1.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: tool.floatDelay,
                    },
                  }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full opacity-60 blur-2xl"
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
                  {iconCard}
                </motion.div>
              )
            })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AITools
