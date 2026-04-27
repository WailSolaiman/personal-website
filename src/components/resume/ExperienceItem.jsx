import { motion } from 'framer-motion'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaFileAlt } from 'react-icons/fa'
import DocumentModal from '../common/DocumentModal'

function ExperienceItem({ experience, index }) {
  const { t } = useTranslation(['resume', 'ui', 'sections'])
	const {
		icon,
		title,
		period,
		role,
		description,
		skills,
		current,
		hasCertificate,
		certificate,
	} = experience
	const [isModalOpen, setIsModalOpen] = useState(false)

	// Zig-zag layout: odd items go left, even items go right
	const isLeft = index % 2 !== 0
	const containerPadding = isLeft ? 'pe-16 md:pe-20' : 'ps-16 md:ps-20'

	return (
		<motion.div
			className={`relative mb-12 ${index === 0 ? 'mt-8' : ''}`}
			initial={{ opacity: 1, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, delay: index * 0.1 }}
			viewport={{ once: true }}>
			{/* Card container for positioning */}
			<div
				className={`relative ${
					isLeft ? 'md:text-end md:flex md:justify-end' : ''
				}`}>
				{/* Experience card */}
				<motion.div
					className={`bg-card/50 backdrop-blur-sm p-8 rounded-2xl shadow-medium border-2 border-primary-default/30 dark:border-white/30 hover:border-primary-default/50 dark:hover:border-white/50 hover:shadow-hard transition-all duration-300 max-w-2xl ${
						isLeft ? 'md:me-8' : 'md:ms-8'
					} relative z-10`}
					whileHover={{ y: -5 }}
					transition={{ type: 'spring', stiffness: 300 }}>
					{/* Header */}
					<div className='flex items-start justify-between mb-4'>
						<div className='flex items-start gap-4'>
							<div className='text-3xl'>{icon}</div>
							<div>
								<h3 className='text-2xl font-bold text-text-primary mb-1'>
									{title}
									{current && (
										<span
											className='inline-block ms-2 px-2 py-1 text-xs font-semibold bg-primary/20 rounded-full animate-pulse'
											style={{
												color: 'var(--accent-purple)',
											}}>
											{t('ui:labels.current')}
										</span>
									)}
								</h3>
								<p className='text-text-primary/80 font-medium'>
									{role}
								</p>
								<p
									className='font-semibold text-sm'
									style={{ color: 'var(--accent-purple)' }}>
									{period}
								</p>
							</div>
						</div>
					</div>

					{/* Description */}
					<p className='text-text-secondary mb-6 leading-relaxed text-start'>
						{description}
					</p>

					{/* Skills */}
					<div className='flex flex-wrap gap-2 mb-4'>
						{skills.map((skill) => (
							<span
								key={skill}
								className='px-3 py-1 bg-surface/50 text-text-primary text-xs font-medium rounded-full border border-border/30 hover:border-primary/50 transition-colors duration-200'>
								{skill}
							</span>
						))}
					</div>

					{/* Certificate Button */}
					{hasCertificate && (
						<div className='flex justify-start'>
							<button
								onClick={() => setIsModalOpen(true)}
								className='inline-flex items-center gap-2 px-4 py-2 bg-purple-200/30 hover:bg-purple-200/50 text-primary rounded-lg transition-all duration-200 hover:scale-105 active:scale-95'
								style={{ color: 'var(--accent-purple)' }}>
								<FaFileAlt className='w-4 h-4' />
								<span className='font-medium text-sm'>
									{t('resume:viewCertificate')}
								</span>
							</button>
						</div>
					)}
				</motion.div>
			</div>

			{hasCertificate && certificate && (
				<DocumentModal
					isOpen={isModalOpen}
					onClose={() => setIsModalOpen(false)}
					title={t('sections:resume.employmentCertificate')}
					imageSrc={certificate.imageSrc}
					imageAlt={certificate.imageAlt}
					translationContent={certificate.translationContent}
					translationTitle={certificate.translationTitle}
				/>
			)}
		</motion.div>
	)
}

export default ExperienceItem
