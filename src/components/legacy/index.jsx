import LegacyHeader from "./LegacyHeader"
import LegacyGrid from "./LegacyGrid"
import LegacyFooter from "./LegacyFooter"

function Legacy({ legacySites }) {
  return (
    <section
      id="legacy"
      className="section-deferred py-24 lg:py-32 px-6 bg-gradient-to-br from-background via-background to-surface/30 border-t border-border/20"
    >
      <div className="container mx-auto">
        <LegacyHeader />

        {/* Scanline effect — desktop only */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none -z-10 hidden md:block"
          style={{
            background: `linear-gradient(transparent 50%, var(--retro-green-dark) 0.1) 50%)`,
            backgroundSize: "100% 4px",
          }}
        />

        <LegacyGrid legacySites={legacySites} />
        <LegacyFooter />
      </div>
    </section>
  )
}

export default Legacy
