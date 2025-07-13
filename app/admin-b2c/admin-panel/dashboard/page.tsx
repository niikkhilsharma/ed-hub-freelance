'use client'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ChartBarLabelCustom } from '@/components/charts/chart-bar-label-custom'
import SearchSvg from '@/public/svg/search.svg'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import ArrowControl from '@/components/admin/ui/arrow-control'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { ChevronDown, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import AdminB2CWrapper from '@/components/b2c-admin/common-component/AdminB2CPageWrapper'
import { useState } from 'react'
import TabSwitch from '@/components/common-components/TabSwitch'
import AdminToolkit from './AdminToolkit'
import Overview from './AdminOverview'
import ArrowUi from './ArrowUi'
import { HiChevronDown } from 'react-icons/hi'
import Link from 'next/link'
import AdminAreaChart from '@/components/admin/area-chart'

export default function DashboardPage() {
	const tabs = ["Online", "Offline"]
	const [activeTab, setActiveTab] = useState(tabs[0])
	return (
		<AdminB2CWrapper>
			<div className="rounded-2xl p-2 sm:p-4 my-4 sm:my-6"
				style={{
					backgroundImage: "url('/admin/bg-pattern.png')",
					backgroundSize: "cover",
				}}>
				<div className="flex bg-white flex-col gap-4 sm:gap-6 p-2 sm:p-4 border rounded-2xl">
					{/* Stats Cards */}
					<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
						<Link className='w-full sm:w-1/3' href={"/admin-b2c/admin-panel/all-institutions"}>
							<Card className="shadow-none bg-[#F9FAFB] w-full">
								<CardHeader className="flex flex-col justify-center items-center gap-2 p-4 sm:p-6">
									<CardTitle className="text-[#3366FF] text-2xl sm:text-3xl lg:text-4xl">10</CardTitle>
									<CardDescription className="text-[#000000] font-semibold tracking-wide text-sm sm:text-base">
										Institues
									</CardDescription>
								</CardHeader>
							</Card>
						</Link>
						<Link className='w-full sm:w-1/3' href={"/admin-b2c/admin-panel/all-teachers"}>
							<Card className="shadow-none bg-[#F9FAFB] w-full">
								<CardHeader className="flex flex-col justify-center items-center gap-2 p-4 sm:p-6">
									<CardTitle className="text-[#3366FF] text-2xl sm:text-3xl lg:text-4xl">250</CardTitle>
									<CardDescription className="text-[#000000] font-semibold tracking-wide text-sm sm:text-base">
										Teachers
									</CardDescription>
								</CardHeader>
							</Card>
						</Link>
						<Link className='w-full sm:w-1/3' href={"/admin-b2c/admin-panel/all-students"}>
							<Card className="shadow-none bg-[#F9FAFB] w-full">
								<CardHeader className="flex flex-col justify-center items-center gap-2 p-4 sm:p-6">
									<CardTitle className="text-[#3366FF] text-2xl sm:text-3xl lg:text-4xl">6000</CardTitle>
									<CardDescription className="text-[#000000] font-semibold tracking-wide text-sm sm:text-base">
										Students
									</CardDescription>
								</CardHeader>
							</Card>
						</Link>
						<Link className='w-full sm:w-1/3' href={"/admin-b2c/admin-panel/all-mentors"}>
							<Card className="shadow-none bg-[#F9FAFB] w-full">
								<CardHeader className="flex flex-col justify-center items-center gap-2 p-4 sm:p-6">
									<CardTitle className="text-[#3366FF] text-2xl sm:text-3xl lg:text-4xl">15</CardTitle>
									<CardDescription className="text-[#000000] font-semibold tracking-wide text-sm sm:text-base">
										Mentors
									</CardDescription>
								</CardHeader>
							</Card>
						</Link>
					</div>

					{/* Progress and Chart Section */}
					<div className="flex flex-col lg:flex-row gap-4">
						{/* Progress Card */}
						<Card className="shadow-none bg-[#F9FAFB] w-full lg:w-[45%] py-4 space-y-2">
							<CardHeader className="flex flex-col sm:flex-row gap-4 px-2 sm:px-4 py-0">
								<div className="relative w-full">
									<Input
										className="border-[#6B7280] w-full rounded-full pl-10 pr-4 placeholder:tracking-wide placeholder:text-sm sm:placeholder:text-base border-[1.5px] placeholder:font-light"
										placeholder="Search"
									/>
									<Image
										src={SearchSvg}
										alt="Search"
										width={20}
										height={20}
										className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5"
									/>
								</div>
								<div>
									<ArrowUi leftOnClick={() => { }} RightOnClick={() => { }} text="Filter" />
								</div>
							</CardHeader>
							<div className="px-2 sm:px-4">
								<div className="border rounded-2xl p-3 sm:p-4 bg-white overflow-hidden">
									<div className="flex flex-row justify-between items-center gap-2 mb-4 sm:mb-0">
										<h3 className="text-sm sm:text-base font-medium">Overall Progress</h3>
										<ArrowControl RightOnClick={() => { }} text="June 2025" leftOnClick={() => { }} />
									</div>
									<div className="w-full">
												
												<div className="mr-4">
													<AdminAreaChart />
												</div>
											</div>
								</div>
							</div>
						</Card>

						{/* Chart Card */}
						<div className="w-full lg:w-[55%] border rounded-2xl p-3 sm:p-4 bg-[#F9FAFB] flex flex-col justify-between gap-4 items-start">
							<div className="flex w-full flex-wrap gap-4 justify-between">
								<ArrowUi leftOnClick={() => { }} RightOnClick={() => { }} text="Online" />
								<div className="flex flex-wrap gap-4.5">
									{Array(4)
										.fill(null)
										.map((_, index) => (
											<div
												key={index}
												className="flex items-center justify-between px-2 py-1.25 border border-gray-300 rounded-xl cursor-pointer bg-[#F9FAFB] text-sm text-black tracking-tight font-normal"
											>
												Filter
												<HiChevronDown className="w-5 h-5 ml-6 text-black" />
											</div>
										))}
								</div>
							</div>
							<div className="flex w-full flex-col xl:flex-row justify-center gap-4 items-start xl:items-center">
								<div className="w-full xl:flex-1">

									<h3 className="text-sm sm:text-base font-medium mb-2 sm:mb-4">Top Institute</h3>
									<ChartBarLabelCustom />
								</div>
								<div className="w-full xl:w-auto xl:">
									<div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-1 gap-2 xl:gap-1">
										<div className="flex justify-start xl:justify-center items-center gap-2 flex-nowrap">
											<div className="font-bold text-nowrap text-sm">A :</div>
											<div className="font-medium text-nowrap text-sm truncate">Institute Name</div>
										</div>
										<div className="flex justify-start xl:justify-center items-center gap-2 flex-nowrap">
											<div className="font-bold text-nowrap text-sm">B :</div>
											<div className="font-medium text-nowrap text-sm truncate">Institute Name</div>
										</div>
										<div className="flex justify-start xl:justify-center items-center gap-2 flex-nowrap">
											<div className="font-bold text-nowrap text-sm">C :</div>
											<div className="font-medium text-nowrap text-sm truncate">Institute Name</div>
										</div>
										<div className="flex justify-start xl:justify-center items-center gap-2 flex-nowrap">
											<div className="font-bold text-nowrap text-sm">D :</div>
											<div className="font-medium text-nowrap text-sm truncate">Institute Name</div>
										</div>
										<div className="flex justify-start xl:justify-center items-center gap-2 flex-nowrap">
											<div className="font-bold text-nowrap text-sm">E :</div>
											<div className="font-medium text-nowrap text-sm truncate">Institute Name</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Admin Toolkit */}
			<AdminToolkit />

			{/* Admin Overview */}
			<Overview />
			{/* Institue Cards Grid */}
			<div className="rounded-3xl bg-white py-2 ">
				<div className="pt-2 px-4">
					<SearchFilterBar />
				</div>
				<div className="px-4 pt-4 sm:pt-6">
					<TabSwitch tabs={tabs} selected={activeTab} onChange={setActiveTab} />
				</div>
				<div className=" sm:px-4 sm:pb-4 my-0 sm:mb-2 max-h-screen overflow-y-auto custom-scrollbar-thin lg:custom-peach-scrollbar mr-1 grid gap-3 sm:gap-4 grid-cols-1 lg:grid-cols-2">
					<SchoolCard />
					<SchoolCard />
					<SchoolCard />
					<SchoolCard />
					<SchoolCard />
					<SchoolCard />
				</div>
			</div>
		</AdminB2CWrapper>
	)
}

