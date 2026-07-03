import { motion } from "framer-motion"

function StatusDot() {
  return (
    <motion.div
      className="relative flex h-2.5 w-2.5 shrink-0 items-center justify-center"
      animate={{ scale: [1, 1.12, 1] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden="true"
    >
      <div className="absolute h-2.5 w-2.5 rounded-full bg-green-400/90 blur-[1.5px]" />
      <div className="absolute h-3 w-3 rounded-full bg-green-500/50 blur-sm" />
      <div className="absolute h-3.5 w-3.5 rounded-full bg-emerald-400/30 blur-md" />
      <div className="relative h-1.5 w-1.5 rounded-full bg-gradient-to-br from-green-300 to-emerald-500 shadow-[0_0_3px_1px_rgba(74,222,128,1),0_0_8px_2px_rgba(34,197,94,0.85),0_0_14px_4px_rgba(16,185,129,0.45)]" />
    </motion.div>
  )
}

export default StatusDot
