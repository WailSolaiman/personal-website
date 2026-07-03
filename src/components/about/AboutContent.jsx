import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { useRevealAnimation } from "../../hooks/useRevealAnimation"

function AboutContent() {
  const { t } = useTranslation("about")
  const reveal = useRevealAnimation({
    transition: { duration: 0.8, delay: 0.3 },
  })
  return (
    <motion.div
      {...reveal}
    >
      <div className="bg-card md:bg-card/60 md:backdrop-blur-sm rounded-2xl p-8 border border-border/20 shadow-soft hover:shadow-medium transition-all duration-500 hover:border-primary/30">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center">
            <span className="text-2xl">👋</span>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-text-primary">
              {t("greeting")}
            </h3>
            <p className="text-text-secondary/70 text-sm">
              {t("role")}
            </p>
          </div>
        </div>

        <div className="prose prose-lg">
          <p className="text-base md:text-lg text-text-secondary leading-relaxed mb-6">
            {t("bio")}
          </p>

          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 mb-6">
            <motion.div
              className="flex items-start gap-3"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-1.5 h-20 bg-gradient-to-b from-primary to-secondary rounded-full mt-1 flex-shrink-0"></div>
              <p className="text-text-primary/90 leading-relaxed text-sm md:text-base">
                {t("journey")}
              </p>
            </motion.div>
          </div>

          <div className="flex flex-wrap gap-3">
            <motion.span
              className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(var(--color-primary), 0.15)",
              }}
            >
              {t("tags.creative")}
            </motion.span>
            <motion.span
              className="px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-sm font-medium text-secondary"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(var(--color-secondary), 0.15)",
              }}
            >
              {t("tags.tech")}
            </motion.span>
            <motion.span
              className="px-4 py-2 bg-text-accent/10 border border-text-accent/20 rounded-full text-sm font-medium text-text-accent"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(var(--color-text-accent), 0.15)",
              }}
            >
              {t("tags.quality")}
            </motion.span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default AboutContent
