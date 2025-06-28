'use client'

import { useState } from 'react'
import Image from 'next/image'
import Header from '@/components/layout/Header' // Assuming Header is in this path
import Footer from '@/components/layout/Footer' // Assuming Footer is in this path
import { FiArrowLeft, FiEdit2 } from 'react-icons/fi' // Edit icon
import { Button } from '../ui/button'
import Newsletter from '../common-components/Newsletter'
// import MaxWidthWrapper from '../max-width-wrapper'

// Helper Input Component
const FormInput = ({
	label,
	id,
	placeholder,
	type = 'text',
	value,
	onChange,
}: {
	label: string
	id: string
	placeholder: string
	type?: string
	value: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) => (
	<div className="w-full">
		<label htmlFor={id} className="block text-sm font-medium sm:text-lg text-black mb-2">
			{label}
		</label>
		<input
			type={type}
			id={id}
			name={id}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			className="w-full px-4 py-3 bg-[#F9FAFB] border border-[#D5D5D5]  rounded-3xl text-sm  text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white"
		/>
	</div>
)

export default function EditStudentProfilePage() {
	const [formData, setFormData] = useState({
		name: '',
		emailAddress: '',
		contactNumber: '',
		gender: '',
		dob: '',
		country: '',
		city: '',
		state: '',
		pinCode: '',
	})

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const handleProfileSave = (e: React.FormEvent) => {
		e.preventDefault()
		console.log('Profile Data Saved:', formData)
		// API call to save profile data
	}


	// Sample user data for the Header
	const headerUser = {
		name: formData.name,
		role: 'Teacher',
		avatarSrc: '/teacher-b2b/profile.png', // UPDATE PATH
	}

	return (
		<>
			<Header user={headerUser} />
			<div className="bg-gray-100 min-h-screen flex flex-col">
				<main className="flex-grow container mx-auto p-4 sm:p-6">
					<div className="bg-white rounded-2xl p-6  md:p-8">
						{/* Profile Header Section */}
						<div className="flex gap-2 ">
							{/* Back Button */}
							<button className="hover:text-blue-600 focus:outline-none">
								<FiArrowLeft className="w-6 h-6" />
							</button>
							<h1 className="text-md sm:text-lg font-semibold ">Edit Profile</h1>
						</div>
						<div
							className="flex items-center mt-4 mb-8 bg-none   sm:bg-[url('/teacher-b2b/profile-back.png')] sm:bg-[auto_600px]"
							>
							<div className="flex items-start bg-white rounded-r-3xl px-4 py-1">
								{/* Avatar and Name */}
								<div className="relative mt-3   mr-6">
									<Image
										src="/teacher-b2b/profile.png"
										alt={formData.name}
										width={80}
										height={80}
										className="w-20 h-20 rounded-full object-cover"
									/>
									<button className="absolute bottom-0 right-0 p-1.5 bg-[#E5E7EB] text-[#FF3366] rounded-full shadow-md  focus:outline-none">
										<FiEdit2 className="w-3 h-3" />
									</button>
								</div>
								<div className="mt-3 py-2">
									<h1 className="text-2xl font-medium text-black">Ronak Mathur</h1>
									<p className="text-[#FFCC00] font-medium">Teacher</p>
								</div>
							</div>

							
						</div>

						{/* Profile Form */}
						<form onSubmit={handleProfileSave}>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-5 mb-8">
								<FormInput label="Name" id="name" placeholder="Name" value={formData.name} onChange={handleChange} />
								<FormInput
									label="Email Address"
									id="emailAddress"
									placeholder="example@gm.com"
									type="email"
									value={formData.emailAddress}
									onChange={handleChange}
								/>
								<FormInput
									label="Contact Number"
									id="contactNumber"
									placeholder="1234567890"
									type="tel"
									value={formData.contactNumber}
									onChange={handleChange}
								/>

								<FormInput label="Gender" id="gender" placeholder="Male" value={formData.gender} onChange={handleChange} />
								<FormInput label="D.O.B." id="dob" placeholder="00 JAN 0000" value={formData.dob} onChange={handleChange} />
								<FormInput label="Country" id="country" placeholder="India" value={formData.country} onChange={handleChange} />
								<FormInput label="City" id="city" placeholder="Mumbai" value={formData.city} onChange={handleChange} />
								<FormInput label="State" id="state" placeholder="Maharashtra" value={formData.state} onChange={handleChange} />

								<FormInput label="Pin code" id="pinCode" placeholder="000000" value={formData.pinCode} onChange={handleChange} />
							</div>
						</form>
						<div className="w-full flex pt-6 justify-center">
							<Button className="px-28 rounded-full text-xl h-11 mx-auto">Save</Button>
						</div>
					</div>

					{/* Newsletter Subscription Section */}
					<Newsletter />
				</main>
			</div>
			<Footer />
		</>
	)
}
