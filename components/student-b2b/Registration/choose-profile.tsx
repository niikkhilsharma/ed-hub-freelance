'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FiCheck } from 'react-icons/fi'

const profiles = [
	{ id: 'student', label: 'Student / Parents', iconSrc: '/images/profile-student-smiley.svg' },
	{ id: 'teacher', label: 'Teacher', iconSrc: '/images/profile-teacher-pen.svg' },
	{ id: 'principal', label: 'Principal', iconSrc: '/images/profile-principal-star.svg' },
]

export default function ChooseProfilePage() {
	const [selectedProfile, setSelectedProfile] = useState<string>(profiles[0].id)

	const COLORS = {
		primaryBlue: '#5269f8', // Main background blue and selection indicator blue
		primaryPink: '#ff3a81', // Left section background pink
		lightPink: '#ffe5ed', // Right section background light pink
		yellowAccent: '#ffd23e', // Yellow curve accent
		textDark: '#333333', // Dark text (for "Choose Profile" title)
		textMedium: '#555555', // Medium text (for profile labels)
		textLight: '#777777', // Light text (for Lorem Ipsum descriptions)
	}

	return (
		// Main container with full screen height and custom blue patterned background
		<div
			className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8"
			style={{
				backgroundColor: COLORS.primaryBlue,
				backgroundImage: 'url(/images/background.jpg)',
				backgroundRepeat: 'repeat',
				backgroundSize: 'auto',
			}}>
			{/* Central content card with large rounded corners and shadow */}
			<div
				className="bg-white shadow-xl overflow-hidden flex flex-col md:flex-row w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl h-[65dvh]"
				style={{ borderRadius: '2rem' }} // 32px corner radius
			>
				{/* Left Section - Pink with Grid and Image */}
				<div
					className="w-full md:w-1/2 relative text-white p-8 lg:p-12 flex flex-col justify-between min-h-[450px] md:min-h-0"
					style={{ backgroundColor: COLORS.primaryPink }}>
					{/* Grid Overlay */}
					<div
						className="absolute inset-0 opacity-20"
						style={{
							backgroundImage: 'url(/images/grid.png)',
							backgroundRepeat: 'repeat',
							backgroundSize: '20px 20px',
						}}></div>

					{/* Text Content */}
					<div className="z-10 mb-auto pt-4 md:pt-0">
						<h1 className="text-2xl font-bold mb-2">Become a Future School</h1>
						<p className="text-sm opacity-90 max-w-[40ch] leading-relaxed">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry.
						</p>
					</div>

					{/* Yellow Curve Background */}
					<div className="absolute bottom-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
						<div
							className="absolute rounded-full"
							style={{
								backgroundColor: COLORS.yellowAccent,
								width: '80%',
								height: '195%',
								bottom: '-150%',
								left: '12%',
							}}></div>
						<Image
							src="/images/teacher-student-main.png"
							alt="Teacher helping student"
							width={500}
							height={400}
							className="w-full max-w-md h-auto object-contain drop-shadow-xl absolute bottom-0 -translate-x-1/2 left-1/2"
						/>
					</div>

					{/* Main Image */}
					<div className="relative z-10 mt-auto flex justify-center items-end h-full"></div>
				</div>

				{/* Right Section - Light Pink Profile Choice */}
				<div className="w-full md:w-1/2 p-8 lg:p-12 flex flex-col" style={{ backgroundColor: COLORS.lightPink }}>
					<h2 className="text-xl font-semibold">Choose Profile</h2>
					<p className="text-sm mb-8 leading-normal">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry.
					</p>

					{/* Profile selection boxes */}
					<div className="space-y-4 my-8">
						{profiles.map(profile => (
							<div
								key={profile.id}
								onClick={() => setSelectedProfile(profile.id)}
								className={`flex items-center justify-between px-2 py-2 border cursor-pointer transition-all duration-150 bg-white shadow-sm hover:shadow-md rounded-full ${
									selectedProfile === profile.id ? 'ring-1' : 'border-gray-200 hover:border-gray-300'
								}`}
								style={{
									borderColor: selectedProfile === profile.id ? COLORS.primaryBlue : undefined,
								}}>
								<div className="flex items-center gap-3">
									<Image src={profile.iconSrc} alt={`${profile.label} icon`} width={32} height={32} className="object-contain" />
									<span className="text-sm font-medium" style={{ color: COLORS.textMedium }}>
										{profile.label}
									</span>
								</div>
								{/* Selected checkmark */}
								<div
									className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors ${
										selectedProfile === profile.id ? '' : 'border-gray-300 bg-white'
									}`}
									style={
										selectedProfile === profile.id
											? {
													backgroundColor: COLORS.primaryBlue,
													borderColor: COLORS.primaryBlue,
											  }
											: {}
									}>
									{selectedProfile === profile.id && <FiCheck className="w-5 h-5 text-white" />}
								</div>
							</div>
						))}
					</div>

					{/* Next Button */}
					<button
						onClick={() => console.log('Next with profile:', selectedProfile)}
						className="w-full text-white font-medium py-3 px-4 rounded-lg hover:brightness-90 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors mt-auto"
						style={{ backgroundColor: COLORS.primaryBlue }}>
						Next
					</button>
				</div>
			</div>
		</div>
	)
}
