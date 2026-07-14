import { useRef } from "react"
import { useTranslation } from "react-i18next"

function Navigation() {
  const navScrollRef = useRef(null)
  const { t } = useTranslation("ui")

  const navItems = [
    { href: "/#home", label: t("navigation.home") },
    { href: "/#about", label: t("navigation.about") },
    { href: "/#resume", label: t("navigation.resume") },
    { href: "/#portfolio", label: t("navigation.portfolio") },
    { href: "/#legacy", label: t("navigation.legacy"), extraClasses: "pe-12" },
  ]

  const baseClasses =
    "text-white hover:text-purple-200 transition-colors whitespace-nowrap text-sm md:text-base"

  return (
    <div className="hidden md:flex flex-1 items-center justify-center mx-4 min-w-0 relative">
      <div
        ref={navScrollRef}
        className="flex gap-3 md:gap-4 lg:gap-6 overflow-x-auto scrollbar-hide relative ps-6 pe-4 border-s border-e border-white/20 md:border-0"
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={`${baseClasses} ${item.extraClasses || ""}`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Navigation
