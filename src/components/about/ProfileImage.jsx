import { motion } from "framer-motion"

function ProfileImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 200 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Main card container */}
      <motion.div
        className="bg-card/60 backdrop-blur-sm rounded-3xl p-8 border border-border/20 shadow-soft"
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Profile image container */}
        <div className="relative mb-6">
          {/* Profile image */}
          <motion.div
            className="relative w-40 h-40 mx-auto"
            transition={{ duration: 0.5 }}
          >
            <img
              src="/images/profile-pic.jpg"
              alt="Wail Solaiman - Full-Stack Developer"
              className="w-full h-full object-cover rounded-2xl border-4 border-card/80 shadow-hard"
            />

            {/* Status indicator */}
            <motion.div
              className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-green-500 rounded-full border-4 border-card flex items-center justify-center shadow-lg"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </motion.div>
          </motion.div>
        </div>

        {/* Name and title */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-text-primary mb-2">
            Wail Solaiman
          </h3>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
              Available for work
            </span>
          </div>
          <p className="text-text-secondary/70 text-sm leading-relaxed">
            Passionate about creating exceptional digital experiences that
            combine thoughtful design with robust functionality.
          </p>
        </motion.div>

        {/* Social stats - Removed */}
        {/* <motion.div
          className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-border/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="text-lg font-bold text-text-primary">10+</div>
            <div className="text-xs text-text-secondary/70">Years</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-text-primary">50+</div>
            <div className="text-xs text-text-secondary/70">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-text-primary">30+</div>
            <div className="text-xs text-text-secondary/70">Clients</div>
          </div>
        </motion.div> */}
      </motion.div>
    </motion.div>
  )
}

export default ProfileImage
