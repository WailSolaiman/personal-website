import { motion } from "framer-motion"
import LegacySiteCard from "./LegacySiteCard"

function LegacyGrid({ legacySites }) {
  return (
    <motion.div
      className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {legacySites.map((site, index) => (
        <LegacySiteCard key={site.id} site={site} index={index} />
      ))}
    </motion.div>
  )
}

export default LegacyGrid
