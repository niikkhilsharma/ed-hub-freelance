'use client'

import Image from 'next/image'
import { motion, HTMLMotionProps } from 'framer-motion'
import mainLogo from '@/public/mianLogo2.png'
import mapImage from '@/public/mapImage.png'
import OverImage1 from '@/public/overImage1.png'
import OverImage2 from '@/public/overImage2.png'
import OverImage3 from '@/public/overImage3.png'
import OverImage4 from '@/public/overImage4.png'
import Banner1 from '@/public/Banner1.png'
import Banner2 from '@/public/Banner2.png'
import Banner3 from '@/public/Banner3.png'
import Banner4 from '@/public/Banner4.png'
import Banner5 from '@/public/Banner5.png'
import Testinomials from '@/components/testimonials'
import { ReactNode } from 'react'

import { BookOpen, Brain, Users, Activity, UserCheck, Layers, Clock, ChevronRight } from 'lucide-react'
import { useState, useEffect, JSX } from 'react'

// Animation variants
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok, FaYoutube } from 'react-icons/fa'

const SocialIcon = ({ type, className }: { type: string; className?: string }) => {
	const icons: Record<string, JSX.Element> = {
		facebook: <FaFacebookF className={className} />,
		instagram: <FaInstagram className={className} />,
		twitter: <FaTwitter className={className} />,
		tiktok: <FaTiktok className={className} />,
		youtube: <FaYoutube className={className} />,
	}

	return icons[type] || null
}

const linkHover = {
	hover: {
		x: 5,
		color: '#fff',
		transition: { duration: 0.2 },
	},
}
const socialIconHover = {
	hover: {
		y: -5,
		scale: 1.1,
		transition: { type: 'spring', stiffness: 300, damping: 10 },
	},
}
const fadeInUp = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const cardHover = {
	hover: {
		y: -8,
		boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
		transition: { type: 'spring', stiffness: 400, damping: 10 },
	},
}
const staggerChildren = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
}

const staggerContainer = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
}

