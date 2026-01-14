import Logo from "./Logo"
import Navigation from "./Navigation"
import ThemeToggle from "./ThemeToggle"
import LanguageSwitcher from "./LanguageSwitcher"

function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-purple-900/95 backdrop-blur-md border-b border-purple-800 transition-colors duration-300">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          <Navigation />
          <div className="flex items-center gap-2 md:gap-3">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
