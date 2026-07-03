import { motion } from "framer-motion"
import LegacySiteCard from "./LegacySiteCard"
import { useRevealAnimation } from "../../hooks/useRevealAnimation"

function LegacyGrid({ legacySites }) {
  const reveal = useRevealAnimation({
    initial: { opacity: 0 },
    visible: { opacity: 1 },
    transition: { duration: 0.8 },
  })
  return (
    <motion.div
      className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-4 xl:grid-cols-5"
      {...reveal}
    >
      {legacySites.map((site, index) => (
        <LegacySiteCard key={site.id} site={site} index={index} />
      ))}
    </motion.div>
  )
}

export default LegacyGrid