export default function Home() {
	const [isLoaded, setIsLoaded] = useState(false)

	useEffect(() => {
		setIsLoaded(true)
	}, [])

	const blogPosts = [
		{
			id: 1,
			title: 'Top Non Academic Courses: Paving Way for Successful Youth Development',
			description:
				'You don&apos;t need special tools to make your children talented, just a little nudge in the right direction can do wonders!',
			image: '/cardImage1.png',
			author: 'Alex Liones',
			authorImage: '/alexProfile.png',
			date: '28 Aug 2020',
			categories: ['CRAFT', 'POTTERY', 'YOGA', 'THEATRE'],
		},
		{
			id: 2,
			title: 'Significance of Early Childhood Educational Programs',
			description:
				'You don&apos;t need special tools to make your children talented, just a little nudge in the right direction can do wonders!',
			image: '/cardImage2.png',
			author: 'Alex Liones',
			authorImage: '/alexProfile.png',
			date: '28 Aug 2020',
			categories: [],
		},
		{
			id: 3,
			title: 'Importance of Customized & Individualized Learning for Kids',
			description:
				'You don&apos;t need special tools to make your children talented, just a little nudge in the right direction can do wonders!',
			image: '/cardImage3.png',
			author: 'Alex Liones',
			authorImage: '/alexProfile.png',
			date: '28 Aug 2020',
			categories: [],
		},
		{
			id: 4,
			title: 'Top Non Academic Courses: Paving Way for Successful Youth Development',
			description:
				'You don&apos;t need special tools to make your children talented, just a little nudge in the right direction can do wonders!',
			image: '/cardImage4.png',
			author: 'Alex Liones',
			authorImage: '/alexProfile.png',
			date: '28 Aug 2020',
			categories: ['CRAFT', 'POTTERY', 'YOGA', 'THEATRE'],
		},
	]

	const featureCards = [
		{
			id: 1,
			bgColor: 'bg-[#ffb3c0]',
			icon: <Brain className="h-5 w-5 text-[#f9326f]" />,
			title: 'Cognitive Enrichment Activities',
			items: ['Brain games (e.g., puzzles, memory challenges)', 'Logic and reasoning exercises', 'STEAM-based projects'],
		},
		{
			id: 2,
			bgColor: 'bg-[#a8e1ff]',
			icon: <BookOpen className="h-5 w-5 text-[#3366ff]" />,
			title: 'Skill-Based Learning Modules',
			items: [
				'Critical thinking & problem-solving',
				'Communication & collaboration',
				'Creativity & innovation',
				'Time management and organization',
			],
		},
		{
			id: 3,
			bgColor: 'bg-[#b3f0c7]',
			icon: <Users className="h-5 w-5 text-[#22c55e]" />,
			title: 'Social-Emotional Development',
			items: [
				'Mindfulness & self-regulation practices',
				'Conflict resolution activities',
				'Empathy-building games and discussions',
			],
		},
		{
			id: 4,
			bgColor: 'bg-[#ffd4b3]',
			icon: <Activity className="h-5 w-5 text-[#f97316]" />,
			title: 'Physical & Sensory Engagement',
			items: [
				'Movement breaks (e.g., yoga, dance)',
				'Activities to strengthen motor coordination',
				'Brain-body connection exercises',
			],
		},
		{
			id: 5,
			bgColor: 'bg-[#a8e1ff]',
			icon: <UserCheck className="h-5 w-5 text-[#3366ff]" />,
			title: 'Personalized Learning Paths',
			items: [
				'Assessments to identify strengths and needs',
				'Customized learning activities',
				'Progress tracking & feedback sessions',
			],
		},
		{
			id: 6,
			bgColor: 'bg-[#ffb3c0]',
			icon: <Layers className="h-5 w-5 text-[#f9326f]" />,
			title: 'Interactive Learning Environment',
			items: ['Hands-on experiments and projects', 'Peer collaboration activities', 'Use of technology for gamified learning'],
		},
	]

	const cardData = [
		{
			id: 1,
			title: 'Membership Plans',
			description:
				'EduNique Membership Plans provide a wide Academic to extra curricular to Skill Development Programs. Take on the future, step by step.',
			image: '/Card1.png',
			buttonText: 'Explore Now!',
		},
		{
			id: 2,
			title: 'Parents Choice',
			description:
				'Parents trust Edunique for its balanced approach—combining academics, life skills, & brain development to support their child&apos;s all-round growth.',
			image: '/Card2.png',
			buttonText: 'Explore Now!',
		},
		{
			id: 3,
			title: 'Child Profiling & Mentor Program',
			description:
				'Unlock Your Child&apos;s True Potential with Deep Personal Insights, Expert Profiling & 1:1 Mentorship Tailored for Holistic Growth.',
			image: '/Card3.png',
			buttonText: 'Explore Now!',
		},
		{
			id: 4,
			title: 'Subscribe to Self Directed Learning(Worksheets & Videos)',
			description: 'Learn anytime, anywhere — with content that&apos;s practical, actionable, and made just for you.',
			image: '/Card4.png',
			buttonText: 'Explore Now!',
		},
		{
			id: 5,
			title: 'Become a Future School',
			description:
				'Lead the in modern, self-driven education. Empower your students with innovative tools, flexible learning, and real-world skills.',
			image: '/Card5.png',
			buttonText: 'Explore Now!',
		},
	]

	interface ActionButtonProps extends HTMLMotionProps<'button'> {
		children: ReactNode
		className?: string
	}

	const ActionButton = ({ children, className = '', ...props }: ActionButtonProps) => (
		<motion.button
			className={`bg-[#f9326f] text-white font-medium px-6 py-2 rounded-sm hover:bg-[#c20840] transition-colors duration-300 cursor-pointer ${className}`}
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}
			{...props}>
			{children}
		</motion.button>
	)

	const ViewMoreButton = ({ className = '' }) => (
		<motion.button
			className={`bg-[#f9326f] text-white px-4 py-2 text-sm rounded-lg hover:bg-[#ff1a5f] cursor-pointer flex items-center ${className}`}
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}>
			View More <ChevronRight className="ml-1 h-4 w-4" />
		</motion.button>
	)

	return (
		<main>
			{/* Page 1 - Hero Section */}
			<motion.div
				className="w-full flex flex-col md:flex-row gap-6 md:gap-3 px-6 md:px-[9%] items-center justify-between bg-cover bg-center bg-no-repeat"
				style={{
					minHeight: 'calc(100vh - 7.5rem)',
					backgroundImage: "url('/Background1.png')",
				}}
				initial="hidden"
				animate={isLoaded ? 'visible' : 'hidden'}
				variants={staggerContainer}>
				{/* LEFT SECTION */}
				<motion.div
					className="w-full md:w-1/2 text-white flex flex-col justify-center gap-6 py-12 px-4 md:px-12"
					variants={fadeInUp}>
					<motion.div className="text-3xl md:text-4xl font-bold leading-snug" variants={fadeInUp}>
						<motion.span
							className="inline-block text-3xl md:text-5xl"
							role="img"
							aria-label="light bulb"
							animate={{
								rotateZ: [-15, 0, -15],
								scale: [1, 1.1, 1],
							}}
							transition={{
								duration: 2,
								repeat: Infinity,
								ease: 'easeInOut',
							}}>
							💡
						</motion.span>
						<br />
						Knowledge Connection <br />
						Open the Door to <br />
						the Future
					</motion.div>

					<motion.p className="text-white/90 text-sm md:text-base leading-relaxed" variants={fadeInUp}>
						Giving every student the opportunity to access the best education and open the door to the world of knowledge.
						<br />
						<br />
						Start your learning journey today with <strong>EduNique</strong> to become an outstanding student in our learning
						community.
					</motion.p>

					<motion.div variants={fadeInUp}>
						<ActionButton>Get Started !</ActionButton>
					</motion.div>
				</motion.div>

				{/* RIGHT SECTION */}
				<motion.div className="overflow-hidden w-full md:w-1/2 flex items-center justify-center p-6 md:p-12" variants={fadeInUp}>
					<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }}>
						<Image src={OverImage1} alt="Education illustration" className="w-full max-w-[460px] h-auto object-contain" priority />
					</motion.div>
				</motion.div>
			</motion.div>

			{/* Page 2 - Globally Recognized */}
			<motion.div
				className="relative w-full h-[calc(100vh-7.5rem)] flex flex-col overflow-hidden"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true }}>
				{/* Background Layer */}
				<div
					className="absolute inset-0 bg-center bg-repeat z-0"
					style={{
						backgroundImage: "url('/Background2.png')",
						backgroundSize: '400px',
						filter: 'grayscale(10%) brightness(1.1) blur(0.5px) opacity(0.5)',
						opacity: 0.3,
					}}></div>

				{/* Foreground Content */}
				<div className="relative z-10 pt-12 px-4 flex flex-col gap-6 items-center w-full h-full">
					<motion.h1
						className="text-2xl md:text-4xl text-center font-semibold text-black"
						initial={{ opacity: 0, y: -20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}>
						Globally Recognized Interactive Education
					</motion.h1>

					{/* Image takes remaining space */}
					<motion.div
						className="flex-grow w-full flex justify-center items-center overflow-hidden"
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.2, duration: 0.5 }}
						viewport={{ once: true }}>
						<Image src={OverImage2} alt="Education Graphic" className="w-auto h-full max-h-full object-contain" priority />
					</motion.div>
				</div>
			</motion.div>

			{/* Page 3 - About Us */}
			<div className="relative w-full px-4 md:px-24 min-h-[calc(100vh-7.5rem)] flex flex-col overflow-hidden">
				{/* Background Layer */}
				<div
					className="absolute inset-0 bg-center bg-repeat z-0"
					style={{
						backgroundImage: "url('/Background2.png')",
						backgroundSize: '400px',
						filter: 'grayscale(10%) brightness(1.1) blur(0.5px) opacity(0.5)',
						opacity: 0.3,
					}}></div>

				{/* Foreground Content */}
				<div className="relative z-10 p-6 md:p-12 px-4 md:px-8 flex flex-col gap-6 items-center w-full h-full">
					<motion.h1
						className="mb-6 text-2xl md:text-4xl text-center font-semibold text-black"
						initial={{ opacity: 0, y: -20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}>
						About Us
					</motion.h1>

					<motion.div
						className="flex flex-col md:flex-row rounded-xl space-y-4 md:space-y-0 md:space-x-6"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}>
						<motion.div className="md:w-1/3" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
							<Image src={Banner1} alt="Eduunique Card Image" width={1100} priority className="rounded-4xl shadow-md" />
						</motion.div>
						<div className="md:w-2/3 px-4 md:px-12 flex flex-col justify-center">
							<h2 className="text-2xl font-bold mb-2">{`Welcome to Edunique!`}</h2>
							<p className="text-gray-700 mb-4">{`We are an AI mapped personalised, comprehensive after-school program designed for children aged 3 to 16 years, being a one stop solution for parents we offering a diverse range of 31 programs across Building Academic Foundation , Not so extra circular activities , Skill Development, and Brain Development for a child.`}</p>
							<h3 className="text-xl font-semibold mb-2">{`What Makes Edunique Unique?`}</h3>
							<p className="text-gray-600">{`Our strength lies in understanding the unique educational needs of each child and parent. We provide individualized education plans, top-class content, world-class test series, and highly trained teachers. Every child receives a perfect blend of academic support and life-skill development to help them excel both in school and beyond.`}</p>
						</div>
					</motion.div>

					<motion.div
						className="flex flex-col md:flex-row rounded-xl space-y-4 md:space-y-0 md:space-x-6"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
						viewport={{ once: true }}>
						<div className="md:w-2/3 px-4 md:px-12 flex flex-col justify-center">
							<h2 className="text-2xl font-bold mb-2">Academic Foundation Programs (11 Courses)</h2>
							<p className="text-gray-700 mb-4">
								We don&apos;t just help children score well in school exams—we build strong foundations for Olympiads, Debates,
								Quizzes, and other competitive platforms.
							</p>
							<ul className="text-gray-600 list-disc pl-5 space-y-2 mb-4">
								<li>Classes are 50 minutes, one-on-one or group classes of 60 mins, and fully customized.</li>
								<li>
									We use a unique Pedagogy Chart after a child has given a Diagnostic test to design the right path for each student.
								</li>
								<li>
									Next step? Visit our website and complete the Admission Process form. We&apos;ll take it from there by understanding
									your needs and setting expectations.
								</li>
							</ul>
						</div>
						<motion.div className="md:w-1/3" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
							<Image src={Banner2} alt="Eduunique Card Image" width={1100} className="rounded-4xl shadow-md" priority />
						</motion.div>
					</motion.div>

					<motion.div
						className="flex flex-col md:flex-row rounded-xl space-y-4 md:space-y-0 md:space-x-6"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						viewport={{ once: true }}>
						<motion.div className="md:w-1/3" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
							<Image src={Banner3} alt="Eduunique Card Image" width={1100} priority className="rounded-4xl shadow-md" />
						</motion.div>
						<div className="md:w-2/3 px-4 md:px-12 flex flex-col justify-center">
							<h2 className="text-2xl font-bold mb-2">Non-Academic Programs</h2>
							<p className="text-gray-700 mb-4">
								From Art, Craft, Dance, Music, Pottery, and more, we offer creative programs tailored to your child&apos;s interests.
							</p>
							<ul className="text-gray-600 list-disc pl-5 space-y-2 mb-4">
								<li>Choose from one-on-one sessions or small group batches (5–8 students).</li>
								<li>Pricing ranges from ₹1500 to ₹2500, depending on course and batch size.</li>
								<li>A counsellor will guide you through the right program and pricing after your initial form submission.</li>
							</ul>
						</div>
					</motion.div>

					<motion.div
						className="flex flex-col md:flex-row rounded-xl space-y-4 md:space-y-0 md:space-x-6"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
						viewport={{ once: true }}>
						<div className="md:w-2/3 px-4 md:px-12 flex flex-col justify-center">
							<h2 className="text-2xl font-bold mb-2">Skill Development Programs</h2>
							<p className="text-gray-700 mb-4">We offer customized, individual-focused courses in:</p>
							<ul className="text-gray-600 list-disc pl-5 space-y-2 mb-2">
								<li>Personality Development</li>
								<li>Technology Programs</li>
								<li>Parent Coaching</li>
								<li>Life Skills Enhancement for Children</li>
							</ul>
							<ul className="text-gray-600 list-disc pl-5 space-y-2 mb-4">
								<li>After understanding your goals and expectations, we will share class details, curriculum, and pricing.</li>
								<li>Start by booking a counselling session and filling out the interest form.</li>
							</ul>
						</div>
						<motion.div className="md:w-1/3" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
							<Image src={Banner4} alt="Eduunique Card Image" width={1100} priority className="rounded-4xl shadow-md" />
						</motion.div>
					</motion.div>

					<motion.div
						className="flex flex-col md:flex-row rounded-xl space-y-4 md:space-y-0 md:space-x-6"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						viewport={{ once: true }}>
						<motion.div className="md:w-1/3" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
							<Image src={Banner5} alt="Eduunique Card Image" width={1100} priority className="rounded-4xl shadow-md" />
						</motion.div>
						<div className="md:w-2/3 px-4 md:px-12 flex flex-col justify-center">
							<h2 className="text-2xl font-bold mb-2">Brain Development Programs</h2>
							<p className="text-gray-700 mb-4">These programs are designed to boost:</p>
							<ul className="text-gray-600 list-disc pl-5 space-y-2 mb-2">
								<li>Memory</li>
								<li>Exam Performance</li>
								<li>Critical Thinking</li>
								<li>Logical Reasoning</li>
							</ul>
							<ul className="text-gray-600 list-disc pl-5 space-y-2 mb-4">
								<li>Courses start at ₹2999, and we offer demo sessions every weekend.</li>
								<li>A diagnostic + counselling session is required to customize your child&apos;s learning path.</li>
							</ul>
						</div>
					</motion.div>
				</div>
			</div>

			{/* Page 4 - Quality & Results */}
			<motion.div
				className="w-full flex flex-col md:flex-row gap-6 md:gap-3 px-6 md:px-[9%] items-center justify-between bg-cover bg-center bg-no-repeat"
				style={{
					minHeight: 'calc(100vh - 7.5rem)',
					backgroundImage: "url('/Background3.png')",
				}}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.8 }}
				viewport={{ once: true }}>
				<div className="relative z-10 pt-12 px-4 flex flex-col gap-6 items-center w-full h-full">
					<motion.h1
						className="text-2xl md:text-4xl text-center font-semibold text-black"
						initial={{ opacity: 0, y: -20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}>
						How We Ensure Quality & Guarantee Results!
					</motion.h1>

					{/* Image takes remaining space */}
					<motion.div
						className="flex-grow w-full flex justify-center items-center overflow-hidden"
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.2, duration: 0.6 }}
						viewport={{ once: true }}>
						<Image
							src={OverImage3}
							alt="Quality and Results Banner"
							className="w-full h-auto max-h-[70vh] object-contain"
							priority
						/>
					</motion.div>
				</div>
			</motion.div>

			{/* Page 5 - Features */}
			<div
				className="relative min-h-[calc(100vh-7.5rem)] w-full flex flex-col px-4 md:px-[7%] pt-8 pb-8 justify-start bg-cover bg-center bg-no-repeat"
				style={{
					backgroundImage: "url('/Background3.png')",
					backgroundBlendMode: 'difference',
					backgroundSize: 'calc',
				}}>
				{/* Father and child image */}
				<motion.div
					className="absolute left-0 bottom-0 z-10 hidden md:block"
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}>
					<Image
						src="/fatherChild.png"
						alt="Father and child playing"
						width={600}
						height={700}
						className="h-auto w-auto object-contain"
						priority
					/>
				</motion.div>

				{/* Header section */}
				<div className="w-full flex flex-col md:flex-row items-center justify-between mb-4 md:mb-6 z-20">
					<motion.h1
						className="text-4xl md:text-5xl font-bold text-black mb-3 md:mb-0"
						initial={{ opacity: 0, y: -20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}>
						Our Features
					</motion.h1>
					<ViewMoreButton />
				</div>

				{/* Features grid - no scroll, slight overflow allowed */}
				<motion.div
					className="md:ml-auto md:w-3/5 z-20 pr-2 pb-2"
					initial="hidden"
					whileInView="visible"
					variants={staggerContainer}
					viewport={{ once: true }}>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{featureCards.map(card => (
							<motion.div
								key={card.id}
								className={`${card.bgColor} rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300`}
								variants={fadeInUp}
								whileHover={{ y: -5, transition: { duration: 0.2 } }}>
								<div className="flex items-center mb-2">
									<motion.div
										className="bg-white p-1.5 rounded-lg mr-2"
										whileHover={{ rotate: 10, scale: 1.1 }}
										transition={{ duration: 0.2 }}>
										{card.icon}
									</motion.div>
									<h3 className="text-lg font-semibold">{card.title}</h3>
								</div>
								<ul className="list-disc pl-5 space-y-1 text-sm">
									{card.items.map((item, index) => (
										<li key={index}>{item}</li>
									))}
								</ul>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>

			{/* Page 6 - Quality & Results (Second) */}
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.8 }}
				className="w-screen flex flex-col md:flex-row gap-6 md:gap-3 px-6 md:px-[9%] items-center justify-between bg-cover bg-center bg-no-repeat"
				style={{
					minHeight: 'calc(100vh - 7.5rem)',
					backgroundImage: "url('/Background4.png')",
				}}>
				<div className="relative z-10 pt-12 px-4 flex flex-col gap-6 items-center w-full h-full">
					<motion.h1
						initial={{ y: -20, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.2, duration: 0.6 }}
						className="text-2xl md:text-4xl text-center font-semibold text-black">
						How We Ensure Quality & Guarantee Results!
					</motion.h1>

					{/* Image takes remaining space */}
					<motion.div
						initial={{ scale: 0.95, opacity: 0 }}
						whileInView={{ scale: 1, opacity: 1 }}
						transition={{ delay: 0.4, duration: 0.8 }}
						className="flex-grow w-full flex justify-center items-center overflow-hidden">
						<Image src={OverImage4} alt="Banner" className="w-full h-auto max-h-[70vh] object-contain" priority />
					</motion.div>
				</div>
			</motion.div>

			{/* page7 */}
			<div className="relative min-h-screen w-screen flex justify-around bg-gradient-to-r from-[#fcdecf] to-[#fdc1d7] pt-16">
				<div className="w-full max-w-5/7 p-4 pb-20">
					{cardData.map((card, index) => (
						<motion.div
							key={card.id}
							custom={index}
							variants={{
								hidden: { opacity: 0, y: 30 },
								visible: i => ({
									opacity: 1,
									y: 0,
									transition: {
										delay: i * 0.2,
										duration: 0.6,
									},
								}),
								hover: {
									y: -10,
									boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
									transition: { type: 'spring', stiffness: 400, damping: 10 },
								},
							}}
							initial="hidden"
							whileInView="visible"
							whileHover="hover"
							viewport={{ once: true, amount: 0.3 }}
							className="relative w-full rounded-3xl overflow-hidden shadow-lg mb-8 transition-all duration-300">
							{/* Background Image */}
							<div className="absolute inset-0 w-full h-full">
								<Image src={card.image} alt={`Card background ${index + 1}`} fill className="object-cover" priority />
								<div className="absolute inset-0 bg-black/30 transition-opacity duration-300 hover:bg-black/40"></div>
							</div>

							{/* Content */}
							<div className="relative z-10 p-8 md:p-12">
								<div className="max-w-4/7">
									<motion.h2
										initial={{ opacity: 0 }}
										whileInView={{ opacity: 1 }}
										transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
										className="text-3xl md:text-4xl font-bold text-white mb-4">
										{card.title}
									</motion.h2>
									<motion.p
										initial={{ opacity: 0 }}
										whileInView={{ opacity: 1 }}
										transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
										className="text-white text-base md:text-lg mb-8">
										{card.description}
									</motion.p>
									<div className="inline-block">
										<motion.button
											variants={{
												hover: {
													scale: 1.05,
													transition: {
														type: 'spring',
														stiffness: 400,
														damping: 10,
													},
												},
												tap: { scale: 0.95 },
											}}
											whileHover="hover"
											whileTap="tap"
											className="bg-[#ff4081] hover:bg-[#ff5a92] text-white font-medium py-3 px-6 rounded-full flex items-center cursor-pointer transition-all duration-300">
											{card.buttonText}
											<svg
												className="ml-2 w-5 h-5"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
												xmlns="http://www.w3.org/2000/svg">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
											</svg>
										</motion.button>
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
				{/* 7 footer */}
				<motion.div
					initial={{ y: 50, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.5, duration: 0.8 }}
					className="z-40 min-h-36 w-full absolute bottom-0 flex justify-center text-white">
					<div className="min-h-24 bg-[#3366ff] w-full max-w-5/7 p-4 rounded-2xl flex flex-col md:flex-row px-6 md:px-16 items-center justify-between relative top-18 shadow-xl">
						<div className="text-xl md:text-2xl">
							<h1 className="mb-4 text-center md:text-left">Not sure where to begin? Talk to an Expert</h1>
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="bg-[#f9326f] text-white px-4 py-2 text-sm rounded-lg hover:bg-[#ff1a5f] cursor-pointer flex items-center transition-all duration-300">
								View More <span className="ml-1">›</span>
							</motion.button>
						</div>
						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ delay: 0.8, duration: 0.6 }}
							className="mt-6 md:mt-0">
							<Image
								src="/fatherChild.png"
								alt="Expert consultation"
								width={180}
								height={120}
								priority
								className="object-contain"
							/>
						</motion.div>
					</div>
				</motion.div>
			</div>

			{/* page 8 */}
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.8 }}
				className="w-screen flex bg-white items-center justify-between bg-cover bg-center bg-no-repeat"
				style={{
					minHeight: 'calc(100vh - 7.5rem)',
				}}>
				<Testinomials />
			</motion.div>

			{/* page 9 */}
			<div
				className="w-screen relative flex flex-col px-4 sm:px-12 md:px-28 gap-12 py-16 bg-[#a4d9ff] items-center justify-between bg-cover bg-center bg-no-repeat pb-52"
				style={{
					minHeight: 'calc(100vh - 7.5rem)',
				}}>
				<div className="flex flex-col md:flex-row items-center justify-between w-full">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						variants={fadeInUp}
						custom={0}
						className="gap-4 text-black flex justify-between flex-col mb-6 md:mb-0">
						<h1 className="text-3xl md:text-5xl font-bold">From Our Blog</h1>
						<p className="w-full md:w-5/7 text-sm">
							Proin ac lobortis arcu, a vestibulum augue. Vivamus ipsum neque, mollis nec ante. Quisque aliquam dictum.
						</p>
					</motion.div>
					<motion.button
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						variants={fadeInUp}
						custom={1}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="bg-[#f9326f] text-nowrap text-white px-4 py-2 text-sm rounded-lg hover:bg-[#ff1a5f] cursor-pointer flex items-center transition-all duration-300">
						View More <span className="ml-1">›</span>
					</motion.button>
				</div>
				<div className="max-w-7xl mx-auto w-full">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{blogPosts.map((post, index) => (
							<motion.div
								key={post.id}
								initial="hidden"
								whileInView="visible"
								whileHover="hover"
								viewport={{ once: true, amount: 0.3 }}
								variants={{
									...fadeInUp,
									...cardHover,
								}}
								custom={index + 2}
								className="bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-300">
								{/* Card image with category overlays */}
								<div className="relative h-48">
									<Image
										src={post.image}
										alt={post.title}
										fill
										className="object-cover transition-transform duration-500 hover:scale-105"
										priority
									/>
									{post.categories && post.categories.length > 0 && (
										<div className="absolute top-4 left-4 flex flex-wrap gap-2">
											{post.categories.slice(0, 2).map((category, idx) => (
												<span key={idx} className="bg-[#3366ff] text-white text-xs px-2 py-1 rounded-full">
													{category}
												</span>
											))}
											{post.categories.length > 2 && (
												<span className="bg-[#f9326f] text-white text-xs px-2 py-1 rounded-full">+{post.categories.length - 2}</span>
											)}
										</div>
									)}
								</div>

								{/* Card content */}
								<div className="p-5 flex flex-col items-center">
									<h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 hover:text-[#3366ff] transition-colors duration-300">
										{post.title}
									</h3>
									<p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.description}</p>

									{/* Author and date */}
									<div className="flex items-center justify-between w-full mb-4">
										<div className="flex items-center">
											<div className="w-8 h-8 rounded-full overflow-hidden mr-2">
												<Image src={post.authorImage} alt={post.author} width={32} height={32} className="object-cover" priority />
											</div>
											<span className="text-sm text-gray-700">{post.author}</span>
										</div>

										<div className="flex items-center text-sm text-gray-500">
											<Clock className="w-4 h-4 mr-1" />
											<span>{post.date}</span>
										</div>
									</div>

									{/* Read more button */}
									<motion.button
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										className="bg-[#3366ff] text-white px-4 py-2 text-sm rounded-lg hover:bg-[#0040ff] cursor-pointer flex items-center transition-all duration-300">
										Read More
									</motion.button>
								</div>
							</motion.div>
						))}
					</div>
				</div>
				<motion.div
					initial={{ y: 100, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.5, duration: 0.8 }}
					className="z-40 min-h-80 w-full absolute bottom-0 flex justify-center text-white">
					<div className="min-h-24 bg-[#f9346d] w-full max-w-5/7 p-4 rounded-2xl flex px-16 items-center justify-between relative top-40 overflow-hidden shadow-xl">
						{/* Left side with arrow graphic */}
						<motion.div
							initial={{ x: -50, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{ delay: 0.7, duration: 0.6 }}
							className="absolute bottom-8 left-8 hidden md:block">
							<svg width="60" height="50" viewBox="0 0 60 50" fill="none" xmlns="http://www.w3.org/2000/svg">
								<motion.path
									initial={{ pathLength: 0 }}
									whileInView={{ pathLength: 1 }}
									transition={{ delay: 1, duration: 1 }}
									d="M5 30C25 15 40 35 58 25"
									stroke="#FF8A65"
									strokeWidth="4"
									strokeLinecap="round"
								/>
								<motion.path
									initial={{ pathLength: 0 }}
									whileInView={{ pathLength: 1 }}
									transition={{ delay: 1.2, duration: 0.6 }}
									d="M5 30L15 25"
									stroke="#FF8A65"
									strokeWidth="4"
									strokeLinecap="round"
								/>
								<motion.path
									initial={{ pathLength: 0 }}
									whileInView={{ pathLength: 1 }}
									transition={{ delay: 1.4, duration: 0.6 }}
									d="M5 30L13 38"
									stroke="#FF8A65"
									strokeWidth="4"
									strokeLinecap="round"
								/>
							</svg>
						</motion.div>

						{/* Central content */}
						<div className="flex flex-col items-center justify-center w-full">
							<motion.h2
								initial={{ y: -20, opacity: 0 }}
								whileInView={{ y: 0, opacity: 1 }}
								transition={{ delay: 0.8, duration: 0.6 }}
								className="text-2xl md:text-4xl font-bold mb-2 text-center">
								Subscribe to our newsletter
							</motion.h2>
							<motion.p
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ delay: 0.9, duration: 0.6 }}
								className="text-center mb-8 md:mb-12">
								Lorem ipsum is simply dummy text of the printing.
							</motion.p>

							{/* Email input and button */}
							<motion.div
								initial={{ scale: 0.9, opacity: 0 }}
								whileInView={{ scale: 1, opacity: 1 }}
								transition={{ delay: 1, duration: 0.6 }}
								className="flex w-full max-w-md rounded-full p-1 overflow-hidden bg-white shadow-lg">
								<input type="email" placeholder="Email Address" className="flex-grow py-3 px-6 text-gray-800 outline-none" />
								<motion.button
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="bg-[#FFCC00] font-bold text-white rounded-full py-3 px-8 transition-all duration-300 hover:bg-[#262623] cursor-pointer">
									Send
								</motion.button>
							</motion.div>
						</div>

						{/* Right side with light bulb */}
						<motion.div
							initial={{ x: 50, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{ delay: 0.7, duration: 0.6 }}
							className="absolute bottom-8 right-8 hidden md:block">
							<motion.svg
								width="50"
								height="50"
								viewBox="0 0 50 50"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								animate={{ rotate: [0, 5, -5, 0] }}
								transition={{ repeat: Infinity, duration: 3 }}>
								<circle cx="25" cy="25" r="20" fill="#FFCC00" />
								<circle cx="25" cy="25" r="12" fill="#FFD54F" />
								{/* Light rays */}
								<motion.path
									initial={{ opacity: 0 }}
									animate={{ opacity: [0, 1, 0] }}
									transition={{ repeat: Infinity, duration: 1.5, delay: 0 }}
									d="M45 25H50"
									stroke="white"
									strokeWidth="2"
									strokeLinecap="round"
								/>
								<motion.path
									initial={{ opacity: 0 }}
									animate={{ opacity: [0, 1, 0] }}
									transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}
									d="M0 25H5"
									stroke="white"
									strokeWidth="2"
									strokeLinecap="round"
								/>
								<motion.path
									initial={{ opacity: 0 }}
									animate={{ opacity: [0, 1, 0] }}
									transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }}
									d="M25 45V50"
									stroke="white"
									strokeWidth="2"
									strokeLinecap="round"
								/>
								<motion.path
									initial={{ opacity: 0 }}
									animate={{ opacity: [0, 1, 0] }}
									transition={{ repeat: Infinity, duration: 1.5, delay: 0.6 }}
									d="M25 0V5"
									stroke="white"
									strokeWidth="2"
									strokeLinecap="round"
								/>
								<motion.path
									initial={{ opacity: 0 }}
									animate={{ opacity: [0, 1, 0] }}
									transition={{ repeat: Infinity, duration: 1.5, delay: 0.8 }}
									d="M38 38L42 42"
									stroke="white"
									strokeWidth="2"
									strokeLinecap="round"
								/>
								<motion.path
									initial={{ opacity: 0 }}
									animate={{ opacity: [0, 1, 0] }}
									transition={{ repeat: Infinity, duration: 1.5, delay: 1 }}
									d="M8 8L12 12"
									stroke="white"
									strokeWidth="2"
									strokeLinecap="round"
								/>
								<motion.path
									initial={{ opacity: 0 }}
									animate={{ opacity: [0, 1, 0] }}
									transition={{ repeat: Infinity, duration: 1.5, delay: 1.2 }}
									d="M38 12L42 8"
									stroke="white"
									strokeWidth="2"
									strokeLinecap="round"
								/>
								<motion.path
									initial={{ opacity: 0 }}
									animate={{ opacity: [0, 1, 0] }}
									transition={{ repeat: Infinity, duration: 1.5, delay: 1.4 }}
									d="M8 42L12 38"
									stroke="white"
									strokeWidth="2"
									strokeLinecap="round"
								/>
							</motion.svg>
						</motion.div>

						{/* Decorative circles */}
						<div className="absolute top-0 right-0 -mr-4 -mt-4">
							<motion.svg
								initial={{ scale: 0, opacity: 0 }}
								whileInView={{ scale: 1, opacity: 1 }}
								transition={{ delay: 1.2, duration: 0.8 }}
								width="100"
								height="100"
								viewBox="0 0 100 100"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<motion.circle
									initial={{ pathLength: 0 }}
									whileInView={{ pathLength: 1 }}
									transition={{ delay: 1.4, duration: 1.5 }}
									cx="80"
									cy="20"
									r="40"
									stroke="white"
									strokeWidth="1"
									strokeOpacity="0.5"
									fill="none"
								/>
								<motion.circle
									initial={{ pathLength: 0 }}
									whileInView={{ pathLength: 1 }}
									transition={{ delay: 1.6, duration: 1.8 }}
									cx="80"
									cy="20"
									r="60"
									stroke="white"
									strokeWidth="1"
									strokeOpacity="0.3"
									fill="none"
								/>
							</motion.svg>
						</div>

						<div className="absolute top-0 left-0 -ml-4 -mt-4">
							<motion.svg
								initial={{ scale: 0, opacity: 0 }}
								whileInView={{ scale: 1, opacity: 1 }}
								transition={{ delay: 1.2, duration: 0.8 }}
								width="100"
								height="100"
								viewBox="0 0 100 100"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<motion.circle
									initial={{ pathLength: 0 }}
									whileInView={{ pathLength: 1 }}
									transition={{ delay: 1.4, duration: 1.5 }}
									cx="20"
									cy="20"
									r="40"
									stroke="white"
									strokeWidth="1"
									strokeOpacity="0.5"
									fill="none"
								/>
								<motion.circle
									initial={{ pathLength: 0 }}
									whileInView={{ pathLength: 1 }}
									transition={{ delay: 1.6, duration: 1.8 }}
									cx="20"
									cy="20"
									r="60"
									stroke="white"
									strokeWidth="1"
									strokeOpacity="0.3"
									fill="none"
								/>
							</motion.svg>
						</div>
					</div>
				</motion.div>
			</div>

			{/* page 10 */}
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.3 }}
				className="w-screen flex flex-col bg-[#3466ff] pt-28 md:pt-40 items-center justify-between bg-cover bg-center bg-no-repeat"
				style={{
					minHeight: 'calc(100vh - 7.5rem)',
				}}>
				<footer className="text-white w-full px-6 md:px-28">
					<div className="container mx-auto py-8 md:py-12">
						<motion.div variants={staggerChildren} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
							{/* Logo and Description Column */}
							<motion.div variants={fadeInUp} className="md:col-span-1">
								<motion.div
									whileHover={{ scale: 1.03 }}
									transition={{ type: 'spring', stiffness: 400, damping: 10 }}
									className="h-[40px] w-auto object-contain mb-4">
									<Image src={mainLogo} alt="EduNique Logo" className="h-full w-auto object-contain" priority />
								</motion.div>
								<motion.p variants={fadeInUp} className="text-sm mb-6 text-white/90">
									Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry&apos;s
									standard dummy a type specimen book.
								</motion.p>
								<motion.div variants={staggerChildren} className="flex space-x-3">
									{/* Social Media Icons */}
									{[
										{
											bg: 'bg-white',
											icon: 'facebook',
											color: 'text-blue-600',
										},
										{
											bg: 'bg-gradient-to-r from-purple-500 to-pink-500',
											icon: 'instagram',
											color: 'text-white',
										},
										{
											bg: 'bg-[#00AFF0]',
											icon: 'twitter',
											color: 'text-white',
										},
										{ bg: 'bg-black', icon: 'tiktok', color: 'text-white' },
										{ bg: 'bg-red-600', icon: 'youtube', color: 'text-white' },
									].map((social, index) => (
										<motion.a
											key={index}
											href="#"
											initial="initial"
											whileHover="hover"
											variants={socialIconHover}
											className={`${social.bg} rounded-full p-1.5 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow`}>
											<SocialIcon type={social.icon} className={`w-4 h-4 ${social.color}`} />
										</motion.a>
									))}
								</motion.div>
							</motion.div>

							{/* Company Column */}
							<motion.div variants={fadeInUp} className="ml-0 md:ml-8 md:col-span-1">
								<motion.h3 variants={fadeInUp} className="text-xl font-medium mb-4 relative pl-0">
									<span className="relative">
										Company
										<motion.span
											className="absolute bottom-[-5px] left-0 h-[2px] bg-white/60 w-12"
											initial={{ width: 0 }}
											animate={{ width: '2rem' }}
											transition={{ delay: 0.5, duration: 0.5 }}
										/>
									</span>
								</motion.h3>
								<motion.ul variants={staggerChildren} className="space-y-3">
									{['About Us', 'Blogs', 'Courses', 'DMIT Test', 'Become a Future School', 'Subscription Plan'].map((item, index) => (
										<motion.li key={index} variants={fadeInUp}>
											<motion.a
												href="#"
												initial="initial"
												whileHover="hover"
												variants={linkHover}
												className="hover:underline flex items-center group transition-all duration-300">
												<span className="text-white/80 mr-2 group-hover:text-white">•</span> {item}
											</motion.a>
										</motion.li>
									))}
								</motion.ul>
							</motion.div>

							{/* Support Column */}
							<motion.div variants={fadeInUp} className="md:col-span-1">
								<motion.h3 variants={fadeInUp} className="text-xl font-medium mb-4 relative pl-0">
									<span className="relative">
										Support
										<motion.span
											className="absolute bottom-[-5px] left-0 h-[2px] bg-white/60 w-12"
											initial={{ width: 0 }}
											animate={{ width: '2rem' }}
											transition={{ delay: 0.7, duration: 0.5 }}
										/>
									</span>
								</motion.h3>
								<motion.ul variants={staggerChildren} className="space-y-3">
									{['FAQ', 'Privacy', 'Terms and Conditions', 'Contact'].map((item, index) => (
										<motion.li key={index} variants={fadeInUp}>
											<motion.a
												href="#"
												initial="initial"
												whileHover="hover"
												variants={linkHover}
												className="hover:underline flex items-center group transition-all duration-300">
												<span className="text-white/80 mr-2 group-hover:text-white">•</span> {item}
											</motion.a>
										</motion.li>
									))}
								</motion.ul>
							</motion.div>

							{/* Contact Info Column */}
							<motion.div variants={fadeInUp} className="md:col-span-1">
								<motion.h3 variants={fadeInUp} className="text-xl font-medium mb-4 relative pl-0">
									<span className="relative">
										Contact Info
										<motion.span
											className="absolute bottom-[-5px] left-0 h-[2px] bg-white/60 w-12"
											initial={{ width: 0 }}
											animate={{ width: '2rem' }}
											transition={{ delay: 0.9, duration: 0.5 }}
										/>
									</span>
								</motion.h3>
								<motion.div variants={fadeInUp} className="mb-4">
									<motion.div
										whileHover={{ scale: 1.02 }}
										transition={{ type: 'spring', stiffness: 300, damping: 10 }}
										className="overflow-hidden rounded-lg mb-2">
										<Image
											src={mapImage}
											alt="Location Map"
											priority
											className="w-full rounded-lg transform transition-transform duration-500 hover:scale-110"
										/>
									</motion.div>
									<motion.p variants={fadeInUp} className="text-sm text-white/90">
										Eldeco Centre, Malviya Nagar WeWork Eldeco Centre, Malviya Nagar Eldeco Centre, Block A, Shivalik Colony, Malviya
										Nagar, Delhi, DL 110017
									</motion.p>
								</motion.div>
								<motion.div variants={staggerChildren} className="space-y-2 text-sm">
									{[
										{ label: 'Phone:', value: '(+91) 922-044-2129' },
										{
											label: 'Email for Queries or Info:',
											value: 'info@edunique.in',
										},
										{
											label: 'Email for Support or Concerns:',
											value: 'support@us.edunique.in',
										},
										{
											label: 'Email for Careers:',
											value: 'joinus@edunique.in',
										},
									].map((item, index) => (
										<motion.p key={index} variants={fadeInUp} className="flex flex-wrap items-start">
											<strong className="mr-2">{item.label}</strong>
											<motion.span whileHover={{ color: '#f9326f' }} className="text-white/90 hover:underline cursor-pointer">
												{item.value}
											</motion.span>
										</motion.p>
									))}
								</motion.div>
							</motion.div>
						</motion.div>
					</div>
				</footer>

				{/* Copyright Bar */}
				<motion.div variants={fadeInUp} className="border-t w-full text-white border-blue-400">
					<div className="container mx-auto px-4 py-4 text-center">
						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 1.2, duration: 0.5 }}
							className="text-white/80 hover:text-white transition-colors duration-300">
							© EDUNIQUE All Right Reserved, 2022-2025
						</motion.p>
					</div>
				</motion.div>
			</motion.div>
		</main>
	)
}
