'use client'

import AuthLayout from '@/components/auth-layout' // Adjust path if needed



export default function ChooseProfilePage() {
//   const [selectedProfile, setSelectedProfile] = useState<string>(profiles[2].id)

  return (
	<AuthLayout
	  leftPanelTitle="Become a Future School"
	  leftPanelDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
	  <h2 className="text-2xl font-bold text-gray-900 mb-1">School Code</h2>
	  <p className="text-sm text-black mb-12 leading-relaxed">
		Lorem Ipsum is simply dummy text of the printing and typesetting industry.
	  </p>

	  <div className="space-y-2">

					<label htmlFor="uniqueSchoolCode" className="text-base font-medium mt-4 mb-2 block text-black">
						Unique School Code
					</label>
					<input
						id="uniqueSchoolCode"
						type="text"
						placeholder="Enter Unique School Code"
						className="w-full py-3 px-4 bg-[#F9FAFB] placeholder:text-[#777777] text-sm focus:outline-none focus:ring-2 transition"
						style={{
							borderRadius: '9999px', // pill-shaped
						}}
					/>

					<button
						className="w-full mt-4 text-sm font-medium py-3 px-4 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-[#3366FF] transition"
						style={{
							color: '#ffffff',
							borderRadius: '9999px', // pill-shaped
						}}>
						Next
					</button>
				</div>
	</AuthLayout>
  )
}

