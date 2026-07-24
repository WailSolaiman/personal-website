import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { FaCheck } from "react-icons/fa"
import { useRevealAnimation } from "../../hooks/useRevealAnimation"

function WebAnimate() {
  const { t } = useTranslation("webanimate")
  const features = t("webanimate:features", { returnObjects: true })
  const featureList = Array.isArray(features) ? features : []

  const textReveal = useRevealAnimation({
    initial: { opacity: 0, x: -32 },
    visible: { opacity: 1, x: 0 },
    transition: { duration: 0.7 },
  })
  const imageReveal = useRevealAnimation({
    initial: { opacity: 0, x: 32 },
    visible: { opacity: 1, x: 0 },
    transition: { duration: 0.7, delay: 0.15 },
  })

  return (
    <section
      id="webanimate"
      className="section-deferred relative overflow-hidden border-t border-border/20 bg-gradient-to-br from-background via-surface/20 to-background px-6 py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 hidden overflow-hidden md:block">
        <div className="absolute left-1/4 top-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-secondary/5 blur-2xl" />
      </div>

      <div className="container relative z-10 mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div {...textReveal}>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              {t("webanimate:badge")}
            </p>
            <h2 className="mb-3 text-4xl font-bold text-text-primary md:text-5xl lg:text-6xl">
              {t("webanimate:brand")}
            </h2>
            <p className="mb-5 text-xl font-medium text-text-primary/90 md:text-2xl">
              {t("webanimate:headline")}
            </p>
            <p className="mb-8 max-w-xl text-base leading-relaxed text-text-secondary md:text-lg">
              {t("webanimate:description")}
            </p>

            {featureList.length > 0 && (
              <ul className="mb-8 flex list-none flex-wrap gap-2.5 p-0">
                {featureList.map((feature) => (
                  <li key={feature}>
                    <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-primary-default/50 bg-primary-default/10 px-3.5 py-2 text-xs font-semibold text-primary-default shadow-soft dark:border-primary-light/50 dark:bg-primary-light/15 dark:text-primary-light">
                      <FaCheck
                        className="h-3 w-3 flex-shrink-0 text-primary-default dark:text-primary-light"
                        aria-hidden="true"
                      />
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            <a
              href="https://webanimate.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary-default to-primary-dark px-7 py-3.5 font-semibold text-white shadow-hard transition-all duration-300 hover:-translate-y-0.5 hover:shadow-medium"
            >
              {t("webanimate:cta")}
              <span aria-hidden="true" className="inline-block rtl:rotate-180">
                →
              </span>
            </a>
          </motion.div>

          <motion.div {...imageReveal}>
            <a
              href="https://webanimate.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-2xl border border-border/20 bg-card shadow-soft outline-none transition-shadow duration-300 hover:shadow-medium focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label={t("webanimate:cta")}
            >
              <img
                src="/images/webanimateweb2.webp"
                alt={t("webanimate:imageAlt")}
                loading="lazy"
                decoding="async"
                className="aspect-square h-auto w-full object-cover transition-transform duration-500 ease-out md:group-hover:scale-[1.02]"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WebAnimate
