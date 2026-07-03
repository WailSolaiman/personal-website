import { motion } from "framer-motion"
import { FaGraduationCap } from "react-icons/fa"
import { useTranslation } from "react-i18next"
import { useIsMobile } from "../../hooks/useIsMobile"
import { revealAnimation, useRevealAnimation } from "../../hooks/useRevealAnimation"

function Education() {
  const { t } = useTranslation(["sections"])
  const isMobile = useIsMobile()
  const sectionReveal = useRevealAnimation()

  return (
    <section
      id="education"
      className="section-deferred py-24 lg:py-32 px-6 bg-surface/30 border-t-2 border-border/30"
    >
      <div className="container mx-auto">
        <motion.div
          className="max-w-5xl mx-auto"
          {...sectionReveal}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              {t("sections:titles.education")}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-text-accent mx-auto rounded-full"></div>
          </div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch"
            {...revealAnimation(isMobile, {
              initial: { opacity: 0, scale: 0.98 },
              visible: { opacity: 1, scale: 1 },
              transition: { duration: 0.8, delay: 0.2 },
            })}
          >
            <motion.div
              className="bg-surface border border-border rounded-xl p-8 md:p-12 shadow-sm flex flex-col items-center text-center lg:items-start lg:text-left"
              {...revealAnimation(isMobile, {
                initial: { opacity: 0, x: -16 },
                visible: { opacity: 1, x: 0 },
                transition: { duration: 0.6, delay: 0.25 },
              })}
            >
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 shrink-0"
                {...revealAnimation(isMobile, {
                  initial: { scale: 0 },
                  visible: { scale: 1 },
                  transition: { duration: 0.5, delay: 0.35 },
                })}
              >
                <FaGraduationCap className="w-8 h-8 text-primary" />
              </motion.div>

              <motion.h3
                className="text-xl md:text-2xl lg:text-3xl font-bold text-text-primary mb-2"
                {...revealAnimation(isMobile, {
                  initial: { opacity: 0, y: 12 },
                  transition: { duration: 0.5, delay: 0.4 },
                })}
              >
                {t("sections:education.university")}
              </motion.h3>

              <motion.p
                className="text-sm md:text-base text-text-secondary mb-1"
                {...revealAnimation(isMobile, {
                  initial: { opacity: 0, y: 12 },
                  transition: { duration: 0.5, delay: 0.45 },
                })}
              >
                {t("sections:education.country")}
              </motion.p>

              <motion.p
                className="text-base md:text-lg lg:text-xl text-text-primary font-medium mb-3"
                {...revealAnimation(isMobile, {
                  initial: { opacity: 0, y: 12 },
                  transition: { duration: 0.5, delay: 0.5 },
                })}
              >
                {t("sections:education.degree")}
              </motion.p>

              <motion.span
                className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium"
                {...revealAnimation(isMobile, {
                  initial: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1 },
                  transition: { duration: 0.5, delay: 0.55 },
                })}
              >
                {t("sections:education.degreeShort")}
              </motion.span>
            </motion.div>

            <motion.div
              className="relative rounded-xl overflow-hidden border border-border bg-surface shadow-sm min-h-[220px] lg:min-h-[320px]"
              {...revealAnimation(isMobile, {
                initial: { opacity: 0, x: 16 },
                visible: { opacity: 1, x: 0 },
                transition: { duration: 0.6, delay: 0.3 },
              })}
            >
              <img
                src="/images/technische-hochschule-luebeck-2.jpg"
                alt={t("sections:education.university")}
                className="absolute inset-0 w-full h-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
