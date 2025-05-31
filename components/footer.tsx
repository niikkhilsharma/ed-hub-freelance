'use client'
import mapImage from '@/public/mapImage.png'
import wave from '@/public/wave.png'
import Image from 'next/image'

import mainLogo from '@/public/mianLogo2.png'
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok, FaYoutube } from 'react-icons/fa'

import { motion } from 'framer-motion'
import { JSX } from 'react'

export default function Footer() {
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
	const fadeInUp = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	}

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const linkHover = {
    hover: {
      x: 5,
      color: "#fff",
      transition: { duration: 0.2 },
    },
  };
  const socialIconHover = {
    hover: {
      y: -5,
      scale: 1.1,
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="w-screen relative flex flex-col bg-[#3466ff] items-center justify-between bg-cover bg-center bg-no-repeat"
    >
		<Image src={wave} alt="wave" className="h-fit absolute -top-15 z-20 w-screen object-contain" priority />
		
      <div className="z-40 min-h-80 w-full absolute top-0 translate-y-[-100%] flex justify-center text-white">
        <div className="min-h-24 max-w-6xl bg-[#f9346d] w-full p-4 rounded-2xl flex px-16 items-center justify-between relative top-40 overflow-hidden shadow-xl">
          {/* Left side with arrow graphic */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="absolute bottom-8 left-8 hidden md:block"
          >
            <svg
              width="60"
              height="50"
              viewBox="0 0 60 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
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
							transition={{ delay: 1.2, duration: 0.3 }}
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
			</div>
			<footer className="text-white pt-28 md:pt-40 w-full px-6 md:px-28">
				<div className="container mx-auto py-8">
					<motion.div variants={staggerChildren} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ">
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
											className="hover:underline flex items-center group transition-all duration-300 text-sm text-white/90">
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
											className="hover:underline flex items-center group transition-all duration-300 text-sm text-white/90">
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
										<motion.span whileHover={{ color: '#f9326f' }} className="text-[#8FDDAA] hover:underline cursor-pointer">
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
	)
}
