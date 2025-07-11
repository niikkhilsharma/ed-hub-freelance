'use client'

import MaxWidthWrapper from '@/components/admin/max-width-wrapper'
import ArrowControl from '@/components/admin/ui/arrow-control'
import NamingBar from '@/components/admin/ui/naming-bar'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Progress } from '@/components/ui/progress'
import Image from 'next/image'
import { FiChevronDown } from 'react-icons/fi'

export default function TeacherPerformancePage() {
	return (
		<>
			<div className="bg-[#EEEEEE] min-h-screen">
				<NamingBar name="Teacher Report" />
				<div className="px-4 space-y-4 my-10">
					<MaxWidthWrapper className="bg-white rounded-2xl py-4 ">
						<div>
							<div className="flex justify-between items-start gap-8">
								<div className="flex gap-4 items-center justify-start">
									<Avatar className="size-28">
										<AvatarImage src="/admin/usernav.jpg" />
										<AvatarFallback>CN</AvatarFallback>
									</Avatar>

									<div className="space-y-2">
										<h1 className="font-semibold text-xl tracking-wide">Teacher Name</h1>
										<div className="flex gap-1 justify-center items-center">
											<div className="bg-[#FF3366] rounded-l-full text-xs font-light p-2 w-fit text-white">Class Assigned</div>
											<div className="bg-[#FF3366] rounded-r-full text-xs font-light p-2 w-fit text-white">Class Assigned</div>
										</div>
									</div>
								</div>
								<div>
									<p className="font-medium text-sm">
										Gender: <span className="font-light">Male</span>
									</p>
									<p className="font-medium text-sm">
										DOB: <span className="font-light">15 June 2015</span>
									</p>
									<p className="font-medium text-sm">
										Email: <span className="font-light">example@gmail.com</span>
									</p>
									<p className="font-medium text-sm">
										Contact: <span className="font-light">+91 1234567890</span>
									</p>
									<p className="font-medium text-sm">
										City: <span className="font-light">Mumbai</span>
									</p>
									<p className="font-medium text-sm">
										State: <span className="font-light">Maharastra</span>
									</p>
								</div>
							</div>
							{/* Contact Details */}
							<div className="mt-4">
								<h6 className="font-medium text-sm">Contact Details</h6>
								<div className="flex gap-4 items-center justify-start text-sm mt-4">
									<p className="bg-[#F3F4F6] p-2 rounded-full border border-[#B0B0B0]">+91 0000000000</p>
									<p className="bg-[#F3F4F6] p-2 rounded-full border border-[#B0B0B0]">example@gm.com</p>
								</div>
							</div>
						</div>
					</MaxWidthWrapper>

					<MaxWidthWrapper className="p-0 rounded-2xl bg-[#EEEEEE]">
						<StudentReport />
					</MaxWidthWrapper>
				</div>
			</div>
		</>
	)
}

