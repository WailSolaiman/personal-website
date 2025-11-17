import FooterHeader from "./FooterHeader"
import SocialLinksGrid from "./SocialLinksGrid"
import QuickStats from "./QuickStats"
import NewsletterCTA from "./NewsletterCTA"
import FooterBottom from "./FooterBottom"

function Footer() {
  return (
    <footer className="py-16 lg:py-24 px-6 bg-card/40 border-t border-border/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-48 md:w-64 md:h-64 bg-secondary/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <FooterHeader />
        <SocialLinksGrid />
        <QuickStats />
        <NewsletterCTA />
        <FooterBottom />
      </div>
    </footer>
  )
}

export default Footer
