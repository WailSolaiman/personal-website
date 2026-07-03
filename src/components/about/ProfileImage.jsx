import { useState } from "react"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import StatusDot from "./StatusDot"
import ImageLightbox from "../common/ImageLightbox"
import { useRevealAnimation } from "../../hooks/useRevealAnimation"

const PROFILE_IMAGE = "/images/profile-img-2.png"
const PROFILE_ALT = "Wail Solaiman - Frontend Developer"

function ProfileImage() {
  const { t } = useTranslation("about")
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const cardReveal = useRevealAnimation({
    initial: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    transition: { duration: 0.8, delay: 0.6, type: "spring", stiffness: 200 },
  })
  const textReveal = useRevealAnimation({
    initial: { opacity: 0, y: 20 },
    transition: { duration: 0.6, delay: 0.8 },
  })

  return (
    <>
      <motion.div
        {...cardReveal}
        className="relative w-full"
      >
        <motion.div
          className="bg-card md:bg-card/60 md:backdrop-blur-sm rounded-3xl border border-border/20 shadow-soft overflow-hidden"
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="flex flex-col md:flex-row md:min-h-[280px]">
            <motion.div
              className="flex flex-col justify-center p-6 sm:p-8 md:w-1/2 md:p-8 lg:p-10"
              {...textReveal}
            >
              <h3 className="text-2xl font-bold text-text-primary mb-3 md:text-left text-center">
                Wail Solaiman
              </h3>
              <div className="flex items-center gap-2 mb-4 md:justify-start justify-center">
                <StatusDot />
                <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {t("availability.availableForWork")}
                </span>
              </div>
              <p className="text-text-secondary/70 text-sm leading-relaxed md:text-left text-center">
                {t("availability.profileDescription")}
              </p>
            </motion.div>

            <button
              type="button"
              onClick={() => setLightboxOpen(true)}
              className="group relative md:w-1/2 min-h-[220px] sm:min-h-[260px] md:min-h-0 cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
              aria-label={`${PROFILE_ALT}. Click to enlarge.`}
            >
              <img
                src={PROFILE_IMAGE}
                alt=""
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <span className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10 group-focus-visible:bg-black/10" />
            </button>
          </div>
        </motion.div>
      </motion.div>

      <ImageLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        imageSrc={PROFILE_IMAGE}
        imageAlt={PROFILE_ALT}
      />
    </>
  )
}

export default ProfileImage
