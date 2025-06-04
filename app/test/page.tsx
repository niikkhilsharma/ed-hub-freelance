// Suggested File Path: app/teacher-b2b/students/[studentId]/report/page.tsx
'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { FiArrowLeft, FiChevronDown, FiChevronLeft, FiChevronRight, FiAward, FiTarget, FiHeart } from 'react-icons/fi'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { IconType } from 'react-icons'

// Assuming Button component is at this path from Batch 1
import { Button } from '@/components/ui/button'

// --- UI Component: Dropdown ---
interface DropdownOption {
	value: string | number
	label: string
}

interface DropdownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
	options: DropdownOption[]
	label?: string
	containerClassName?: string
}

function DropdownComponent({ options, label, id, className, containerClassName, ...props }: DropdownProps) {
	return (
		<div className={clsx('relative', containerClassName)}>
			{label && (
				<label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
					{label}
				</label>
			)}
			<div className="relative">
				<select
					id={id}
					className={clsx(
						'appearance-none block w-full pl-3 pr-10 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#3366FF] focus:border-[#3366FF]',
						className
					)}
					{...props}>
					{options.map(option => (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
					))}
				</select>
				<FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
			</div>
		</div>
	)
}

// --- UI Component: CircularProgress ---
interface CircularProgressProps {
	percentage: number
	total: number
	size?: number
	strokeWidth?: number
	colorClass: string
	baseColorClass?: string
}

function CircularProgress({
	percentage,
	total,
	size = 40,
	strokeWidth = 4,
	colorClass,
	baseColorClass = 'text-gray-200',
}: CircularProgressProps) {
	const radius = (size - strokeWidth) / 2
	const circumference = 2 * Math.PI * radius
	const progress = total === 0 ? 0 : (percentage / total) * 100 // Avoid division by zero
	const offset = circumference - (progress / 100) * circumference

	return (
		<div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
			<svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90 transform">
				<circle
					className={baseColorClass}
					stroke="currentColor"
					strokeWidth={strokeWidth}
					fill="transparent"
					r={radius}
					cx={size / 2}
					cy={size / 2}
				/>
				<circle
					className={colorClass}
					stroke="currentColor"
					strokeWidth={strokeWidth}
					strokeLinecap="round"
					fill="transparent"
					r={radius}
					cx={size / 2}
					cy={size / 2}
					style={{
						strokeDasharray: circumference,
						strokeDashoffset: offset,
						transition: 'stroke-dashoffset 0.3s ease-out',
					}}
				/>
			</svg>
			<span className="absolute text-xs font-semibold text-gray-700">
				{percentage}/{total}
			</span>
		</div>
	)
}

// --- UI Component: ProgressBar ---
interface ProgressBarProps {
	value: number
	color?: 'blue' | 'green' | 'purple' | 'red' | 'yellow'
	height?: string
	showPercentageText?: boolean
	className?: string
	barClassName?: string
}

function ProgressBarComponent({
	value,
	color = 'blue',
	height = 'h-2.5',
	showPercentageText = false,
	className,
	barClassName,
}: ProgressBarProps) {
	const validValue = Math.max(0, Math.min(100, value))
	const colorClasses = {
		blue: 'bg-blue-500',
		green: 'bg-green-500',
		purple: 'bg-purple-500',
		red: 'bg-red-500',
		yellow: 'bg-yellow-500',
	}

	return (
		<div className={clsx('w-full bg-gray-200 rounded-full relative', height, className)}>
			<div
				className={clsx('rounded-full absolute top-0 left-0 bottom-0', height, colorClasses[color], barClassName)}
				style={{ width: `${validValue}%` }}>
				{showPercentageText && (
					<span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs font-medium text-white">
						{`${Math.round(validValue)}%`}
					</span>
				)}
			</div>
		</div>
	)
}

// --- Feature Component: StudentReportHeader ---
interface FocusArea {
	id: string
	label: string
}
interface StudentReportHeaderProps {
	studentName: string
	avatarSrc: string
	classTag: string
	groupTag: string
	focusAreas: FocusArea[]
	activeFocusArea?: string
	onFocusAreaChange?: (focusAreaId: string) => void
	details: {
		gender: string
		dob: string
		email: string
		contact: string
		city: string
		state: string
	}
}

