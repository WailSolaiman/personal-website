function Logo({ compact = false }) {
  return (
    <a
      href="#home"
      className={`font-bold flex-shrink-0 text-white no-underline rounded-md hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-purple-900 transition-[opacity,font-size] duration-300 ease-out ${
        compact ? "text-base md:text-lg" : "text-xl md:text-2xl"
      }`}
    >
      WailSolaiman
    </a>
  )
}

export default Logo
