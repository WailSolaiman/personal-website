/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // Primary brand colors - PURPLE THEME
        primary: {
          light: "#a855f7", // Purple-500
          default: "#7c3aed", // Purple-600 (main purple)
          dark: "#581c87", // Purple-900
        },
        secondary: {
          light: "#c084fc", // Purple-300 (lighter purple)
          default: "#a855f7", // Purple-400
          dark: "#7c3aed", // Purple-600
        },
        // Semantic colors for themes
        background: {
          light: "#f8fafc", // Soft off-white instead of blinding pure white
          dark: "#030712", // bg-gray-950 - softer dark than intense black
        },
        // Special warm tones for Hero section
        hero: {
          light: "#fef7ed", // Warm cream/beige for hero in light mode
          dark: "#151515", // Keep original for dark mode
        },
        surface: {
          light: "#ffffff", // Pure white for surfaces like cards
          dark: "#1e1e1e",
        },
        card: {
          light: "#ffffff",
          dark: "#2a2a2a",
        },
        text: {
          primary: {
            light: "#1e293b",
            dark: "#d8b4fe",
          },
          secondary: {
            light: "#64748b",
            dark: "#e2e8f0",
          },
          accent: {
            light: "#8b5cf6", // Purple-500 for accent text
            dark: "#e9d5ff", // Purple-100 for dark mode accent - even lighter purple
          },
        },
        border: {
          light: "#e2e8f0",
          dark: "#374151",
        },
      },
      fontFamily: {
        sans: ["Inter var", "Poppins", "system-ui", "sans-serif"],
        serif: ["Lora", "Georgia", "serif"],
        mono: ["JetBrains Mono", "Courier New", "monospace"],
        display: ["Inter var", "Poppins", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-in": "slideIn 0.7s ease-out",
        "bounce-subtle": "bounceSubtle 2s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateX(-20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        bounceSubtle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
      },
      boxShadow: {
        soft: "0 2px 15px rgba(0, 0, 0, 0.05)",
        medium: "0 4px 25px rgba(0, 0, 0, 0.1)",
        hard: "0 8px 40px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
}
