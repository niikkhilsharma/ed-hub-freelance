'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { FiArrowRight, FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi' // Add more icons if used by StatCard or other elements

// --- Color Constants (approximated from image) ---
const PROFILE_NAME_COLOR = 'black'
const STAT_CARD_BG = '#F9FAFB'
const STAT_NUMBER_COLOR = '#3366FF' // Blue
const STAT_LABEL_COLOR = 'black'
const CHART_AXIS_COLOR = '#7D7D7D'
const CHART_LINE_COLOR_OVERALL = '#25CD2566' // Green
const BAR_CHART_BAR_COLOR = '#3366FF' // Blue
const PERFORMANCE_TITLE_COLOR = 'black'
const ACTIVE_TAB_BG = '#FF3366' // Red
const INACTIVE_TAB_BG = 'transparent'
const INACTIVE_TAB_TEXT = '#6B7280'
const TABLE_HEADER_BG = '#3366FF' // Blue
const TABLE_HEADER_TEXT = '#FFFFFF'
const TABLE_ROW_BG = '#F9FAFB'
const TABLE_TEXT_COLOR = 'black'
const VIEW_ALL_BG = '#F9FAFB'
const VIEW_ALL_TEXT = 'black'
const SCROLLBAR_THUMB_COLOR = '#FFC79A' // For scrollbar thumb

// --- Helper Components ---
interface StatCardProps {
	number: string | number
	label: string
}
const StatCard: React.FC<StatCardProps> = ({ number, label }) => (
	<div className={`p-6 rounded-xl text-center border border-[#E5E7EB]`} style={{ backgroundColor: STAT_CARD_BG }}>
		<p className="text-4xl font-bold" style={{ color: STAT_NUMBER_COLOR }}>
			{number}
		</p>
		<p className="text-sm mt-1 font-medium" style={{ color: STAT_LABEL_COLOR }}>
			{label}
		</p>
	</div>
)

interface TabButtonProps {
	label: string
	isActive: boolean
	onClick: () => void
}
const TabButton: React.FC<TabButtonProps> = ({ label, isActive, onClick }) => (
	<button
		onClick={onClick}
		className={`px-12 py-1.5 text-sm font-medium rounded-xl transition-colors duration-150
      ${isActive ? `text-white` : `hover:bg-gray-100 text-[${INACTIVE_TAB_TEXT}]`}`}
		style={{ backgroundColor: isActive ? ACTIVE_TAB_BG : INACTIVE_TAB_BG }}>
		{label}
	</button>
)

