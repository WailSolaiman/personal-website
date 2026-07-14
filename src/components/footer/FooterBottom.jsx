import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { useRevealAnimation } from "../../hooks/useRevealAnimation"

function FooterBottom() {
  const { t } = useTranslation(["footer", "ui"])
  const reveal = useRevealAnimation({
    initial: { opacity: 0 },
    visible: { opacity: 1 },
    transition: { duration: 0.6, delay: 0.8 },
  })
  const currentYear = new Date().getFullYear()

  return (
    <motion.div
      className="border-t border-border/30 pt-8 text-center"
      {...reveal}
    >
      <div className="mb-6 flex flex-wrap justify-center gap-8 text-sm">
        {[
          { name: t("ui:navigation.home"), href: "/#home" },
          { name: t("ui:navigation.about"), href: "/#about" },
          { name: t("ui:navigation.resume"), href: "/#resume" },
          { name: t("ui:navigation.portfolio"), href: "/#portfolio" },
          { name: t("ui:navigation.legacy"), href: "/#legacy" },
        ].map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-text-secondary/70 transition-colors duration-300 hover-accent"
          >
            {link.name}
          </a>
        ))}
        <Link
          to="/privacy"
          className="text-text-secondary/70 transition-colors duration-300 hover-accent"
        >
          {t("footer:privacy.label")}
        </Link>
        <Link
          to="/imprint"
          className="text-text-secondary/70 transition-colors duration-300 hover-accent"
        >
          {t("footer:imprint.label")}
        </Link>
      </div>

      <div className="mb-6 flex justify-center">
        <img
          src="/images/logo2.webp"
          alt=""
          width={80}
          height={80}
          className="h-16 w-16 rounded-xl object-contain opacity-90 sm:h-20 sm:w-20"
        />
      </div>

      <div className="text-text-secondary/60 text-sm">
        <p>
          © {currentYear}{" "}
          <span
            className="font-semibold"
            style={{ color: "var(--accent-purple)" }}
          >
            Wail Solaiman
          </span>
          . {t("footer:copyright")}
        </p>
        <p className="mt-2 text-xs">{t("footer:builtWith")}</p>
      </div>
    </motion.div>
  )
}

export default FooterBottom
