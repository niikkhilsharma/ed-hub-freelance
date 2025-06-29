'use client'

import MaxWidthWrapper from '@/components/admin/max-width-wrapper'
import NamingBar from '@/components/admin/ui/naming-bar'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useState } from 'react'
import { Progress } from '@/components/ui/progress'
import AdminAreaChart from '@/components/admin/area-chart'
import ArrowControl from '@/components/admin/ui/arrow-control'
import PieChartAdmin from '@/components/admin/pie-chart'
import RadarChartAdmin from '@/components/admin/radar-chart'

export default function SchoolManagementReportPage() {
	const [selectedTab, setSelectedTab] = useState<string>('Analysis')

	const tabs = ['Analysis', 'Teachers', 'Students', 'Content']
	return (
		<div>
			<NamingBar name="School Name" />
			<MaxWidthWrapper className="bg-white rounded-2xl py-4 my-4 overflow-hidden">
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
				<div className="grid sm:grid-cols-2 lg:flex gap-8">
					{/* Progress Chart */}
					<div className="mt-8 w-full">
						<div className="flex items-center justify-between -mb-4">
							<h2 className="font-semibold ml-2">Progress</h2>
							<ArrowControl leftOnClick={() => {}} RightOnClick={() => {}} text="June 2025" />
						</div>
						<div className="mr-4">
							<AdminAreaChart />
						</div>
					</div>

					{/* Top Batches */}
					<div className="mt-8 w-full">
						<div className="flex items-center justify-between mb-4">
							<h2 className="font-semibold ml-2">Top Batches</h2>
						</div>
						<div className="space-y-2">
							{[
								{ name: 'A', score: '120k', progress: 100 },
								{ name: 'B', score: '80k', progress: 50 },
								{ name: 'C', score: '70k', progress: 45 },
								{ name: 'D', score: '50k', progress: 33 },
								{ name: 'E', score: '25k', progress: 23 },
							].map((batch, indx) => (
								<div key={indx} className="relative" style={{ width: `${batch.progress}%` }}>
									<Progress value={100} innerClass="bg-[#3366FF] rounded-full" className="bg-white h-7 rounded-full" />

									<div className="absolute top-1/2 -translate-y-1/2 text-white left-2 text-sm">{batch.name}</div>
									<div className="absolute top-1/2 -translate-y-1/2 text-white right-2 text-[10px]">{batch.score}</div>
								</div>
							))}
						</div>
					</div>

					{/* School Score */}
					<div className="pt-8 overflow-hidden sm:col-span-2 lg:max-w-xs w-full flex flex-col justify-between items-center gap-20 border border-[#F2F2F2] max-h-80 shadow-xs rounded-2xl">
						<div className="flex items-center justify-between mb-12">
							<h2 className="font-semibold ml-2">School Score</h2>
						</div>
						<div className="relative">
							<div className="relative">
								<div className="flex justify-center items-center w-full scale-150" suppressHydrationWarning>
									<PieChartAdmin />
								</div>

								<div className="w-[88%] rounded-full h-[88%] aspect-square absolute top-0 left-1/2 -translate-x-1/2 mt-4 overflow-hidden">
									<svg viewBox="0 0 100 100" className="absolute top-0 left-0 w-full h-full">
										<circle
											cx="50"
											cy="50"
											r="48"
											fill="none"
											stroke="#7A7A7A"
											strokeWidth="1"
											strokeDasharray="1 6"
											strokeLinecap="butt"
										/>
									</svg>
								</div>
								<div className="w-full h-full aspect-square bg-white absolute top-11/12 -translate-y-1/2 mt-4 z-10"></div>
							</div>
							<div className="text-4xl font-semibold absolute top-2/5 -translate-y-1/2 left-1/2 -translate-x-1/2">50</div>
						</div>
					</div>
				</div>

				{/* Weakness and improvement */}
				<div className="my-8 grid grid-cols-1 lg:grid-cols-2 gap-4 xl:gap-8">
					<div className="">
						<div className="flex items-center justify-between -mb-4">
							<h2 className="font-semibold ml-2">Weakness</h2>
						</div>
						<div className="flex flex-col sm:flex-row gap-8 items-center mt-8">
							<RadarChartAdmin />
							<ul className="px-4 sm:px-0 list-disc sm:text-nowrap text-xs lg:text-[0.60rem] xl:text-xs">
								<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
								<li>Aliquam hendrerit augue at nulla imperdiet feugiat.</li>
								<li>Sed dapibus est et leo luctus cursus.</li>
								<li>Cras interdum tortor vestibulum sagittis efficitur.</li>
								<li>Proin interdum justo et nunc dapibus, a pulvinar urna venenatis.</li>
								<li>Fusce id risus vitae enim consequat pulvinar non non dui.</li>
								<li>Ut eu massa tempor, ultricies sapien quis, gravida lectus.</li>
								<li>Aliquam id lectus vulputate, laoreet nisl sit amet, pharetra elit.</li>
								<li>Proin interdum justo et nunc dapibus, a pulvinar urna venenatis.</li>
								<li>Fusce id risus vitae enim consequat pulvinar non non dui.</li>
								<li>Ut eu massa tempor, ultricies sapien quis, gravida lectus.</li>
								<li>Aliquam id lectus vulputate, laoreet nisl sit amet, pharetra elit.</li>
							</ul>
						</div>
					</div>
					<div className="">
						<div className="flex items-center justify-between -mb-4">
							<h2 className="font-semibold ml-2">Improvements</h2>
						</div>
						<div className="flex flex-col sm:flex-row gap-8 items-center mt-8">
							<RadarChartAdmin />
							<ul className="px-4 sm:px-0 list-disc sm:text-nowrap text-xs lg:text-[0.60rem] xl:text-xs">
								<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
								<li>Aliquam hendrerit augue at nulla imperdiet feugiat.</li>
								<li>Sed dapibus est et leo luctus cursus.</li>
								<li>Cras interdum tortor vestibulum sagittis efficitur.</li>
								<li>Proin interdum justo et nunc dapibus, a pulvinar urna venenatis.</li>
								<li>Fusce id risus vitae enim consequat pulvinar non non dui.</li>
								<li>Ut eu massa tempor, ultricies sapien quis, gravida lectus.</li>
								<li>Aliquam id lectus vulputate, laoreet nisl sit amet, pharetra elit.</li>
								<li>Proin interdum justo et nunc dapibus, a pulvinar urna venenatis.</li>
								<li>Fusce id risus vitae enim consequat pulvinar non non dui.</li>
								<li>Ut eu massa tempor, ultricies sapien quis, gravida lectus.</li>
								<li>Aliquam id lectus vulputate, laoreet nisl sit amet, pharetra elit.</li>
							</ul>
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
