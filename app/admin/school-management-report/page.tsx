'use client'

import MaxWidthWrapper from '@/components/admin/max-width-wrapper'
import NamingBar from '@/components/admin/ui/naming-bar'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useState } from 'react'
import { Progress } from '@/components/ui/progress'
import AdminAreaChart from '@/components/admin/area-chart'

export default function SchoolManagementReportPage() {
	const [selectedTab, setSelectedTab] = useState<string>('Analysis')

	const tabs = ['Analysis', 'Teachers', 'Students', 'Content']
	return (
		<div>
			<NamingBar name="School Name" />
			<MaxWidthWrapper className="bg-white rounded-2xl py-4 my-4">
				<div className="flex items-center justify-start gap-8 mb-4 font-medium">
					{tabs.map((tab, indx) => (
						<div
							className={cn('text-[#6B7280]', selectedTab === tab && 'text-[#3366FF] underline underline-offset-8 decoration-2')}
							onClick={() => setSelectedTab(tab)}
							key={indx}>
							{tab}
						</div>
					))}
				</div>

				<div className="border p-4 rounded-2xl">
					<div className="flex gap-4 sm:gap-6">
						<div className="w-[70%]">
							<Image
								src={'/images/school.jpg'}
								width={1880}
								height={1250}
								alt="School Management Report"
								className="w-full h-96 rounded-2xl object-cover"
							/>
							<div className="mt-4">
								<p className="font-semibold">School Name</p>
								<p className="text-[#6B7280] text-sm mt-2">Branch Name</p>
							</div>
						</div>
						<div className="w-[30%]">
							<p>
								<span className="font-medium">Email: </span>
								 example@gm.com
							</p>
							<p>
								<span className="font-medium">Contact: </span>
								+91 1234567890
							</p>
							<p>
								<span className="font-medium">City: </span>
								Mumbai
							</p>
							<p>
								<span className="font-medium">State: </span>
								Maharashtra
							</p>
							<p>
								<span className="font-medium">Address: </span>
								Vivamus sit amet sem ac nibh bibendum condimentum vel in sem. Curabitur tincidunt pretiutm faucibus. Vestibulum eget
								pellentesque justo. Vivamus ut pulvinar nibh
							</p>
							<div className="text-[#3366FF] mt-2 w-full space-y-2">
								<p className="border-b border-blue-500">
									<span className="font-medium">Branch 1:</span> Name
								</p>
								<p className="border-b border-blue-500">
									<span className="font-medium">Branch 2:</span> Name
								</p>
								<p className="border-b border-blue-500">
									<span className="font-medium">Branch 3:</span> Name
								</p>
								<p className="border-b border-blue-500">
									<span className="font-medium">Branch 4:</span> Name
								</p>
							</div>
						</div>
					</div>

					<div className="mt-6">
						<p className="mb-3 font-medium">Teachers</p>
						<div className="flex gap-4 overflow-y-scroll scrollbar-hide">
							<TecherChip />
							<TecherChip />
							<TecherChip />
							<TecherChip />
							<TecherChip />
						</div>
					</div>
				</div>

				{/* These are the 3 boxes  */}
				<div className="flex gap-4 my-4">
					<ClassBox />
					<ClassBox />
					<ClassBox />
				</div>

				{/* This is the part where I'll make the progress, top batches and school score */}
				<div className="mt-8">
					<div>
						<div>
							<h2 className="font-semibold text-xl">Progress</h2>
							<AdminAreaChart />
						</div>
					</div>
				</div>
			</MaxWidthWrapper>
		</div>
	)
}

function TecherChip() {
	return (
		<div className="rounded-2xl bg-[#F3F4F6] flex gap-4 items-center p-2 min-w-52 w-52">
			<Image
				src={'/images/teacher.jpg'}
				width={480}
				height={331}
				alt="teacher profile image"
				className="rounded-2xl w-18 h-18 object-cover"
			/>
			<div>
				<p className="font-semibold text-lg">Name</p>
				<p className="text-[#FF3366] text-sm font-medium">Subject</p>
			</div>
		</div>
	)
}

function ClassBox() {
	return (
		<div className="border p-4 rounded-2xl w-full">
			<div className="flex gap-2 items-center mb-4">
				<h1 className="text-[#1D5851] font-semibold text-lg px-2">Class 1</h1>
				<span className="rounded-2xl text-[#F9326F] border px-1 py-0.5 text-[10px] border-[#F9326F]">
					Total Groups <span className="font-bold ml-1">4</span>
				</span>
			</div>

			<div className="bg-[#D3F5FF] rounded-2xl px-4 py-2">
				<h1 className="text-[#1D5851] font-bold">Class Completion Progress</h1>
				<div className="my-2">
					<h3 className="text-sm text-[#5E5E5E]">60%</h3>
					<Progress value={80} className="rounded-full mt-1 bg-white" />
				</div>
			</div>

			<div className="bg-[#F8F8F8] text-[#1D5851] py-4 px-8 mt-4 rounded-xl flex items-center justify-between">
				<p>Students Enrolled</p>
				<p className="text-[#5E5E5E] font-bold">20</p>
			</div>
			<div className="bg-[#F8F8F8] text-[#1D5851] py-4 px-8 mt-4 rounded-xl flex items-center justify-between">
				<p>Average Score</p>
				<p className="text-[#5E5E5E] font-bold">75/100</p>
			</div>
			<div className="bg-[#F8F8F8] text-[#1D5851] py-4 px-8 mt-4 rounded-xl flex items-center justify-between">
				<p>Teachers Onboarded</p>
				<p className="text-[#5E5E5E] font-bold">20</p>
			</div>
		</div>
	)
}