const SchoolCard = () => {
	return (
		<Link href={"/admin-b2c/admin-panel/institute-profile"}>
		<Card className="shadow-none rounded-2xl bg-[#F9FAFB] flex flex-col w-full sm:flex-row gap-3 sm:gap-4 p-3 sm:p-4">
			<div className="w-full sm:w-48">
				<Image
					src={'/common-images/institute.jpg'}
					alt="School"
					width={1880}
					height={1250}
					className="w-full h-full sm:w-48 object-cover rounded-xl"
				/>
			</div>
			<div className="flex flex-col justify-between gap-2 sm:gap-2 flex-1">
				<div>
					<h2 className="font-semibold text-sm sm:text-base truncate">Institute Name</h2>
					<p className="text-[#6B7280] text-xs sm:text-xs font-light truncate">Address</p>
					<p className="text-[#6B7280] text-xs sm:text-xs font-light truncate">Detail 1</p>
					<p className="text-[#6B7280] text-xs sm:text-xs font-light truncate">Detail 2</p>
					<p className="text-[#6B7280] text-xs sm:text-xs font-light truncate">Detail 3</p>
					<p className="text-[#6B7280] text-xs sm:text-xs font-light truncate">Detail 4</p>
				</div>
				{/* Stats */}
				<div className="flex gap-2 lg:gap-4 pb-1 justify-start sm:justify-between items-center">
					<div className="px-3 sm:px-4 py-2 rounded-2xl border flex justify-center flex-col items-center gap-1 w-full">
						<h1 className="text-lg sm:text-lg text-[#3366FF] font-semibold">250</h1>
						<h2 className="text-xs font-semibold">Teachers</h2>
					</div>
					<div className="px-3 sm:px-4 py-2 rounded-2xl border flex justify-center flex-col items-center gap-1 w-full">
						<h1 className="text-lg sm:text-lg text-[#3366FF] font-semibold">6000</h1>
						<h2 className="text-xs font-semibold">Students</h2>
					</div>
				</div>
			</div>
		</Card>
		</Link>
	)
}

function SearchFilterBar() {
	return (
		<div className="flex pl-4 flex-wrap mb-2 md:mb-0 md:flex-nowrap gap-4 items-center">
			<div className="relative w-full">
				<Input className="border-black rounded-full pl-9" placeholder="Search" />
				<Search className="absolute top-0 translate-y-1/4 left-2" />
			</div>
			{[1, 2, 3].map(n => (
				<DropdownMenu key={n}>
					<DropdownMenuTrigger asChild>
						<Button className="bg-[#F9FAFB] border border-[#E5E7EB] hover:bg-[#F9FAFB]/90 rounded-xl font-light text-black">
							Filter {n} <ChevronDown />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuItem>Profile</DropdownMenuItem>
						<DropdownMenuItem>Billing</DropdownMenuItem>
						<DropdownMenuItem>Team</DropdownMenuItem>
						<DropdownMenuItem>Subscription</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			))}
		</div>
	)
}
