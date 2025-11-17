import { motion } from "framer-motion"

function LegacyHeader() {
  return (
    <motion.div
      className="text-center mb-16 relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Retro background effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-text-accent/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-border/20 mb-6">
        <div className="w-2 h-2 retro-bg-border animate-bounce-subtle rounded-full"></div>
        <span className="text-xs font-medium retro-text-medium">
          RETRO ARCHIVE
        </span>
        <div className="text-xs opacity-50">█</div>
      </div>

      <h2
        className="text-4xl md:text-5xl font-bold mb-4 font-mono tracking-wider"
        style={{
          background: `linear-gradient(135deg, var(--retro-green-dark), var(--retro-green-light), var(--retro-green-dark))`,
          backgroundSize: "200% 200%",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animation: "gradientShift 3s ease-in-out infinite",
        }}
      >
        {">"} LEGACY WEBSITES {"<"}
      </h2>
      <div className="w-16 h-0.5 retro-bg-border mx-auto mb-8"></div>

      <p className="text-text-secondary/80 max-w-2xl mx-auto font-mono text-sm">
        {`/* Digital relics from past endeavors */`}
        <br />
        <span className="retro-text-medium">{`// Websites built for former clients & employers`}</span>
      </p>
    </motion.div>
  )
}

export default LegacyHeader