// --- Main Dashboard Component ---
const PrincipalDashboardPage: React.FC = () => {
	const [teacherPerformanceTab, setTeacherPerformanceTab] = useState('Class A')
	const [studentPerformanceTab, setStudentPerformanceTab] = useState('Class A')

	const profile = {
		name: 'Shlok Agheda',
		school: 'School Name, Branch',
		role: 'Principal',
		avatar: '/teacher-b2b/profile2.png', // Using the updated path from your previous request
		details: [
			'Gender: Male',
			'DOB: 15 Jun 2015',
			'Email: example@gm.com',
			'Contact: +91 1234567890',
			'City: Mumbai',
			'State: Maharashtra',
		],
	}

	const stats = [
		{ number: 3, label: 'Branches' },
		{ number: 200, label: 'Teachers' },
		{ number: 600, label: 'Students' },
	]

	const overallProgressData = {
		labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
		values: [10, 20, 15, 40, 30, 50, 40, 75],
		yLabels: ['0', '20k', '40k', '60k', '80k', '100k'],
	}

	const topBranchesData = [
		{ label: 'A', value: 90, displayValue: '120k', name: 'Branch Name' },
		{ label: 'B', value: 70, displayValue: '60k', name: 'Branch Name' },
		{ label: 'C', value: 80, displayValue: '70k', name: 'Branch Name' },
		{ label: 'D', value: 60, displayValue: '50k', name: 'Branch Name' },
		{ label: 'E', value: 40, displayValue: '25k', name: 'Branch Name' },
	]

	const teacherPerformanceData = Array(8)
		.fill(null)
		.map((_, i) => ({
			// Added unique keys for mapping
			id: `teacher-${i}`,
			name: 'Name',
			subject: 'Subject',
			avgScore: '80%',
			progress: '-5%',
		}))
	teacherPerformanceData[4].progress = '+16%'
	teacherPerformanceData[2].progress = '+5%'

	const studentPerformanceData = Array(8)
		.fill(null)
		.map((_, i) => ({
			// Added unique keys
			id: `student-${i}`,
			class: '9A',
			avgScore: '85%',
			topPerformer: 'Student Name',
		}))

	return (
		// This div would typically be inside your <main> tag from the parent layout
		<div className="rounded-2xl bg-white p-4 space-y-6">
			<div className="bg-[url('/principal/dashboard-pattern.png')] bg-repeat bg-[length:650px_650px] space-y-6 rounded-2xl border border-[#E5E7EB] bg-white p-4 ">
				{/* Profile and Stats Section */}
				<div className="bg-white rounded-2xl">
					<section className=" p-2 mb-4">
					<div className="bg-white">
						<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
						<div className="flex items-center gap-4">
							<Image src={profile.avatar} alt={profile.name} width={100} height={100} className="rounded-full" />
							<div className="space-y-1">
								<h1 className="text-2xl font-bold" style={{ color: PROFILE_NAME_COLOR }}>
									{profile.name}
								</h1>
								<p className="text-sm text-black">{profile.school}</p>
								<span className="text-sm  rounded mt-1 inline-block text-[#FFCC00]">{profile.role}</span>
							</div>
						</div>
						<div className="text-xs text-gray-600 space-y-0.5 md:text-right">
							{profile.details.map(detail => (
								<p className="text-xs text-left text-black " key={detail}>
									{detail}
								</p>
							))}
						</div>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
						{stats.map(stat => (
							<StatCard key={stat.label} number={stat.number} label={stat.label} />
						))}
					</div>
					</div>
				</section>

				{/* Charts Section */}
				<section className=" grid grid-cols-1 lg:grid-cols-5 gap-6">
					{/* Overall Progress Chart */}
					<div className="col-span-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl p-5 ">
						<div className="flex justify-between items-center mb-4">
							<h2 className="text-lg font-semibold" style={{ color: PERFORMANCE_TITLE_COLOR }}>
								Overall Progress
							</h2>
							<div className="flex items-center gap-3 text-sm border font-medium border-[#E5E7EB] text-black bg-[#F9FAFB] px-3 py-2 rounded-xl">
								<FiArrowLeftCircle className="w-4 h-4 cursor-pointer hover:text-black" />
								<span>June 2025</span>
								<FiArrowRightCircle className="w-4 h-4 cursor-pointer hover:text-black" />
							</div>
						</div>
						<div className="h-48 relative">
							<svg width="100%" height="100%" viewBox="0 0 500 200" preserveAspectRatio="xMidYMid meet">
								{overallProgressData.yLabels.map((label, i, arrY) => {
									// Corrected `arr` to `arrY`
									const yPos = 180 - i * (160 / (arrY.length - 1))
									return (
										<g key={label}>
											<text x="0" y={yPos + 3} fontSize="10" fill={CHART_AXIS_COLOR}>
												{label}
											</text>
											<line x1="25" y1={yPos} x2="495" y2={yPos} stroke={CHART_AXIS_COLOR} strokeWidth="0.5" strokeDasharray="2,2" />
										</g>
									)
								})}
								{overallProgressData.labels.map(
									(
										label,
										i,
										arrX // Corrected `arr` to `arrX`
									) => (
										<text
											key={label}
											x={30 + i * (460 / (arrX.length - 1))}
											y="195"
											fontSize="10"
											fill={CHART_AXIS_COLOR}
											textAnchor="middle">
											{label}
										</text>
									)
								)}
								<defs>
									<linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
										<stop
											offset="0%"
											style={{
												stopColor: CHART_LINE_COLOR_OVERALL,
												stopOpacity: 0.3,
											}}
										/>
										<stop
											offset="100%"
											style={{
												stopColor: CHART_LINE_COLOR_OVERALL,
												stopOpacity: 0,
											}}
										/>
									</linearGradient>
								</defs>
								<path
									d={
										`M30,${180 - (overallProgressData.values[0] / 100) * 160} ` +
										overallProgressData.values
											.map(
												(
													val,
													i,
													arrPath // Corrected `arr` to `arrPath`
												) => `L${30 + i * (460 / (arrPath.length - 1))},${180 - (val / 100) * 160}`
											)
											.join(' ') +
										` L${30 + (overallProgressData.values.length - 1) * (460 / (overallProgressData.values.length - 1))},180 L30,180 Z`
									}
									fill="url(#areaGradient)"
								/>
								<polyline
									fill="none"
									stroke={CHART_LINE_COLOR_OVERALL}
									strokeWidth="2"
									points={overallProgressData.values
										.map(
											(
												val,
												i,
												arrPoly // Corrected `arr` to `arrPoly`
											) => `${30 + i * (460 / (arrPoly.length - 1))},${180 - (val / 100) * 160}`
										)
										.join(' ')}
								/>
							</svg>
						</div>
					</div>

					{/* Top Branches Chart */}
					<div className="col-span-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl p-5">
						<h2 className="text-lg font-semibold mb-4" style={{ color: PERFORMANCE_TITLE_COLOR }}>
							Top Branches
						</h2>
						<div className="space-y-3">
							{topBranchesData.map(branch => (
								<div key={branch.label} className="flex items-center justify-around gap-3">
									
									<div className="flex-grow rounded-full h-5 relative">
										<div
											className="h-6 rounded-full relative"
											style={{
												width: `${branch.value}%`,
												backgroundColor: BAR_CHART_BAR_COLOR,
											}}>
												<div
										className="absolute left-1.5 top-1/5 rounded-full flex items-center justify-center text-xs font-semibold text-white"
										style={{ backgroundColor: BAR_CHART_BAR_COLOR }}>
										{branch.label}
									</div>
											<span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] font-medium text-white">
												{branch.displayValue}
											</span>
										</div>
									</div>
									<span className="text-sm  truncate " style={{ color: 'black' }}>
										<span className="font-semibold mr-2">{branch.label}:</span>
										{branch.name}
									</span>
								</div>
							))}
						</div>
					</div>
				</section>
				</div>
			</div>

			{/* Performance Tables Section - Corrected Alignment and Progress Color */}
			<section className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
				{/* Overall Teacher Performance */}
				<div className="bg-white flex flex-col">
					<div className="p-5">
						<h2 className="text-lg font-semibold" style={{ color: PERFORMANCE_TITLE_COLOR }}>
							Overall Teacher Performance
						</h2>
					</div>
					<div className="p-3 mx-3 mb-3 rounded-2xl border border-[#E5E7EB] flex flex-col flex-grow">
						<div className="flex items-center mb-3 justify-between border border-[#E5E7EB] rounded-xl p-0.5 w-full">
							{['Class A', 'Class B', 'Class C'].map(cls => (
								<TabButton
									key={cls}
									label={cls}
									isActive={teacherPerformanceTab === cls}
									onClick={() => setTeacherPerformanceTab(cls)}
								/>
							))}
							<button className="p-1 text-black bg-[#0000001A] rounded-full hover:text-gray-700">
								<FiArrowRight className="w-4 h-4" />
							</button>
						</div>
						<div className="px-3 py-2 rounded-xl mb-1" style={{ backgroundColor: TABLE_HEADER_BG }}>
							<div
								className="grid grid-cols-4 text-sm font-semibold text-center" // Added text-center to header
								style={{ color: TABLE_HEADER_TEXT }}>
								<div className="py-1.5 px-2 text-left">Teacher Name</div> {/* Teacher Name can remain left-aligned */}
								<div className="py-1.5 px-2">Subjects</div>
								<div className="py-1.5 px-2">Avg. Student Score</div>
								<div className="py-1.5 px-2">Progress</div> {/* Progress header also centered now */}
							</div>
						</div>
						<div
							className={`flex-grow overflow-y-auto space-y-1 pb-1 max-h-85 scrollbar-thin scrollbar-thumb-${SCROLLBAR_THUMB_COLOR} scrollbar-track-gray-100 scrollbar-thumb-rounded-full`}>
							{teacherPerformanceData.map(item => (
								<div
									key={item.id}
									className="grid grid-cols-4 p-2 rounded-xl text-sm border border-[#E5E7EB] items-center text-center" // Added text-center to rows
									style={{ backgroundColor: TABLE_ROW_BG }}>
									<div className="px-1 text-left" style={{ color: TABLE_TEXT_COLOR }}>
										{' '}
										{/* Teacher Name cell left-aligned */}
										{item.name}
									</div>
									<div className="px-1" style={{ color: TABLE_TEXT_COLOR }}>
										{item.subject}
									</div>
									<div className="px-1" style={{ color: TABLE_TEXT_COLOR }}>
										{item.avgScore}
									</div>
									<div
										// Correctly apply dynamic classes for Tailwind JIT
										className={`px-1 font-semibold 
                ${item.progress.startsWith('+') ? 'text-[#10B981]' : 'text-[#EF4444]'}`}>
										{item.progress}
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="p-3 mt-auto text-center">
						<button
							className="text-md font-medium px-16 py-2.5 rounded-full border border-[#E5E7EB] "
							style={{ backgroundColor: VIEW_ALL_BG, color: VIEW_ALL_TEXT }}>
							View All
						</button>
					</div>
				</div>

				{/* Overall Student Performance */}
				<div className="bg-whiteflex flex-col">
					<div className="p-5">
						<h2 className="text-lg font-semibold" style={{ color: PERFORMANCE_TITLE_COLOR }}>
							Overall Student Performance
						</h2>
					</div>
					<div className="p-3 mx-3 mb-3 rounded-2xl border border-[#E5E7EB] flex flex-col flex-grow">
						<div className="flex items-center mb-3 justify-between border border-[#E5E7EB] rounded-xl p-0.5 w-full">
							{['Class A', 'Class B', 'Class C'].map(cls => (
								<TabButton
									key={cls}
									label={cls}
									isActive={studentPerformanceTab === cls}
									onClick={() => setStudentPerformanceTab(cls)}
								/>
							))}
							<button className="p-1 text-black bg-[#0000001A] rounded-full hover:text-gray-700">
								<FiArrowRight className="w-4 h-4" />
							</button>
						</div>
						<div className="px-3 py-2 rounded-xl mb-1" style={{ backgroundColor: TABLE_HEADER_BG }}>
							<div
								className="grid grid-cols-3 text-sm font-semibold text-center" // Added text-center to header
								style={{ color: TABLE_HEADER_TEXT }}>
								<div className="py-1.5 px-2">Class</div>
								<div className="py-1.5 px-2">Avg. Student Score</div>
								<div className="py-1.5 px-2">Top Performer</div>
							</div>
						</div>
						<div
							className={`flex-grow overflow-y-auto space-y-1 pb-1 max-h-85 scrollbar-thin scrollbar-thumb-${SCROLLBAR_THUMB_COLOR} scrollbar-track-gray-100 scrollbar-thumb-rounded-full`}>
							{studentPerformanceData.map(item => (
								<div
									key={item.id}
									className="grid grid-cols-3 p-2 rounded-xl border border-[#E5E7EB] text-sm items-center text-center" // Added text-center to rows
									style={{ backgroundColor: TABLE_ROW_BG }}>
									<div className="px-1" style={{ color: TABLE_TEXT_COLOR }}>
										{item.class}
									</div>
									<div className="px-1" style={{ color: TABLE_TEXT_COLOR }}>
										{item.avgScore}
									</div>
									<div className="px-1" style={{ color: TABLE_TEXT_COLOR }}>
										{item.topPerformer}
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="p-3 mt-auto text-center">
						<button
							className="text-md font-medium px-16 py-2.5 rounded-full border border-[#E5E7EB] "
							style={{ backgroundColor: VIEW_ALL_BG, color: VIEW_ALL_TEXT }}>
							View All
						</button>
					</div>
				</div>
			</section>
		</div>
	)
}

export default PrincipalDashboardPage
