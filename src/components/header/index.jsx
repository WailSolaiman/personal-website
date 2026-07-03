import { useState, useEffect } from "react"
import Logo from "./Logo"
import Navigation from "./Navigation"
import ThemeToggle from "./ThemeToggle"
import LanguageSwitcher from "./LanguageSwitcher"

const SCROLL_COMPACT_Y = 48

function Header() {
  const [compact, setCompact] = useState(false)

  useEffect(() => {
    const update = () => {
      setCompact(window.scrollY > SCROLL_COMPACT_Y)
    }

    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [])

  return (
    <header className="fixed top-0 w-full z-50 bg-purple-900 md:bg-purple-900/95 md:backdrop-blur-md border-b border-purple-800 transition-colors duration-300">
      <nav
        className={`container mx-auto px-3 transition-[padding] duration-300 ease-out md:px-4 ${
          compact ? "py-2" : "py-4"
        }`}
      >
        <div
          className={`flex items-center justify-between ${
            compact ? "gap-1.5" : "gap-2 md:gap-4"
          }`}
        >
          <Logo compact={compact} />
          <Navigation />
          <div
            className={`flex items-center shrink-0 ${
              compact ? "gap-1" : "gap-1.5 md:gap-3"
            }`}
          >
            <LanguageSwitcher compact={compact} />
            <ThemeToggle compact={compact} />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
