import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light") // Default to light

  useEffect(() => {
    // Always default to light mode for new visitors
    const themeToApply = "light"
    setTheme(themeToApply)
    applyTheme(themeToApply)
    localStorage.setItem("theme", themeToApply)
  }, [])

  const applyTheme = (themeName) => {
    const root = window.document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add(themeName)
  }

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    applyTheme(newTheme)
    localStorage.setItem("theme", newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
