import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext()

function readStoredTheme() {
  if (typeof window === "undefined") return "dark"
  return localStorage.getItem("theme") || "dark"
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(readStoredTheme)

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  const applyTheme = (themeName) => {
    const root = window.document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add(themeName)
  }

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
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
