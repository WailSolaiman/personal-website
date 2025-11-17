import HeroContent from "./HeroContent"
import HeroButtons from "./HeroButtons"
import ScrollIndicator from "./ScrollIndicator"

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-purple-200 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-950 pt-28 xl:pt-32"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <HeroContent />
          <HeroButtons />
        </div>
      </div>

      <ScrollIndicator />
    </section>
  )
}

export default Hero
