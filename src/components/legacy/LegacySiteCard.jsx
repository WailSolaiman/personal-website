import { motion } from "framer-motion"

function LegacySiteCard({ site, index }) {
  return (
    <motion.div
      className="group relative bg-card/30 backdrop-blur-sm border border-secondary/20 rounded-lg overflow-hidden hover:border-secondary/60 transition-all duration-300 cursor-pointer"
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        type: "spring",
        stiffness: 200,
      }}
      viewport={{ once: true }}
      whileHover={{
        boxShadow: "0 20px 60px var(--retro-shadow)",
      }}
      whileTap={{ scale: 0.95 }}
      onClick={() => window.open(site.url, "_blank")}
    >
      {/* Retro border effect */}
      <div className="absolute inset-0 border border-secondary/30 group-hover:border-secondary transition-colors duration-300">
        <div className="absolute top-2 left-2 w-3 h-0.5 retro-bg-border"></div>
        <div className="absolute top-2 right-2 w-3 h-0.5 retro-bg-border"></div>
        <div className="absolute bottom-2 left-2 w-3 h-0.5 retro-bg-border"></div>
        <div className="absolute bottom-2 right-2 w-3 h-0.5 retro-bg-border"></div>
        <div className="absolute top-2 left-2 w-0.5 h-3 retro-bg-border"></div>
        <div className="absolute top-2 right-2 w-0.5 h-3 retro-bg-border"></div>
        <div className="absolute bottom-2 left-2 w-0.5 h-3 retro-bg-border"></div>
        <div className="absolute bottom-2 right-2 w-0.5 h-3 retro-bg-border"></div>
      </div>

      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={site.image}
          alt={site.title}
          className="w-full h-full object-cover transition-all duration-500 group-hover:grayscale-0 grayscale"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Retro scanlines */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-b from-transparent via-secondary/20 to-transparent bg-repeat-y bg-[length:100%_2px]"></div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 relative bg-card/50 backdrop-blur-sm">
        <motion.div
          animate={{
            y: 0,
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Retro terminal prompt */}
          <div className="flex items-center gap-2 mb-3 text-xs retro-text-medium font-mono">
            <span>$</span>
            <span className="animate-pulse">●</span>
            <span>coding</span>
          </div>

          <h3 className="font-mono text-text-primary font-semibold text-sm leading Tight mb-2 transition-colors duration-300 hover:text-[var(--retro-green-medium)]">
            {site.title}
          </h3>

          <p className="text-text-secondary/70 text-xs font-mono leading-tight mb-4 line-clamp-2">
            {site.desc}
          </p>

          {/* Terminal-style link */}
          <div className="flex items-center justify-between">
            <span className="text-xs retro-text-medium font-mono opacity-75">
              {site.url.replace("https://", "").substring(0, 20)}...
            </span>
            <motion.div
              className="text-secondary group-hover:text-white transition-colors duration-300"
              whileHover={{ x: 2 }}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 5l7 7-7 7M5 5l7 7-7 7"
                />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default LegacySiteCard
