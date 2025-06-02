'use client'

import Image from 'next/image'
import { FiHelpCircle, FiTarget, FiClock, FiCalendar, FiAlertTriangle, FiFrown } from 'react-icons/fi' // Added FiFrown for expired icon

// Helper component for the info badges
const InfoBadge = ({
	icon: Icon,
	text,
	bgColor,
	textColor,
}: {
	icon: React.ElementType
	text: string
	bgColor: string
	textColor: string
}) => (
	<div className={`flex items-center gap-2 px-4 py-2 rounded-full shadow-sm ${bgColor} ${textColor}`}>
		<Icon className="w-4 h-4" />
		<span className="text-sm font-medium">{text}</span>
	</div>
)

// Helper component for the Test Expired section
const TestStatusDisplay = ({
	statusText,
	icon: Icon,
	iconColor,
	bgColorClassName,
}: {
	statusText: string
	icon: React.ElementType
	iconColor: string
	bgColorClassName: string
}) => (
	<div className={`${bgColorClassName} p-6 rounded-xl mt-8 text-center`}>
		<div className="flex items-center justify-center gap-2">
			<span className={`text-md font-semibold ${iconColor}`}>{statusText}</span>
			<Icon className={`w-5 h-5 ${iconColor}`} />
		</div>
	</div>
)

export default function TestExpiredPage() {
	const loremIpsum =
		"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

	return (
		<div
			className="min-h-screen flex items-center justify-center p-4 bg-blue-600" // Main blue background
			// style={{ backgroundImage: 'url(/images/blue-pattern-bg.png)', backgroundRepeat: 'repeat', backgroundSize: 'auto' }}
		>
			<div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row w-full max-w-4xl lg:max-w-5xl">
				{/* Left Section - Test Information */}
				<div className="w-full md:w-3/5 bg-white p-6 sm:p-8 lg:p-10 flex flex-col">
					<div className="mb-6">
						<h1 className="text-xl md:text-2xl font-bold text-gray-800 leading-tight">
							5-Stage Dermatoglyphic Multiple Intelligence Test (DMIT) and skill assessment
						</h1>
					</div>
					<p className="text-sm text-gray-600 leading-relaxed mb-8">{loremIpsum}</p>
					{/* Info Badges */}
					<div className="flex flex-wrap justify-start gap-3 mb-8">
						<InfoBadge icon={FiHelpCircle} text="100 Questions" bgColor="bg-orange-100" textColor="text-orange-700" />
						<InfoBadge icon={FiTarget} text="100 Marks" bgColor="bg-sky-100" textColor="text-sky-700" />
						<InfoBadge icon={FiClock} text="30 minutes" bgColor="bg-green-100" textColor="text-green-700" />
					</div>
					{/* Test Window Information */}
					<div className="bg-gray-50 p-6 rounded-xl mb-6 space-y-3">
						<h3 className="text-md font-semibold text-gray-700 text-center mb-3">Test Window</h3>
						<div className="flex items-center gap-3 text-sm text-gray-600">
							<FiCalendar className="w-5 h-5 text-gray-500 flex-shrink-0" />
							<span>10 May 2025, 10:00 AM — 12 May 2025, 9:59 AM (2 Days)</span>
						</div>
						<div className="flex items-center gap-3 text-sm text-gray-600">
							<FiAlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0" />
							<span>Complete the test within 48 hours or it will reset.</span>
						</div>
					</div>
					{/* Test Expired Section */}
					<TestStatusDisplay
						statusText="Test Expired"
						icon={FiFrown} // Using FiFrown for the sad/expired face
						iconColor="text-red-600"
						bgColorClassName="bg-red-50" // Light red background
					/>
					<div className="mt-auto"></div> {/* Pushes content up if needed */}
				</div>

				{/* Right Section - Image (Identical to previous) */}
				<div className="w-full md:w-2/5 relative min-h-[350px] md:min-h-full">
					<div
						className="absolute inset-0 z-0 opacity-80"
						style={{
							backgroundImage: 'url(/images/colorful-bg-pattern.png)', // <-- UPDATE PATH
							backgroundRepeat: 'repeat',
							backgroundSize: 'auto',
						}}></div>
					<div className="relative z-10 w-full h-full flex items-center justify-center p-4 md:p-0">
						<Image
							src="/images/student_with_laptop.svg" // <-- UPDATE PATH
							alt="Student with laptop"
							width={400}
							height={500}
							className="w-auto h-full max-h-[90%] object-contain"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
