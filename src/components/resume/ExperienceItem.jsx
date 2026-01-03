import { motion } from "framer-motion"
import { useState } from "react"
import { FaFileAlt, FaExternalLinkAlt } from "react-icons/fa"
import DocumentModal from "../common/DocumentModal"
import { andersBjorkTranslation } from "../../data/andersBjorkData"

function ExperienceItem({ experience, index }) {
  const {
    icon,
    title,
    period,
    role,
    description,
    skills,
    current,
    hasCertificate,
  } = experience
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Zig-zag layout: odd items go left, even items go right
  const isLeft = index % 2 !== 0
  const containerPadding = isLeft ? "pr-16 md:pr-20" : "pl-16 md:pl-20"

  return (
    <motion.div
      className={`relative mb-12 ${index === 0 ? "mt-8" : ""}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {/* Card container for positioning */}
      <div
        className={`relative ${
          isLeft ? "md:text-right md:flex md:justify-end" : ""
        }`}
      >
        {/* Experience card */}
        <motion.div
          className={`bg-card/50 backdrop-blur-sm p-8 rounded-2xl shadow-medium border border-border/10 hover:shadow-hard transition-all duration-300 max-w-2xl ${
            current ? "ring-2 ring-primary/30" : ""
          } ${isLeft ? "md:mr-8" : "md:ml-8"} relative z-10`}
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-start gap-4">
              <div className="text-3xl">{icon}</div>
              <div>
                <h3 className="text-2xl font-bold text-text-primary mb-1">
                  {title}
                  {current && (
                    <span
                      className="inline-block ml-2 px-2 py-1 text-xs font-semibold bg-primary/20 rounded-full animate-pulse"
                      style={{ color: "var(--accent-purple)" }}
                    >
                      Current
                    </span>
                  )}
                </h3>
                <p className="text-text-primary/80 font-medium">{role}</p>
                <p
                  className="font-semibold text-sm"
                  style={{ color: "var(--accent-purple)" }}
                >
                  {period}
                </p>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-text-secondary mb-6 leading-relaxed text-left">
            {description}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mb-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-surface/50 text-text-primary text-xs font-medium rounded-full border border-border/30 hover:border-primary/50 transition-colors duration-200"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Certificate Button */}
          {hasCertificate && (
            <div className="flex justify-start">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-purple-200/30 hover:bg-purple-200/50 text-primary rounded-lg transition-all duration-200 hover:scale-105 active:scale-95"
                style={{ color: "var(--accent-purple)" }}
              >
                <FaFileAlt className="w-4 h-4" />
                <span className="font-medium">View Employment Certificate</span>
              </button>
            </div>
          )}

          {/* Links for Freelance Developer */}
          {current && (
            <div className="flex flex-wrap gap-3 mt-4">
              <a
                href="https://wailsolaiman.space/portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 hover:bg-primary/20 text-primary text-xs font-medium rounded-full border border-border/30 hover:border-primary/50 transition-colors duration-200 hover:scale-105"
                style={{ color: "var(--accent-purple)" }}
              >
                <span>WailSolaiman.Space</span>
                <FaExternalLinkAlt className="w-3 h-3" />
              </a>
              <a
                href="https://wscode.online"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 hover:bg-primary/20 text-primary text-xs font-medium rounded-full border border-border/30 hover:border-primary/50 transition-colors duration-200 hover:scale-105"
                style={{ color: "var(--accent-purple)" }}
              >
                <span>WsCode.Online</span>
                <FaExternalLinkAlt className="w-3 h-3" />
              </a>
            </div>
          )}
        </motion.div>
      </div>

      {hasCertificate && (
        <DocumentModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Employment Certificate"
          imageSrc="/images/arbeitszeugnis-bjoerk.jpg"
          imageAlt="Anders Björk GmbH Certificate"
          translationContent={andersBjorkTranslation}
          translationTitle="English Translation"
        />
      )}
    </motion.div>
  )
}

export default ExperienceItem
