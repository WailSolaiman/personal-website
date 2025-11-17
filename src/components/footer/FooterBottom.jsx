import { motion } from "framer-motion"
import { useTheme } from "../../contexts/ThemeContext"

function FooterBottom() {
  const { theme } = useTheme()
  const isLightTheme = theme === "light"
  const currentYear = new Date().getFullYear()

  return (
    <motion.div
      className="border-t border-border/30 pt-8 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Navigation Links */}
      <div className="flex flex-wrap justify-center gap-8 mb-6 text-sm">
        {[
          { name: "Home", href: "#home" },
          { name: "About", href: "#about" },
          { name: "Resume", href: "#resume" },
          { name: "Portfolio", href: "#portfolio" },
          { name: "Legacy", href: "#legacy" },
        ].map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-text-secondary/70 transition-colors duration-300 hover-accent"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`mb-6 p-3 bg-card/50 hover:bg-card border ${
          isLightTheme ? "border-black/20" : "border-border/30"
        } rounded-full transition-all duration-300 group`}
        aria-label="Back to top"
      >
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            className="w-5 h-5 text-text-secondary/70 group-hover:text-primary transition-colors duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.div>
      </button>

      {/* Copyright */}
      <div className="text-text-secondary/60 text-sm">
        <p>
          © {currentYear}{" "}
          <span
            className="font-semibold"
            style={{ color: "var(--accent-purple)" }}
          >
            Wail Solaiman
          </span>
          . Crafted with{" "}
          <motion.span
            className="inline-block"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
          >
            ❤️
          </motion.span>{" "}
          and modern web technologies.
        </p>
        <p className="mt-2 text-xs">
          Built with <span className="font-semibold">React</span>,{" "}
          <span className="font-semibold">Vite</span>, and{" "}
          <span className="font-semibold">Tailwind CSS</span>
        </p>
      </div>
    </motion.div>
  )
}

export default FooterBottom
