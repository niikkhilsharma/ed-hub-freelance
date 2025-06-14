'use client'

import { useState } from 'react'
import { TestList } from '@/components/page3/test-list'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const scheduledTests = [
	{
		id: '1',
		title: 'Test Title',
		batch: 'Batch 1',
		date: 'Scheduled for May 28, 2025',
	},
	{
		id: '2',
		title: 'Test Title',
		batch: 'Batch 1',
		date: 'Scheduled for May 28, 2025',
	},
	{
		id: '3',
		title: 'Test Title',
		batch: 'Batch 1',
		date: 'Scheduled for May 28, 2025',
	},
	{
		id: '4',
		title: 'Test Title',
		batch: 'Batch 1',
		date: 'Scheduled for May 28, 2025',
	},
	{
		id: '5',
		title: 'Test Title',
		batch: 'Batch 1',
		date: 'Scheduled for May 28, 2025',
		status: 'Ongoing',
	},
	{
		id: '6',
		title: 'Test Title',
		batch: 'Batch 1',
		date: 'Scheduled for May 28, 2025',
	},
	{
		id: '7',
		title: 'Test Title',
		batch: 'Batch 1',
		date: 'Scheduled for May 28, 2025',
	},
	{
		id: '8',
		title: 'Test Title',
		batch: 'Batch 1',
		date: 'Scheduled for May 28, 2025',
	},
]

const completedTests = [
	{
		id: '1',
		title: 'Test Title',
		batch: 'Batch 1',
		date: 'Planned for May 28, 2025',
		studentsEnrolled: 40,
		studentsAttended: 40,
		averageScores: 40,
	},
	{
		id: '2',
		title: 'Test Title',
		batch: 'Batch 1',
		date: 'Planned for May 28, 2025',
		studentsEnrolled: 40,
		studentsAttended: 40,
		averageScores: 40,
	},
	{
		id: '3',
		title: 'Test Title',
		batch: 'Batch 1',
		date: 'Planned for May 28, 2025',
		studentsEnrolled: 40,
		studentsAttended: 40,
		averageScores: 40,
	},
	{
		id: '4',
		title: 'Test Title',
		batch: 'Batch 1',
		date: 'Planned for May 28, 2025',
		studentsEnrolled: 40,
		studentsAttended: 40,
		averageScores: 40,
	},
]

const savedTests = [
	{
		id: '1',
		title: 'Test Title',
		batch: 'Batch 1',
		date: 'Scheduled for May 28, 2025',
	},
	{
		id: '2',
		title: 'Test Title',
		batch: 'Batch 1',
		date: 'Scheduled for May 28, 2025',
	},
	{
		id: '3',
		title: 'Test Title',
		batch: 'Batch 1',
		date: 'Scheduled for May 28, 2025',
	},
	{
		id: '4',
		title: 'Test Title',
		batch: 'Batch 1',
		date: 'Scheduled for May 28, 2025',
	},
	{
		id: '5',
		title: 'Test Title',
		batch: 'Batch 1',
		date: 'Scheduled for May 28, 2025',
	},
	{
		id: '6',
		title: 'Test Title',
		batch: 'Batch 1',
		date: 'Scheduled for May 28, 2025',
	},
	{
		id: '7',
		title: 'Test Title',
		batch: 'Batch 1',
		date: 'Scheduled for May 28, 2025',
	},
	{
		id: '8',
		title: 'Test Title',
		batch: 'Batch 1',
		date: 'Scheduled for May 28, 2025',
	},
]
const CustomTestTabs = ({
	tabs,
	activeTab,
	onChange,
}: {
	tabs: string[]
	activeTab: string
	onChange: (tab: string) => void
}) => {
	return (
		<div className="flex w-fit">
			{tabs.map(tab => (
				<button
					key={tab}
					onClick={() => onChange(tab)}
					className={`px-6 py-3 font-medium cursor-pointer ${
						activeTab === tab ? 'text-[#FF3366] border-b-2 border-pink-500' : 'text-[#6B7280] hover:text-gray-900'
					}`}>
					{tab}
				</button>
			))}
		</div>
	)
}

export default function TestsPage() {
	const [activeTab, setActiveTab] = useState('Scheduled Test')

	return (
		<div className="min-h-screen bg-[#eeeeee] py-6 px-4">
			<div className="container bg-white max-w-7xl rounded-2xl mx-auto px-4">
				<div className="bg-white rounded-lg p-6">
					<div className="grid grid-cols-1 md:grid-cols-7 gap-6">
						<div className="md:col-span-5">
							<div className="flex h-fit justify-between items-center mb-4">
								<CustomTestTabs tabs={['Scheduled Test', 'Completed Test', 'Saved']} activeTab={activeTab} onChange={setActiveTab} />
								<div>
									<Select defaultValue="all">
										<SelectTrigger className="w-fit font-medium rounded-2xl bg-[#F9FAFB] text-black border border-[#E5E7EB]">
											<SelectValue placeholder="All Batches" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="all">All Batches</SelectItem>
											<SelectItem value="batch1">Batch 1</SelectItem>
											<SelectItem value="batch2">Batch 2</SelectItem>
										</SelectContent>
									</Select>
								</div>
							</div>

							{activeTab === 'Scheduled Test' && <TestList tests={scheduledTests} type="scheduled" />}
							{activeTab === 'Completed Test' && <TestList tests={completedTests} type="completed" />}
							{activeTab === 'Saved' && <TestList tests={savedTests} type="saved" />}
						</div>

						<div className="md:col-span-2 ">
							<div className="flex justify-end items-center mb-6">
								<Button className="bg-[#3366FF] hover:bg-blue-600 text-white font-semibold rounded-full text-md py-6 px-6">
									Create BW Test
								</Button>
							</div>
							<TestAnalytics month="May" year={2025} complete={2} incomplete={1} totalTests={20} averageScore="15%" />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi'

interface TestAnalyticsProps {
	month: string
	year: number
	complete: number
	incomplete: number
	totalTests: number
	averageScore: string
}
function TestAnalytics({ month, year, complete, incomplete, totalTests, averageScore }: TestAnalyticsProps) {
	return (
		<div className="space-y-4 w-full p-4 max-w-md border border-[#E5E7EB] rounded-2xl bg-white">
			{/* Top bar + stats */}
			<div>
				<div className="flex justify-between items-center mb-4">
					<h3 className="text-md font-semibold">Test</h3>
					<div className="flex items-center gap-2.5 text-sm border border-[#E5E7EB] text-black bg-[#F9FAFB] px-3 py-2 rounded-xl">
						<FiArrowLeftCircle className="w-4 h-4 cursor-pointer hover:text-black" />
						<span>June 2025</span>
						<FiArrowRightCircle className="w-4 h-4 cursor-pointer hover:text-black" />
					</div>
				</div>

				<div className="flex justify-between mx-2">
					<div className="flex flex-col justify-center items-center">
						<p className="text-sm text-[#6B7280]">Complete</p>
						<p className="text-md font-semibold">
							{complete}/{totalTests}
						</p>
					</div>
					<div className="flex flex-col justify-center items-center">
						<p className="text-sm text-[#6B7280]">Incomplete</p>
						<p className="text-md font-semibold text-[#FF3366]">{incomplete}</p>
					</div>
				</div>
			</div>

			{/* Average Scores */}
			<div className="bg-[#F3F4F6] rounded-2xl p-4 py-3">
				<div className="flex justify-between items-center">
					<p className="text-sm text-[#6B7280]">Average Scores</p>
					<p className="text-sm font-medium text-[#3366FF]">{averageScore}</p>
				</div>
			</div>
		</div>
	)
}
