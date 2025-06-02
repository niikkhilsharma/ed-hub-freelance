'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function SchoolCodePage() {
	const [schoolCode, setSchoolCode] = useState<string>('')

	const COLORS = {
		primaryBlue: '#5269f8', // Main background blue and selection indicator blue
		primaryPink: '#ff3a81', // Left section background pink
		lightPink: '#ffe5ed', // Right section background light pink
		yellowAccent: '#ffd23e', // Yellow curve accent
		textDark: '#333333', // Dark text (for headings)
		textLight: '#777777', // Light text (for descriptions)
		inputBorder: '#e5e7eb', // Gray-200
		inputText: '#555555', // Medium text for input
	}

	return (
		// Main container with full-screen height and blue patterned background
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
				className="bg-white shadow-xl overflow-hidden flex flex-col md:flex-row w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl"
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
					<div className="relative z-10 mb-auto pt-4 md:pt-0">
						<h1 className="text-2xl font-bold mb-3">Become a Future School</h1>
						<p className="text-sm opacity-90 max-w-md leading-relaxed">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry.
						</p>
					</div>

					{/* Yellow Curve Background */}
					<div className="absolute bottom-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
						<div
							className="absolute rounded-full"
							style={{
								backgroundColor: COLORS.yellowAccent,
								width: '175%',
								height: '200%',
								bottom: '-150%',
								left: '30%',
							}}></div>
					</div>

					{/* Main Image */}
					<div className="relative z-10 mt-auto flex justify-center items-end h-full">
						<Image
							src="/images/teacher-student-main.png"
							alt="Teacher helping student"
							width={500}
							height={400}
							className="w-full max-w-md h-auto object-contain drop-shadow-xl"
						/>
					</div>
				</div>

				{/* Right Section - Light Pink School Code Entry */}
				<div className="w-full md:w-1/2 p-8 lg:p-12 flex flex-col" style={{ backgroundColor: COLORS.lightPink }}>
					<h2 className="text-2xl font-semibold mb-2" style={{ color: COLORS.textDark }}>
						School Code
					</h2>
					<p className="text-sm mb-6 leading-relaxed" style={{ color: COLORS.textLight }}>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry.
					</p>

					<label htmlFor="uniqueSchoolCode" className="text-base font-medium mb-2 block" style={{ color: COLORS.textDark }}>
						Unique School Code
					</label>
					<input
						id="uniqueSchoolCode"
						type="text"
						placeholder="Enter Unique School Code"
						value={schoolCode}
						onChange={e => setSchoolCode(e.target.value)}
						className="w-full py-3 px-4 border bg-white placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition"
						style={{
							borderColor: COLORS.inputBorder,
							borderRadius: '9999px', // pill-shaped
							color: COLORS.inputText,
						}}
					/>

					<button
						onClick={() => console.log('Next with code:', schoolCode)}
						className="w-full mt-8 font-medium py-3 px-4 focus:outline-none focus:ring-2 focus:ring-offset-2 transition"
						style={{
							backgroundColor: COLORS.primaryBlue,
							color: '#ffffff',
							borderRadius: '9999px', // pill-shaped
						}}>
						Next
					</button>
				</div>
			</div>
		</div>
	)
}
