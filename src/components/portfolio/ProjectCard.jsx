import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

/** Splits tool strings that use `,` or `|` (with optional spaces) into separate chips. */
function parseTechList(raw) {
  if (!raw || typeof raw !== "string") return []
  return raw
    .split(/\s*[,|]\s*/)
    .map((s) => s.trim())
    .filter(Boolean)
}

function ProjectCard({ item, index }) {
  const { t } = useTranslation(["portfolioData"])
  const projectKey = String(item.id)
  const title = t(`portfolioData:projects.${projectKey}.title`, {
    defaultValue: item.title,
  })
  const techTools = parseTechList(item.techList)

  return (
    <motion.a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-2xl border border-border/10 bg-card shadow-soft outline-none transition-shadow duration-300 hover:shadow-medium focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background-light dark:focus-visible:ring-offset-background-dark"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      aria-label={`${title}. Opens in a new tab.`}
    >
      <div className="relative aspect-[4/3] sm:aspect-video">
        <img
          src={item.image}
          alt=""
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-focus-within:scale-105"
        />
        {/* Full black tint on hover / focus */}
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute inset-0 z-[2] flex flex-col justify-end opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
          <div className="p-5 sm:p-6">
            <h3 className="text-lg font-bold text-white sm:text-xl md:text-2xl">
              {title}
            </h3>
            {techTools.length > 0 && (
              <ul className="mt-2 flex list-none flex-wrap gap-1.5 p-0 sm:gap-2">
                {techTools.map((tech, i) => (
                  <li key={`${i}-${tech}`}>
                    <span className="inline-block rounded-md bg-white/15 px-2 py-0.5 text-[11px] font-medium text-white/95 backdrop-blur-sm sm:text-xs">
                      {tech}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </motion.a>
  )
}

export default ProjectCard