const StudentReport = () => {
	const handleBackClick = () => {
		if (typeof window !== 'undefined') {
			window.history.back()
		}
	}

	// Simplified data for the line chart (hardcoded points)
	const lineChartData = {
		labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		datasets: [
			{
				color: '#0DC6FD',
				points: [0, 30, 30, 50, 50, 50, 70, 80, 70, 90, 90, 95],
			}, // Basic Academic
			{
				color: '#AC50F5',
				points: [0, 25, 25, 40, 40, 40, 60, 75, 65, 85, 85, 90],
			}, // Critical Academic
			{
				color: '#FF4A69',
				points: [0, 20, 20, 30, 30, 30, 50, 65, 55, 70, 70, 80],
			}, // Personality Dev
		],
	}
	const chartHeight = 160 // Max height of the chart area
	const chartWidth = 500 // Width of the chart area (approx)

	const personalDevData = {
		// Copied structure from Life Skills for Personal Development
		title: 'Personal Development',
		skills: [
			{
				name: 'Discipline',
				details: 'Pedagogy and Plan',
				progress: '3/4',
			},
			{
				name: 'Confidence',
				details: 'Pedagogy and Plan',
				progress: '3/4',
			},
			{
				name: 'Presentation',
				details: 'Pedagogy and Plan',
				progress: '3/4',
			},
			{
				name: 'Written',
				details: 'Pedagogy and Plan',
				progress: '3/4',
			},
			{
				name: 'Creativity',
				details: 'Pedagogy and Plan',
				progress: '3/4',
			},
			{
				name: 'Problem Solving',
				details: 'Pedagogy and Plan',
				progress: '3/4',
			},
		],
	}

	const parameter3Data = [
		{ title: 'Critical Thinking', description: 'Pedagogy and Plan' },
		{ title: 'Visualization', description: 'Pedagogy and Plan' },
		{ title: 'Accountability', description: 'Pedagogy and Plan' },
		{ title: 'Like Challenges', description: 'Pedagogy and Plan' },
		{ title: 'Social Skills', description: 'Pedagogy and Plan' },
		{ title: 'Decision Making', description: 'Pedagogy and Plan' },
		{ title: 'Focus', description: 'Pedagogy and Plan' },
		{ title: 'Retention', description: 'Pedagogy and Plan' },
		{ title: 'Adaptability', description: 'Pedagogy and Plan' },
		{ title: 'Behavior', description: 'Pedagogy and Plan' },
		{ title: 'Respect', description: 'Pedagogy and Plan' },
		{ title: 'Emotional Skills', description: 'Pedagogy and Plan' },
	]

	const testResultsData = [
		{
			test: 'Mathematics test',
			date1: '04/01/2025',
			date2: '04/07/2025 04:30 pm',
			totalMarks: 100,
			how: 60,
			marks: '80/100',
			result: 'Pass',
		},
		{
			test: 'Mathematics test',
			date1: '04/01/2025',
			date2: '04/07/2025 04:30 pm',
			totalMarks: 100,
			how: 60,
			marks: '80/100',
			result: 'Failed',
		},
		{
			test: 'Mathematics test',
			date1: '04/01/2025',
			date2: '04/07/2025 04:30 pm',
			totalMarks: 100,
			how: 60,
			marks: '80/100',
			result: 'Pass',
		},
		{
			test: 'Mathematics test',
			date1: '04/01/2025',
			date2: '04/07/2025 04:30 pm',
			totalMarks: 100,
			how: 60,
			marks: '80/100',
			result: 'Failed',
		},
		{
			test: 'Mathematics test',
			date1: '04/01/2025',
			date2: '04/07/2025 04:30 pm',
			totalMarks: 100,
			how: 60,
			marks: '80/100',
			result: 'Pass',
		},
		{
			test: 'Mathematics test',
			date1: '04/01/2025',
			date2: '04/07/2025 04:30 pm',
			totalMarks: 100,
			how: 60,
			marks: '80/100',
			result: 'Failed',
		},
	]

	return (
		<div>
			{/* Overall Progress and Paramter 0 */}
			<div className="flex flex-wrap lg:flex-nowrap gap-4 w-full mb-4 h-[31rem]">
				<div className="w-full lg:w-[65%] bg-white p-4 rounded-2xl">
					<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
						<p className="font-semibold text-lg mb-3 text-[#FF3366]">Overall Progress</p>
					</div>
					<div className="flex items-start flex-col-reverse gap-4 sm:flex-row justify-between px-7 mb-5">
						<div className="flex flex-col flex-wrap gap-x-4 gap-y-2 mb-4 text-xs text-nowrap">
							<div className="flex items-center">
								<div className="w-16 h-5 rounded-full mr-2 bg-[#0DC6FD]"></div>
								<p className="text-[#626262] text-sm font-light">Basic Academic Skills</p>
							</div>
							<div className="flex items-center">
								<div className="w-16 h-5 rounded-full mr-2 bg-[#AC50F5]"></div>
								<p className="text-[#626262] text-sm font-light">Critical Academic Skills</p>
							</div>
							<div className="flex items-center">
								<div className="w-16 h-5 rounded-full mr-2 bg-[#FF4A69]"></div>
								<p className="text-[#626262] text-sm font-light">Personality Development</p>
							</div>
						</div>
						<div className="flex items-center gap-2 mt-2 sm:mt-0">
							<div className="flex items-center gap-2.5 text-sm border border-[#E5E7EB] text-black bg-[#F9FAFB] px-1.5 py-2 rounded-xl">
								<span>Month</span>
								<FiChevronDown className="w-4 h-4 ml-1" />
							</div>

							<ArrowControl leftOnClick={handleBackClick} RightOnClick={() => {}} text="2025" className="justify-between px-1.5!" />
						</div>
					</div>
					{/* Simplified SVG Line Chart */}
					<div className="w-full overflow-x-auto">
						<svg viewBox={`0 0 ${chartWidth + 40} ${chartHeight + 30}`} className="min-w-[500px]">
							{/* Y-axis lines (simplified) */}
							{[0, 25, 50, 75, 100].map(yVal => (
								<line
									key={yVal}
									x1="30"
									y1={chartHeight - (yVal / 100) * chartHeight}
									x2={chartWidth + 30}
									y2={chartHeight - (yVal / 100) * chartHeight}
									stroke={'#D6E0FF'}
									strokeWidth="0.5"
									strokeDasharray="0,0"
								/>
							))}
							{/* X-axis labels */}
							{lineChartData.labels.map((label, i) => (
								<text
									key={label}
									x={35 + i * (chartWidth / (lineChartData.labels.length - 0.6))}
									y={chartHeight + 25}
									fontSize="7"
									fill={'#626262'}
									textAnchor="middle">
									{label}
								</text>
							))}

							{/* Data lines */}
							{lineChartData.datasets.map(dataset => (
								<polyline
									key={dataset.color}
									fill="none"
									stroke={dataset.color}
									strokeWidth="1"
									points={dataset.points
										.map(
											(p, i) => `${35 + i * (chartWidth / (lineChartData.labels.length - 1))},${chartHeight - (p / 100) * chartHeight}`
										)
										.join(' ')}
								/>
							))}
						</svg>
					</div>
				</div>
				<div className="pt-1 mb-10 h-full rounded-2xl w-full lg:w-[35%] p-4 bg-white">
					<h3 className="text-base mt-4 font-semibold text-[#FF3366]">Parameter 1</h3>
					<div className="space-y-3 mt-6 custom-scrollbar overflow-y-scroll pr-3 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 scrollbar-thumb-rounded-full">
						{personalDevData.skills.map((skill, i) => (
							<ProgressCircleItem
								key={i}
								percentageText={skill.progress}
								color={'#F9326F'}
								skillName={skill.name}
								details={skill.details}
							/>
						))}
					</div>
					{/* The thin scrollbar visual element from the image - hard to replicate exactly without custom overlay */}
					<div className="absolute right-1 top-16 bottom-5 w-1 bg-gray-300 rounded-full opacity-50 hidden sm:block"></div>
				</div>
			</div>

			{/* Parameter : Overall Progress */}
			<div className="flex flex-wrap lg:flex-nowrap gap-4 relative">
				<div className="w-full lg:w-[65%]">
					<div className="bg-white p-2 rounded-2xl h-fit">
						<div className="flex flex-wrap sm:flex-nowrap gap-4 w-full">
							<div className="bg-[#F9FAFB] w-full rounded-2xl p-3">
								<div className="bg-[#8DD9B3] p-4 rounded-2xl text-[#1D5851]">
									<h1 className="font-semibold tracking-wide">Parameter 2</h1>
									<p className="text-xs my-4">Overall Progress</p>
									<div className="mt-2 text-sm relative">
										<div className="absolute bottom-14 left-[85%]">
											<Image src={'/admin/maths-sign-2.png'} width={156} height={104} alt="Maths Sign" className="w-16 h-10" />
										</div>
										<span className="font-semibold text-[#6B7280]">4/5</span>
										<div className="flex gap-2 items-center -mt-1.5">
											<Progress value={80} className="rounded-full bg-white" innerClass="bg-[#4BC4B6]" />
											<span className="font-light">5</span>
										</div>
									</div>
								</div>
								<div className="my-4">
									{Array.from({ length: 6 }).map((_, i) => (
										<ProgressCircleItem
											key={i}
											percentageText={'3/4'}
											color={'#4BC4B6'}
											skillName={'Subject 1'}
											details={'Pedagogy and Plan'}
										/>
									))}
								</div>
							</div>
							<div className="bg-[#F9FAFB] w-full rounded-2xl p-3">
								<div className="bg-[#EEDAFE] p-4 rounded-2xl text-[#37085C]">
									<h1 className="font-semibold tracking-wide">Parameter 3</h1>
									<p className="text-xs my-4">Overall Progress</p>
									<div className="mt-2 text-sm relative">
										<div className="absolute bottom-14 left-[85%]">
											<Image src={'/admin/maths-sign-3.png'} width={168} height={96} alt="Maths Sign" className="w-20 h-10" />
										</div>
										<span className="font-semibold">4/5</span>
										<div className="flex gap-2 items-center -mt-1.5">
											<Progress value={80} className="rounded-full bg-white" innerClass="bg-[#A866DD]" />
											<span className="font-light">5</span>
										</div>
									</div>
								</div>
								<div className="my-4">
									{Array.from({ length: 6 }).map((_, i) => (
										<ProgressCircleItem
											key={i}
											percentageText={'3/4'}
											color={'#A866DD'}
											skillName={'Spoken English'}
											details={'Pedagogy and Plan'}
										/>
									))}
								</div>
							</div>
						</div>
					</div>
					{/* Table View */}
					<div className="rounded-2xl flex-1 mt-4 overflow-hidden">
						<table className="w-full text-sm">
							<thead className="bg-[#E5ECFF]">
								<tr>
									{['Test', 'Date', 'Date', 'Total Marks', 'How', 'Marks', 'Results'].map((header, index) => (
										<th key={index} className="p-4 text-left font-medium tracking-wide">
											{header}
										</th>
									))}
								</tr>
							</thead>
							<tbody>
								{testResultsData.map((row, i) => (
									<tr key={i} className="odd:bg-[#F7F9FF] even:bg-[#FFFFFF] text-[#777777]">
										<td className="p-4">{row.test}</td>
										<td className="p-4">{row.date1}</td>
										<td className="p-4">{row.date2}</td>
										<td className="p-4">{row.totalMarks}</td>
										<td className="p-4">{row.how}</td>
										<td className="p-4 text-[#000000]">{row.marks}</td>
										<td className="p-4 odd:text-[#8DD9B3] even:text-[#FF3366] font-medium">{row.result}</td>
									</tr>
								))}
								<tr className="odd:bg-[#E5ECFF4D] even:bg-[#FFFFFF] text-[#777777]">
									<td className="p-2.5"></td>
									<td className="p-2.5"></td>
									<td className="p-2.5"></td>
									<td className="p-2.5"></td>
									<td className="p-2.5"></td>
									<td className="p-2.5 text-[#000000]"></td>
									<td className="p-2.5 odd:text-[#E5ECFF4D] even:text-[#FFFFFF] font-medium">asdf</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div className="w-full lg:w-[35%] p-4 rounded-2xl bg-white">
					<div className="bg-[#FBD2D9] p-4 rounded-2xl text-[#893544]">
						<h1 className="font-semibold tracking-wide">Parameter 2</h1>
						<p className="text-xs my-4">Overall Progress</p>
						<div className="mt-2 text-sm relative">
							<div className="absolute bottom-14 left-[85%]">
								<Image src={'/admin/mask.png'} width={86} height={86} alt="Maths Sign" className="w-10 aspect-square h-10" />
							</div>
							<span className="font-semibold">4/5</span>
							<div className="flex gap-2 items-center -mt-1.5">
								<Progress value={80} className="rounded-full bg-white" innerClass="bg-[#893544]" />
								<span className="font-light">5</span>
							</div>
						</div>
					</div>
					<div className="my-4">
						{parameter3Data.map((_, i) => (
							<ProgressCircleItem key={i} percentageText={'3/4'} color={'#893544'} skillName={_.title} details={_.description} />
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

const ProgressCircleItem = ({
	percentageText,
	color,
	skillName,
	details,
}: {
	percentageText: string
	color: string
	skillName: string
	details: string
}) => {
	const [numerator, denominator] = percentageText.split('/').map(Number)
	const percentage = (numerator / denominator) * 100

	const radius = 35
	const circumference = 2 * Math.PI * radius
	const offset = circumference - (percentage / 100) * circumference

	return (
		<div className="flex items-center justify-start space-x-3 mb-3">
			<div className="w-[3.35rem] h-[3.35rem] relative flex-shrink-0">
				<svg className="w-full h-full transform rotate-90 " viewBox="0 0 75 75">
					<circle cx="37.5" cy="37.5" r={radius} fill="none" stroke="#E5E7EB" strokeWidth="4" />
					<circle
						cx="37.5"
						cy="37.5"
						r={radius}
						fill="none"
						stroke={color}
						strokeWidth="4"
						strokeDasharray={circumference}
						strokeDashoffset={offset}
						strokeLinecap="round"
					/>
				</svg>
				<div className="absolute inset-0 flex items-center justify-center">
					<span className="text-xs font-medium text-gray-600">{percentageText}</span>
				</div>
			</div>

			<div className="flex flex-col gap-2 ml-2">
				<p className="text-sm text-[#626262]">{skillName}</p>
				<p className="text-xs font-light text-[#626262]">{details}</p>
			</div>
		</div>
	)
}
