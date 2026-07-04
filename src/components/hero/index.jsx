import HeroContent from "./HeroContent"
import HeroButtons from "./HeroButtons"
import ScrollIndicator from "./ScrollIndicator"

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden bg-purple-200 px-6 py-24 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-950 md:py-28"
    >
      <div className="container relative z-10 mx-auto w-full">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <HeroContent />
          <HeroButtons />
        </div>
      </div>

      <ScrollIndicator />
    </section>
  )
}

export default Hero
