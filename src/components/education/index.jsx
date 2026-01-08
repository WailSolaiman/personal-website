import { motion } from "framer-motion"
import { FaGraduationCap, FaFilePdf } from "react-icons/fa"
import { useState } from "react"
import DocumentModal from "../common/DocumentModal"
import { certificateTranslation } from "../../data/educationData"

function Education() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section
      id="education"
      className="py-24 lg:py-32 px-6 bg-surface/30 border-t-2 border-border/30"
    >
      <div className="container mx-auto">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Education
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-text-accent mx-auto rounded-full"></div>
          </div>

          <motion.div
            className="bg-surface border border-border rounded-xl p-8 md:p-12 shadow-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <FaGraduationCap className="w-8 h-8 text-primary" />
              </motion.div>

              <motion.h3
                className="text-xl md:text-2xl lg:text-3xl font-bold text-text-primary mb-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Technical University of Lübeck
              </motion.h3>

              <motion.p
                className="text-sm md:text-base text-text-secondary mb-1"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Germany
              </motion.p>

              <motion.p
                className="text-base md:text-lg lg:text-xl text-text-primary font-medium mb-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                Bachelor's Degree in Computer Science / Software Engineering
              </motion.p>

              <motion.span
                className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
              >
                B.Eng. • Completed in 2013
              </motion.span>

              <motion.button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-purple-200/30 hover:bg-purple-200/50 text-primary rounded-lg transition-all duration-300 ease-out hover:scale-105 active:scale-95"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  duration: 0.6,
                  delay: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true }}
                style={{ color: "var(--accent-purple)" }}
              >
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 1.1 }}
                >
                  <FaFilePdf className="w-4 h-4" />
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 1.2 }}
                  className="font-medium"
                >
                  View Certificate
                </motion.span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <DocumentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Bachelor Certificate"
        imageSrc="/images/bachelor-urkunde-page.jpg"
        imageAlt="Bachelor Certificate"
        translationContent={certificateTranslation}
        translationTitle=""
      />
    </section>
  )
}

export default Education
