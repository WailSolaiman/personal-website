import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { useRevealAnimation } from "../../hooks/useRevealAnimation"

/** Splits tool strings that use `,` or `|` (with optional spaces) into separate chips. */
function parseTechList(raw) {
  if (!raw || typeof raw !== "string") return []
  return raw
    .split(/\s*[,|]\s*/)
    .map((s) => s.trim())
    .filter(Boolean)
}

function getHostname(link) {
  try {
    return new URL(link).hostname.replace(/^www\./, "")
  } catch {
    return link
  }
}

function ProjectCard({ item, index }) {
  const { t } = useTranslation(["portfolioData"])
  const reveal = useRevealAnimation({
    transition: { duration: 0.5, delay: index * 0.08 },
  })
  const projectKey = String(item.id)
  const title = t(`portfolioData:projects.${projectKey}.title`, {
    defaultValue: item.title,
  })
  const description = t(`portfolioData:projects.${projectKey}.description`, {
    defaultValue: item.description,
  })
  const techTools = parseTechList(item.techList)
  const hostname = getHostname(item.link)

  return (
    <motion.a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-lg md:rounded-2xl border border-border/10 bg-card shadow-soft outline-none transition-shadow duration-300 hover:shadow-medium focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background-light dark:focus-visible:ring-offset-background-dark"
      {...reveal}
      aria-label={`${title}. Opens in a new tab.`}
    >
      <div className="relative aspect-[4/3] md:aspect-video overflow-hidden">
        <img
          src={item.image}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 ease-out md:group-hover:scale-105 md:group-focus-within:scale-105"
        />
        {/* Desktop: hover overlay with title + tech */}
        <div
          className="pointer-events-none absolute inset-0 z-[1] hidden bg-black/60 opacity-0 transition-opacity duration-300 md:block md:group-hover:opacity-100 md:group-focus-within:opacity-100"
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute inset-0 z-[2] hidden flex-col justify-end opacity-0 transition-opacity duration-300 md:flex md:group-hover:opacity-100 md:group-focus-within:opacity-100">
          <div className="p-5 sm:p-6">
            <h3 className="text-lg font-bold text-white sm:text-xl md:text-2xl">
              {title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/90 line-clamp-3 sm:line-clamp-4">
              {description}
            </p>
            {techTools.length > 0 && (
              <ul className="mt-3 flex list-none flex-wrap gap-1.5 p-0 sm:gap-2">
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

      {/* Mobile: content box below image (legacy-style) */}
      <div className="border-t border-border/10 bg-card p-4 md:hidden">
        <h3 className="mb-1.5 text-sm font-semibold leading-tight text-text-primary">
          {title}
        </h3>
        <p className="mb-2 text-xs leading-relaxed text-text-secondary/70">
          {description}
        </p>
        {techTools.length > 0 && (
          <ul className="mb-2 flex list-none flex-wrap gap-1 p-0">
            {techTools.map((tech, i) => (
              <li key={`${i}-${tech}`}>
                <span className="inline-block rounded-md bg-primary/10 px-1.5 py-0.5 text-[10px] font-medium text-primary">
                  {tech}
                </span>
              </li>
            ))}
          </ul>
        )}
        <div className="flex items-center justify-between gap-2">
          <span className="truncate text-[10px] font-medium text-text-secondary/60">
            {hostname}
          </span>
          <span className="shrink-0 text-primary" aria-hidden="true">
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            </svg>
          </span>
        </div>
      </div>
    </motion.a>
  )
}

export default ProjectCard