function StudentReportHeader({
	studentName,
	avatarSrc,
	classTag,
	groupTag,
	focusAreas,
	activeFocusArea,
	onFocusAreaChange,
	details,
}: StudentReportHeaderProps) {
	return (
		<div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
			<div className="mb-4">
				<Link
					href="/teacher-b2b/students"
					className="inline-flex items-center text-[#3366FF] hover:text-[#254dbf] text-sm font-medium group">
					<FiArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
					Report
				</Link>
			</div>
			<div className="flex flex-col md:flex-row justify-between items-start">
				<div className="flex items-start gap-4 mb-4 md:mb-0">
					<Image
						src={avatarSrc}
						alt={studentName}
						width={80}
						height={80}
						className="rounded-full object-cover flex-shrink-0 border-2 border-gray-100"
					/>
					<div>
						<h1 className="text-2xl font-bold text-gray-900">{studentName}</h1>
						<div className="flex items-center space-x-1 mt-1 mb-3">
							<span className="px-3 py-1 bg-[#FF3366] text-white text-xs font-semibold rounded-full">{classTag}</span>
							<span className="px-3 py-1 bg-[#FF3366] text-white text-xs font-semibold rounded-full">{groupTag}</span>
						</div>
						<div>
							<p className="text-sm font-semibold text-gray-700 mb-1.5">Key Focus Area</p>
							<div className="flex flex-wrap gap-2">
								{focusAreas.map(area => (
									<Button
										key={area.id}
										size="sm"
										variant={activeFocusArea === area.id ? 'default' : 'outline'}
										onClick={() => onFocusAreaChange && onFocusAreaChange(area.id)}
										className={clsx(
											activeFocusArea === area.id
												? '!bg-[#FF3366] !border-[#FF3366] !text-white'
												: '!border-gray-300 !text-gray-600 hover:!bg-gray-50',
											'!rounded-md px-3 py-1.5' // Adjusted to look more like the image
										)}>
										{area.label}
									</Button>
								))}
							</div>
						</div>
					</div>
				</div>
				<div className="text-xs text-gray-600 space-y-0.5 text-left md:text-right mt-4 md:mt-0">
					<p>
						<span className="font-medium text-gray-700">Gender:</span> {details.gender}
					</p>
					<p>
						<span className="font-medium text-gray-700">DOB:</span> {details.dob}
					</p>
					<p>
						<span className="font-medium text-gray-700">Email:</span> {details.email}
					</p>
					<p>
						<span className="font-medium text-gray-700">Contact:</span> {details.contact}
					</p>
					<p>
						<span className="font-medium text-gray-700">City:</span> {details.city}
					</p>
					<p>
						<span className="font-medium text-gray-700">State:</span> {details.state}
					</p>
				</div>
			</div>
		</div>
	)
}

// --- Feature Component: OverallProgressChart ---
interface ChartDataPoint {
	month: string
	basic: number
	critical: number
	personality: number
}
interface OverallProgressChartProps {
	data: ChartDataPoint[]
}

const months = [
	{ value: 'Jan', label: 'Jan' },
	{ value: 'Feb', label: 'Feb' },
	{ value: 'Mar', label: 'Mar' },
	{ value: 'Apr', label: 'Apr' },
	{ value: 'May', label: 'May' },
	{ value: 'Jun', label: 'Jun' },
	{ value: 'Jul', label: 'Jul' },
	{ value: 'Aug', label: 'Aug' },
	{ value: 'Sep', label: 'Sep' },
	{ value: 'Oct', label: 'Oct' },
	{ value: 'Nov', label: 'Nov' },
	{ value: 'Dec', label: 'Dec' },
]
const currentYear = new Date().getFullYear()
const years = Array.from({ length: 5 }, (_, i) => ({ value: currentYear - i, label: (currentYear - i).toString() }))

