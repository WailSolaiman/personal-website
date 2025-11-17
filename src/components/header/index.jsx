import Logo from "./Logo"
import Navigation from "./Navigation"
import ThemeToggle from "./ThemeToggle"

function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-purple-900/95 backdrop-blur-md border-b border-purple-800 transition-colors duration-300">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center">
          <Logo />
          <Navigation />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}

export default Header
