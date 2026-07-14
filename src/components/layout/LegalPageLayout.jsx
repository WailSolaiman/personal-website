import { Link } from "react-router-dom"
import Header from "../header"
import Footer from "../footer"

function LegalPageLayout({ title, children }) {
  return (
    <div className="min-h-screen bg-background text-text-primary transition-colors duration-300">
      <Header />
      <main className="container mx-auto max-w-3xl px-6 pb-16 pt-28 md:pt-32">
        <Link
          to="/"
          className="mb-8 inline-flex text-sm font-medium text-text-secondary transition-colors duration-300 hover-accent"
        >
          ← Zur Startseite
        </Link>
        <h1 className="mb-8 text-3xl font-bold text-text-primary md:text-4xl">
          {title}
        </h1>
        <div className="prose prose-lg max-w-none text-text-secondary leading-relaxed">
          {children}
        </div>
      </main>
      <Footer minimal />
    </div>
  )
}

export default LegalPageLayout
