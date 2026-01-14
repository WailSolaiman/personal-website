import { ThemeProvider } from "./contexts/ThemeContext"
import Header from "./components/header"
import Hero from "./components/hero"
import About from "./components/about"
import Education from "./components/education"
import Resume from "./components/resume"
import AITools from "./components/aiTools"
import Certificates from "./components/certificates"
import Portfolio from "./components/portfolio"
import Legacy from "./components/legacy"
import Footer from "./components/footer"
import { portfolioItems, legacySites } from "./data/portfolioData"

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-text-primary transition-colors duration-300 dark:bg-background dark:text-text-primary">
        <Header />
        <Hero />
        <About />
        <Education />
        <Resume />
        <AITools />
        <Certificates />
        <Portfolio portfolioItems={portfolioItems} />
        <Legacy legacySites={legacySites} />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
