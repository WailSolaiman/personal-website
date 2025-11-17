import { useRef } from "react"

function Navigation() {
  const navScrollRef = useRef(null)

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#resume", label: "Resume" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#legacy", label: "Legacy", extraClasses: "pr-12" },
  ]

  const baseClasses =
    "text-white hover:text-purple-200 transition-colors whitespace-nowrap text-sm md:text-base"

  return (
    <div className="flex-1 flex items-center justify-center mx-4 min-w-0 relative">
      <div
        ref={navScrollRef}
        className="flex gap-3 md:gap-4 lg:gap-6 overflow-x-auto scrollbar-hide relative pr-4 pl-6 border-l border-r border-white/20 md:border-0"
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
