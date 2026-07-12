import { motion } from "framer-motion"
import { useTheme } from "../../contexts/ThemeContext"
import { useTranslation } from "react-i18next"

function HeroContent() {
  const { theme } = useTheme()
  const { t } = useTranslation(["hero", "ui"])

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="inline-block rounded-full border border-white/20 bg-white/85 px-4 py-2 text-sm font-bold text-purple-900 backdrop-blur-sm dark:border-white/10 dark:bg-black/50 dark:text-purple-200">
          {t("hero:badge")}
        </span>
      </motion.div>

      {/* Identity block: photo + name */}
      <div className="mt-6 flex flex-col items-center gap-4 md:mt-8 md:gap-5">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
        >
          <img
            src="/images/logo2.webp"
            alt=""
            width={160}
            height={160}
            className="h-32 w-32 rounded-2xl object-contain shadow-lg ring-2 ring-purple-400/20 sm:h-36 sm:w-36 md:h-40 md:w-40"
          />
        </motion.div>

        <motion.h1
          className="text-4xl font-bold leading-tight md:text-6xl lg:text-7xl"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.8, ease: "easeOut" }}
        >
          <span className="bg-gradient-to-r from-gray-900 via-purple-600 to-purple-800 bg-clip-text text-transparent dark:from-purple-100 dark:via-purple-200 dark:to-purple-300">
            {t("hero:title")}
          </span>
        </motion.h1>
      </div>

      <motion.div
        className="mt-6 max-w-2xl md:mt-8"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        <h2 className="mb-4 text-2xl font-light text-gray-800 dark:text-gray-200 md:text-3xl lg:text-4xl">
          {t("hero:subtitle")}
        </h2>
        <div
          className={`mx-auto mb-5 h-1 w-16 rounded-full ${
            theme === "light"
              ? "bg-gradient-to-r from-purple-400 to-purple-600"
              : "bg-gradient-to-r from-white to-gray-300"
          }`}
        />
        <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 md:text-xl">
          {t("hero:description")}
        </p>
      </motion.div>
    </>
  )
}

export default HeroContent
