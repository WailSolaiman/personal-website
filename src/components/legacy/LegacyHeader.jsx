import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { useRevealAnimation } from "../../hooks/useRevealAnimation"

function LegacyHeader() {
  const { t } = useTranslation("sections")
  const reveal = useRevealAnimation()
  return (
    <motion.div
      className="text-center mb-16 relative"
      {...reveal}
    >
      {/* Retro background effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden hidden md:block">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-text-accent/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="inline-flex items-center gap-2 px-4 py-2 bg-card md:bg-card/50 md:backdrop-blur-sm rounded-full border border-border/20 mb-6">
        <div className="w-2 h-2 retro-bg-border md:animate-bounce-subtle rounded-full"></div>
        <span className="text-xs font-medium retro-text-medium">
          {t("legacy.badge")}
        </span>
        <div className="text-xs opacity-50">█</div>
      </div>

      <h2
        className="text-4xl md:text-5xl font-bold mb-4 font-mono tracking-wider legacy-gradient-title"
      >
        {">"} {t("legacy.title")} {"<"}
      </h2>
      <div className="w-16 h-0.5 retro-bg-border mx-auto mb-8"></div>

      <p className="text-text-secondary/80 max-w-2xl mx-auto font-mono text-sm">
        {`/* ${t("legacy.subtitle")} */`}
        <br />
        <span className="retro-text-medium">{`// ${t("legacy.description")}`}</span>
      </p>
    </motion.div>
  )
}

export default LegacyHeader
