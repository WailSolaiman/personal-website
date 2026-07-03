import { motion } from "framer-motion"

import { useTranslation } from "react-i18next"

import { useIsMobile } from "../../hooks/useIsMobile"

import { useRevealAnimation } from "../../hooks/useRevealAnimation"



function LegacyCardContent({ site, translatedDesc }) {

  return (

    <>

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



      <div className="relative aspect-square overflow-hidden">

        <img

          src={site.image}

          alt={site.title}

          loading="lazy"

          decoding="async"

          className="w-full h-full object-cover md:grayscale md:transition-all md:duration-500 md:group-hover:grayscale-0"

        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="absolute inset-0 opacity-10 pointer-events-none hidden md:block">

          <div className="w-full h-full bg-gradient-to-b from-transparent via-secondary/20 to-transparent bg-repeat-y bg-[length:100%_2px]"></div>

        </div>

      </div>



      <div className="p-3 sm:p-6 relative bg-card md:bg-card/50 md:backdrop-blur-sm text-center md:text-left">
        <h3 className="font-mono retro-text-medium font-semibold text-sm leading-tight mb-2">
          {site.title}
        </h3>

        <p className="text-text-secondary/70 text-xs font-mono leading-tight line-clamp-2">
          {translatedDesc}
        </p>
      </div>

    </>

  )

}



function LegacySiteCard({ site, index }) {

  const { t } = useTranslation("legacyData")

  const isMobile = useIsMobile()

  const siteKey = String(site.id)

  const translatedDesc = t(`sites.${siteKey}.desc`, { defaultValue: site.desc })

  const reveal = useRevealAnimation({

    initial: { opacity: 0, y: 50, scale: 0.8 },

    visible: { opacity: 1, y: 0, scale: 1 },

    transition: {

      duration: 0.5,

      delay: index * 0.05,

      type: "spring",

      stiffness: 200,

    },

  })



  const cardClass =

    "group relative bg-card md:bg-card/30 md:backdrop-blur-sm border border-secondary/20 rounded-lg overflow-hidden md:hover:border-secondary/60 md:transition-all md:duration-300 cursor-pointer"



  const openSite = () => window.open(site.url, "_blank")



  if (isMobile) {

    return (

      <div className={cardClass} onClick={openSite}>

        <LegacyCardContent site={site} translatedDesc={translatedDesc} />

      </div>

    )

  }



  return (

    <motion.div

      className={cardClass}

      {...reveal}

      whileHover={{ boxShadow: "0 20px 60px var(--retro-shadow)" }}

      whileTap={{ scale: 0.95 }}

      onClick={openSite}

    >

      <LegacyCardContent site={site} translatedDesc={translatedDesc} />

    </motion.div>

  )

}



export default LegacySiteCard

