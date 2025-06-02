'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function StudentInfoPage() {
	const [formData, setFormData] = useState({
		name: '',
		className: '',
		dob: '',
		guardianName: '',
		email: '',
		mobile: '',
		country: '',
		state: '',
		city: '',
	})

	const COLORS = {
		primaryBlue: '#5269f8', // Page‐background blue
		lightGray: '#f9fafb', // Right‐panel gray behind pattern
		textDark: '#333333', // Labels/headings
		textMedium: '#555555', // Input text
		inputBorder: '#e5e7eb', // Gray‐200 for inputs
	}

	function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
	}

	function handleSubmit() {
		console.log('Submitted data:', formData)
		// …whatever submit logic you need
	}

	return (
		<div
			className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8"
			style={{
				backgroundColor: COLORS.primaryBlue,
				backgroundImage: 'url(/images/background.jpg)', // your blue‐pattern SVG/jpg
				backgroundRepeat: 'repeat',
				backgroundSize: 'auto',
			}}>
			{/* Parent flex container: transparent, with a gap so you see the blue behind it */}
			<div className="flex flex-col md:flex-row w-full sm:gap-8 md:gap-14">
				{/* ─── Left Panel: the white “form” box ─── */}
				<div
					className="w-full md:w-[40%] p-6 lg:p-8 overflow-y-auto shadow-xl rounded-4xl"
					style={{
						backgroundColor: '#ffffff',
					}}>
					{/* Name */}
					<div className="mb-6">
						<label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: COLORS.textDark }}>
							Name
						</label>
						<input
							id="name"
							name="name"
							type="text"
							placeholder="Enter Name"
							value={formData.name}
							onChange={handleChange}
							className="
                w-full py-3 px-4
                border bg-gray-100/60 focus-within:bg-white placeholder:text-gray-400
                text-sm focus:outline-none focus:ring-2 focus:ring-offset-2
                transition
              "
							style={{
								borderColor: COLORS.inputBorder,
								borderRadius: '1.5rem', // 24px pill
								color: COLORS.textMedium,
							}}
						/>
					</div>

					{/* Class */}
					<div className="mb-6">
						<label htmlFor="className" className="block text-sm font-medium mb-2" style={{ color: COLORS.textDark }}>
							Class
						</label>
						<input
							id="className"
							name="className"
							type="text"
							placeholder="Enter Class"
							value={formData.className}
							onChange={handleChange}
							className="
                w-full py-3 px-4
                border bg-gray-100/60 focus-within:bg-white placeholder:text-gray-400
                text-sm focus:outline-none focus:ring-2 focus:ring-offset-2
                transition
              "
							style={{
								borderColor: COLORS.inputBorder,
								borderRadius: '1.5rem',
								color: COLORS.textMedium,
							}}
						/>
					</div>

					{/* Date of Birth */}
					<div className="mb-6">
						<label htmlFor="dob" className="block text-sm font-medium mb-2" style={{ color: COLORS.textDark }}>
							Date of Birth
						</label>
						<input
							id="dob"
							name="dob"
							type="text"
							placeholder="DD/MM/YY"
							value={formData.dob}
							onChange={handleChange}
							className="
                w-full py-3 px-4
                border bg-gray-100/60 focus-within:bg-white placeholder:text-gray-400
                text-sm focus:outline-none focus:ring-2 focus:ring-offset-2
                transition
              "
							style={{
								borderColor: COLORS.inputBorder,
								borderRadius: '1.5rem',
								color: COLORS.textMedium,
							}}
						/>
					</div>

					{/* Parent / Guardian Name */}
					<div className="mb-6">
						<label htmlFor="guardianName" className="block text-sm font-medium mb-2" style={{ color: COLORS.textDark }}>
							Parent / Guardian Name
						</label>
						<input
							id="guardianName"
							name="guardianName"
							type="text"
							placeholder="Enter Parent / Guardian Name"
							value={formData.guardianName}
							onChange={handleChange}
							className="
                w-full py-3 px-4
                border bg-gray-100/60 focus-within:bg-white placeholder:text-gray-400
                text-sm focus:outline-none focus:ring-2 focus:ring-offset-2
                transition
              "
							style={{
								borderColor: COLORS.inputBorder,
								borderRadius: '1.5rem',
								color: COLORS.textMedium,
							}}
						/>
					</div>

					{/* Email ID */}
					<div className="mb-6">
						<label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: COLORS.textDark }}>
							Email ID
						</label>
						<input
							id="email"
							name="email"
							type="email"
							placeholder="Enter Email ID"
							value={formData.email}
							onChange={handleChange}
							className="
                w-full py-3 px-4
                border bg-gray-100/60 focus-within:bg-white placeholder:text-gray-400
                text-sm focus:outline-none focus:ring-2 focus:ring-offset-2
                transition
              "
							style={{
								borderColor: COLORS.inputBorder,
								borderRadius: '1.5rem',
								color: COLORS.textMedium,
							}}
						/>
					</div>

					{/* Mobile Number */}
					<div className="mb-6">
						<label htmlFor="mobile" className="block text-sm font-medium mb-2" style={{ color: COLORS.textDark }}>
							Mobile Number
						</label>
						<input
							id="mobile"
							name="mobile"
							type="tel"
							placeholder="+91 1234567890"
							value={formData.mobile}
							onChange={handleChange}
							className="
                w-full py-3 px-4
                border bg-gray-100/60 focus-within:bg-white placeholder:text-gray-400
                text-sm focus:outline-none focus:ring-2 focus:ring-offset-2
                transition
              "
							style={{
								borderColor: COLORS.inputBorder,
								borderRadius: '1.5rem',
								color: COLORS.textMedium,
							}}
						/>
					</div>

					{/* Country */}
					<div className="mb-6">
						<label htmlFor="country" className="block text-sm font-medium mb-2" style={{ color: COLORS.textDark }}>
							Country
						</label>
						<select
							id="country"
							name="country"
							value={formData.country}
							onChange={handleChange}
							className="
                w-full py-3 px-4
                border bg-gray-100/60 focus-within:bg-white text-sm focus:outline-none focus:ring-2 focus:ring-offset-2
                transition
              "
							style={{
								borderColor: COLORS.inputBorder,
								borderRadius: '1.5rem',
								color: COLORS.textMedium,
							}}>
							<option value="" disabled>
								Select Country
							</option>
							<option value="option1">Option 1</option>
							<option value="option2">Option 2</option>
							<option value="option3">Option 3</option>
						</select>
					</div>

					{/* State */}
					<div className="mb-6">
						<label htmlFor="state" className="block text-sm font-medium mb-2" style={{ color: COLORS.textDark }}>
							State
						</label>
						<select
							id="state"
							name="state"
							value={formData.state}
							onChange={handleChange}
							className="
                w-full py-3 px-4
                border bg-gray-100/60 focus-within:bg-white text-sm focus:outline-none focus:ring-2 focus:ring-offset-2
                transition
              "
							style={{
								borderColor: COLORS.inputBorder,
								borderRadius: '1.5rem',
								color: COLORS.textMedium,
							}}>
							<option value="" disabled>
								Select State
							</option>
							<option value="option1">Option 1</option>
							<option value="option2">Option 2</option>
							<option value="option3">Option 3</option>
						</select>
					</div>

					{/* City */}
					<div className="mb-8">
						<label htmlFor="city" className="block text-sm font-medium mb-2" style={{ color: COLORS.textDark }}>
							City
						</label>
						<select
							id="city"
							name="city"
							value={formData.city}
							onChange={handleChange}
							className="
                w-full py-3 px-4
                border bg-gray-100/60 focus-within:bg-white text-sm focus:outline-none focus:ring-2 focus:ring-offset-2
                transition
              "
							style={{
								borderColor: COLORS.inputBorder,
								borderRadius: '1.5rem',
								color: COLORS.textMedium,
							}}>
							<option value="" disabled>
								Select City
							</option>
							<option value="option1">Option 1</option>
							<option value="option2">Option 2</option>
							<option value="option3">Option 3</option>
						</select>
					</div>

					{/* Submit Button */}
					<button
						onClick={handleSubmit}
						className="w-full text-white font-medium py-3 px-4 focus:outline-none focus:ring-2 focus:ring-offset-2 transition rounded-full"
						style={{
							backgroundColor: COLORS.primaryBlue,
						}}>
						Submit
					</button>
				</div>

				{/* ─── Right Panel: the gray “image” box ─── */}
				<div className="w-full md:w-[60%] relative overflow-hidden">
					<Image width={900} height={1158} src="/images/registar_pattern.svg" alt="background" />
					<div className="absolute bottom-0 right-0 w-full h-full flex justify-center items-end pointer-events-none">
						<Image
							src="/images/Girl_writing.png"
							alt="Child writing"
							width={500}
							height={500}
							className="w-full max-w-lg h-auto object-contain drop-shadow-xl"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
