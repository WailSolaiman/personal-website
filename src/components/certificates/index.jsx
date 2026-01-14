import { motion } from "framer-motion"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa"
import CertificateModal from "../common/CertificateModal"

function Certificates() {
  const { t } = useTranslation(["sections", "certificates", "ui"])
  const [selectedCertificate, setSelectedCertificate] = useState(null)

  const certificates = [
    {
      id: 1,
      image: "/images/Generative AI Introduction and Applications.jpg",
      title: t("certificates:items.generativeAI.title"),
      description: t("certificates:items.generativeAI.description"),
      platform: t("sections:certificates.platform"),
    },
    {
      id: 2,
      image: "/images/Generative AI Prompt Engineering Basics.jpg",
      title: t("certificates:items.promptEngineering.title"),
      description: t("certificates:items.promptEngineering.description"),
      platform: t("sections:certificates.platform"),
    },
  ]

  return (
    <section
      id="certificates"
      className="py-24 lg:py-32 px-6 bg-gradient-to-br from-surface/30 via-background to-surface/30 border-t-2 border-border/30 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-4">
            {t("sections:titles.certificates")}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-primary mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-text-secondary/80 max-w-2xl mx-auto">
            {t("certificates:description")}
          </p>
        </motion.div>

        {/* Certificates List */}
        <div className="space-y-16 md:space-y-24">
          {certificates.map((cert, index) => {
            const isEven = index % 2 === 1
            return (
              <motion.div
                key={cert.id}
                className={`flex flex-col ${
                  isEven ? "lg:flex-row-reverse" : "lg:flex-row"
                } gap-8 lg:gap-12 items-center`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Image */}
                <motion.div
                  className="w-full lg:w-[40%] relative group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedCertificate(cert)}
                >
                  <div className="relative overflow-hidden rounded-xl border-2 border-border/30 shadow-lg">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <FaExternalLinkAlt className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </motion.div>

                {/* Text Content */}
                <motion.div
                  className="w-full lg:w-[60%] space-y-4"
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <FaCertificate className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {cert.platform}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary">
                    {cert.title}
                  </h3>

                  <p className="text-lg text-text-secondary/90 leading-relaxed">
                    {cert.description}
                  </p>

                  <button
                    onClick={() => setSelectedCertificate(cert)}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-all duration-300 font-medium mt-4"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                    {t("ui:buttons.viewCertificate")}
                  </button>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedCertificate && (
        <CertificateModal
          isOpen={!!selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
          title={selectedCertificate.title}
          imageSrc={selectedCertificate.image}
          imageAlt={selectedCertificate.title}
        />
      )}
    </section>
  )
}

export default Certificates
