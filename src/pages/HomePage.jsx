import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import Hero from "../components/hero"
import About from "../components/about"
import Education from "../components/education"
import Resume from "../components/resume"
import AITools from "../components/aiTools"
import Certificates from "../components/certificates"
import Portfolio from "../components/portfolio"
import WebAnimate from "../components/webanimate"
import Legacy from "../components/legacy"
import Footer from "../components/footer"
import BackToTop from "../components/common/BackToTop"
import { portfolioItems, legacySites } from "../data/portfolioData"

function HomePage() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.replace("#", "")
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }, [location])

  return (
    <>
      <Hero />
      <About />
      <Education />
      <Resume />
      <AITools />
      <Certificates />
      <Portfolio portfolioItems={portfolioItems} />
      <WebAnimate />
      <Legacy legacySites={legacySites} />
      <Footer />
      <BackToTop />
    </>
  )
}

export default HomePage
