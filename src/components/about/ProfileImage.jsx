import { motion } from "framer-motion"

function ProfileImage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: true }}
      className="relative text-center"
    >
      <div className="relative inline-block mb-4">
        {/* Decorative elements - animated */}
        <motion.div
          className="absolute -top-4 -left-4 w-16 h-16 bg-primary/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          className="absolute -bottom-4 -right-4 w-20 h-20 bg-secondary/20 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div>

        <motion.div className="relative w-32 h-32 mx-auto">
          <img
            src="/images/profile-pic.jpg"
            alt="Wail Solaiman"
            className="w-full h-full object-cover rounded-full border-4 border-card shadow-hard"
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ProfileImage