function OverallProgressChart({ data }: OverallProgressChartProps) {
	const [selectedMonth, setSelectedMonth] = useState<string>(months[new Date().getMonth()].value)
	const [selectedYear, setSelectedYear] = useState<number>(currentYear)
	const handleYearChange = (increment: number) => {
		setSelectedYear(prev => Math.max(years[years.length - 1].value, Math.min(years[0].value, prev + increment)))
	}

	return (
		<div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6">
			<div className="flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-6">
				<h3 className="text-lg font-semibold text-gray-800 mb-3 sm:mb-0">Overall Progress</h3>
				<div className="flex items-center gap-2">
					<DropdownComponent
						options={months}
						value={selectedMonth}
						onChange={e => setSelectedMonth(e.target.value)}
						className="py-2 text-sm w-28 sm:w-32 !rounded-md"
					/>
					<Button
						size="icon"
						variant="ghost"
						onClick={() => handleYearChange(-1)}
						className="!rounded-md !p-1.5 border bg-white hover:bg-gray-50 !w-8 !h-8 sm:!w-9 sm:!h-9">
						<FiChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
					</Button>
					<span className="text-sm font-medium text-gray-700 w-12 text-center">{selectedYear}</span>
					<Button
						size="icon"
						variant="ghost"
						onClick={() => handleYearChange(1)}
						className="!rounded-md !p-1.5 border bg-white hover:bg-gray-50 !w-8 !h-8 sm:!w-9 sm:!h-9">
						<FiChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
					</Button>
				</div>
			</div>
			<div style={{ width: '100%', height: 300 }}>
				<ResponsiveContainer>
					<LineChart data={data} margin={{ top: 5, right: 10, left: -25, bottom: 5 }}>
						<CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
						<XAxis dataKey="month" tick={{ fontSize: 11, fill: '#6b7280' }} dy={5} />
						<YAxis tick={{ fontSize: 11, fill: '#6b7280' }} domain={[0, 100]} dx={-5} />
						<Tooltip
							contentStyle={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}
							labelStyle={{ fontWeight: 'bold', color: '#333' }}
						/>
						<Legend
							verticalAlign="top"
							align="left"
							iconType="line"
							wrapperStyle={{ paddingBottom: '20px', paddingTop: '0px', marginLeft: '20px' }}
							payload={[
								{ value: 'Basic Academic Skills', type: 'line', id: 'basic', color: '#3B82F6' },
								{ value: 'Critical Academic Skills', type: 'line', id: 'critical', color: '#A855F7' },
								{ value: 'Personality Development', type: 'line', id: 'personality', color: '#EF4444' },
							]}
							formatter={(value, entry) => (
								<span style={{ color: entry.color, fontSize: '12px', marginRight: '10px' }}>{value}</span>
							)}
						/>
						<Line type="monotone" dataKey="basic" stroke="#3B82F6" strokeWidth={2.5} dot={{ r: 3 }} activeDot={{ r: 5 }} />
						<Line type="monotone" dataKey="critical" stroke="#A855F7" strokeWidth={2.5} dot={{ r: 3 }} activeDot={{ r: 5 }} />
						<Line type="monotone" dataKey="personality" stroke="#EF4444" strokeWidth={2.5} dot={{ r: 3 }} activeDot={{ r: 5 }} />
					</LineChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}

// --- Feature Component: SkillCategoryProgress ---
interface SkillItem {
	id: string
	name: string
	description: string
	score: number
	total: number
}
interface SkillCategoryProgressProps {
	title: string
	icon: IconType
	overallProgress: number
	overallTotal: number
	progressValue: number
	skills: SkillItem[]
	color: 'green' | 'purple' | 'red'
	bgColorClass: string
	iconColorClass: string
	titleColorClass: string
	scrollable?: boolean
}

function SkillCategoryProgress({
	title,
	icon: Icon,
	overallProgress,
	overallTotal,
	progressValue,
	skills,
	color,
	bgColorClass,
	iconColorClass,
	titleColorClass,
	scrollable = false,
}: SkillCategoryProgressProps) {
	const circularProgressColorMap = { green: 'text-green-500', purple: 'text-purple-500', red: 'text-red-500' }
	return (
		<div className={clsx('rounded-xl p-4 shadow-md', bgColorClass)}>
			<div className="flex items-center justify-between mb-3">
				<h4 className={clsx('text-base font-semibold', titleColorClass)}>{title}</h4>
				<Icon className={clsx('w-6 h-6', iconColorClass)} />
			</div>
			<p className="text-xs text-gray-600 mb-1">Overall Progress</p>
			<div className="flex items-center gap-2 mb-4">
				<span className={clsx('text-lg font-bold', titleColorClass)}>
					{overallProgress}/{overallTotal}
				</span>
				<ProgressBarComponent value={progressValue} color={color} height="h-[6px]" />
				<span className={clsx('text-xs font-medium', titleColorClass)}>{overallTotal}</span>
			</div>
			<div className={clsx('space-y-2.5', scrollable && 'max-h-[210px] overflow-y-auto pr-2 custom-scrollbar')}>
				{skills.map(skill => (
					<div key={skill.id} className="flex items-center gap-3 p-2 bg-white rounded-md shadow-sm">
						<CircularProgress
							percentage={skill.score}
							total={skill.total}
							size={36}
							strokeWidth={3.5}
							colorClass={circularProgressColorMap[color]}
							baseColorClass="text-gray-100"
						/>
						<div>
							<p className="text-sm font-medium text-gray-800 leading-tight">{skill.name}</p>
							<p className="text-xs text-gray-500 leading-tight">{skill.description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

// --- Feature Component: TestHistoryTable ---
interface TestResult {
	id: string
	testName: string
	date: string
	time: string
	totalMarks: number
	how: string
	marksObtained: number
	result: 'Pass' | 'Failed'
}
interface TestHistoryTableProps {
	results: TestResult[]
}

function TestHistoryTable({ results }: TestHistoryTableProps) {
	return (
		<div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6">
			<div className="overflow-x-auto">
				<table className="min-w-full divide-y divide-gray-200">
					<thead className="bg-gray-50">
						<tr>
							{['Test', 'Date', 'Time', 'Total Marks', 'How', 'Marks', 'Results'].map(header => (
								<th
									key={header}
									scope="col"
									className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider whitespace-nowrap">
									{header}
								</th>
							))}
						</tr>
					</thead>
					<tbody className="bg-white divide-y divide-gray-200">
						{results.map(row => (
							<tr key={row.id} className="hover:bg-gray-50 transition-colors">
								<td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-800">{row.testName}</td>
								<td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600">{row.date}</td>
								<td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600">{row.time}</td>
								<td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600 text-center">{row.totalMarks}</td>
								<td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600 text-center">{row.how}</td>
								<td className="px-4 py-3 whitespace-nowrap text-sm font-semibold text-gray-800 text-center">
									{row.marksObtained}/{row.totalMarks}
								</td>
								<td className="px-4 py-3 whitespace-nowrap text-sm font-semibold text-center">
									<span
										className={clsx(
											'px-2.5 py-0.5 inline-flex text-xs leading-5 rounded-full font-medium',
											row.result === 'Pass' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
										)}>
										{row.result}
									</span>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			{results.length === 0 && <p className="text-center text-gray-500 py-4">No test history available.</p>}
		</div>
	)
}

// --- Page Component: StudentReportPage ---
// Mock Data (as provided by user, with minor adjustments for consistency)
const studentData = {
	name: 'Shlok Agheda',
	avatarSrc: '/page3/entry/pri.png',
	classTag: 'Class 8A',
	groupTag: 'Group A',
	details: {
		gender: 'Male',
		dob: '15 Jun 2015',
		email: 'example@gm.com',
		contact: '+91 1234567890',
		city: 'Mumbai',
		state: 'Maharashtra',
	},
}
const focusAreasData = [
	{ id: 'academics', label: 'Academics' },
	{ id: 'personality', label: 'Personality Development' },
	{ id: 'brain', label: 'Brain Development' },
]
const overallProgressData = [
	{ month: 'Jan', basic: 30, critical: 20, personality: 25 },
	{ month: 'Feb', basic: 40, critical: 30, personality: 35 },
	{ month: 'Mar', basic: 35, critical: 32, personality: 30 },
	{ month: 'Apr', basic: 50, critical: 45, personality: 40 },
	{ month: 'May', basic: 60, critical: 55, personality: 50 },
	{ month: 'Jun', basic: 55, critical: 60, personality: 58 },
	{ month: 'Jul', basic: 70, critical: 65, personality: 62 },
	{ month: 'Aug', basic: 80, critical: 75, personality: 70 },
	{ month: 'Sep', basic: 75, critical: 70, personality: 68 },
	{ month: 'Oct', basic: 85, critical: 80, personality: 78 },
	{ month: 'Nov', basic: 90, critical: 88, personality: 85 },
	{ month: 'Dec', basic: 95, critical: 92, personality: 90 },
]
const basicAcademicSkills = {
	title: 'Basic Academic Skills',
	icon: FiAward,
	overallProgress: 4,
	overallTotal: 5,
	progressValue: 80,
	color: 'green' as const,
	bgColorClass: 'bg-green-50',
	iconColorClass: 'text-green-600',
	titleColorClass: 'text-green-700',
	skills: Array(6)
		.fill(null)
		.map((_, i) => ({ id: `bas${i + 1}`, name: `Subject ${i + 1}`, description: 'Pedagogy and Plan', score: 3, total: 4 })),
}
const criticalAcademicSkills = {
	title: 'Critical Academic Skills',
	icon: FiTarget,
	overallProgress: 4,
	overallTotal: 5,
	progressValue: 80,
	color: 'purple' as const,
	bgColorClass: 'bg-purple-50',
	iconColorClass: 'text-purple-600',
	titleColorClass: 'text-purple-700',
	skills: [
		{ id: 'cas1', name: 'Spoken English', description: 'Pedagogy and Plan', score: 3, total: 4 },
		{ id: 'cas2', name: 'Vocabulary', description: 'Pedagogy and Plan', score: 3, total: 4 },
		{ id: 'cas3', name: 'Hand Writing', description: 'Pedagogy and Plan', score: 3, total: 4 },
		{ id: 'cas4', name: 'Olympiad', description: 'Pedagogy and Plan', score: 3, total: 4 },
		{ id: 'cas5', name: 'Experiments', description: 'Pedagogy and Plan', score: 3, total: 4 },
		{ id: 'cas6', name: 'Memory Games', description: 'Pedagogy and Plan', score: 3, total: 4 },
	],
}
const lifeSkillEnhancements = {
	title: 'Life skill Enhancements',
	icon: FiHeart,
	overallProgress: 4,
	overallTotal: 5,
	progressValue: 80,
	color: 'red' as const,
	bgColorClass: 'bg-red-50',
	iconColorClass: 'text-red-600',
	titleColorClass: 'text-red-700',
	scrollable: true,
	skills: [
		{ id: 'lse1', name: 'Discipline', description: 'Pedagogy and Plan', score: 3, total: 4 },
		{ id: 'lse2', name: 'Confidence', description: 'Pedagogy and Plan', score: 3, total: 4 },
		{ id: 'lse3', name: 'Presentation', description: 'Pedagogy and Plan', score: 3, total: 4 },
		{ id: 'lse4', name: 'Written', description: 'Pedagogy and Plan', score: 3, total: 4 },
		{ id: 'lse5', name: 'Creativity', description: 'Pedagogy and Plan', score: 3, total: 4 },
		{ id: 'lse6', name: 'Problem Solving', description: 'Pedagogy and Plan', score: 3, total: 4 },
		{ id: 'lse7', name: 'Critical Thinking', description: 'Pedagogy and Plan', score: 3, total: 4 },
		{ id: 'lse8', name: 'Visualization', description: 'Pedagogy and Plan', score: 3, total: 4 },
	],
}
const testHistoryData: TestResult[] = [
	{
		id: 't1',
		testName: 'Mathematics test',
		date: '04/01/2025',
		time: '04:30 pm',
		totalMarks: 100,
		how: '60',
		marksObtained: 80,
		result: 'Pass',
	},
	{
		id: 't2',
		testName: 'Mathematics test',
		date: '04/01/2025',
		time: '04:30 pm',
		totalMarks: 100,
		how: '60',
		marksObtained: 80,
		result: 'Failed',
	},
	{
		id: 't3',
		testName: 'Mathematics test',
		date: '04/01/2025',
		time: '04:30 pm',
		totalMarks: 100,
		how: '60',
		marksObtained: 80,
		result: 'Pass',
	},
	{
		id: 't4',
		testName: 'Mathematics test',
		date: '04/01/2025',
		time: '04:30 pm',
		totalMarks: 100,
		how: '60',
		marksObtained: 80,
		result: 'Failed',
	},
	{
		id: 't5',
		testName: 'Mathematics test',
		date: '04/01/2025',
		time: '04:30 pm',
		totalMarks: 100,
		how: '60',
		marksObtained: 80,
		result: 'Pass',
	},
	{
		id: 't6',
		testName: 'Mathematics test',
		date: '04/01/2025',
		time: '04:30 pm',
		totalMarks: 100,
		how: '60',
		marksObtained: 80,
		result: 'Failed',
	},
]

export default function StudentReportPageCombined() {
	// Renamed to avoid conflict if file is named page.tsx
	const [activeFocus, setActiveFocus] = useState<string>(focusAreasData[0].id)

	return (
		<div className="space-y-6">
			<StudentReportHeader
				studentName={studentData.name}
				avatarSrc={studentData.avatarSrc}
				classTag={studentData.classTag}
				groupTag={studentData.groupTag}
				focusAreas={focusAreasData}
				activeFocusArea={activeFocus}
				onFocusAreaChange={setActiveFocus}
				details={studentData.details}
			/>
			<OverallProgressChart data={overallProgressData} />
			<div className="rounded-2xl border-2 border-dashed border-[#AEC8FF] p-1 sm:p-2">
				{' '}
				{/* Matched blue dashed border color */}
				<div className="bg-white rounded-xl p-4 sm:p-6 space-y-6">
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
						<SkillCategoryProgress {...basicAcademicSkills} />
						<SkillCategoryProgress {...criticalAcademicSkills} />
						<SkillCategoryProgress {...lifeSkillEnhancements} />
					</div>
					<TestHistoryTable results={testHistoryData} />
				</div>
			</div>
		</div>
	)
}
