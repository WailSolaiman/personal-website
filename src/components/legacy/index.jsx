import { motion } from "framer-motion"
import LegacyHeader from "./LegacyHeader"
import LegacyGrid from "./LegacyGrid"
import LegacyFooter from "./LegacyFooter"

function Legacy({ legacySites }) {
  return (
    <section
      id="legacy"
      className="py-24 lg:py-32 px-6 bg-gradient-to-br from-background via-background to-surface/30 border-t border-border/20"
    >
      <div className="container mx-auto">
        <LegacyHeader />

        {/* Scanline effect */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none -z-10"
          style={{
            background: `linear-gradient(transparent 50%, var(--retro-green-dark) 0.1) 50%)`,
            backgroundSize: "100% 4px",
          }}
        />

        <LegacyGrid legacySites={legacySites} />
        <LegacyFooter />
      </div>

      {/* Add custom CSS animation for gradient shift */}
      <style>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}

export default Legacy
