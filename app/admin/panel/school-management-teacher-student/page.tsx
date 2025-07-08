'use client'

import { useState } from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import MaxWidthWrapper from '@/components/admin/max-width-wrapper'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ChevronDown, Search } from 'lucide-react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import NamingBar from '@/components/admin/ui/naming-bar'

export default function ManageAllApprovals() {
	const tabs = ['Analysis', 'Teachers', 'Students', 'Content'] as const
	type Tab = (typeof tabs)[number] // "Schools" | "Teachers" | "Students"

	const [activeTab, setActiveTab] = useState<Tab>('Teachers')

	const studentClass = [
		{ className: 'Class 1', active: true },
		{ className: 'Class 2', active: false },
		{ className: 'Class 3', active: false },
		{ className: 'Class 4', active: false },
	]

	return (
		<div className="bg-gray-100/60 min-h-screen">
			<NamingBar name="School Name" />
			<div className="px-4">
				<MaxWidthWrapper className="bg-white rounded-2xl my-10 py-4 ">
					<SearchFilterBar />

					<div className="my-6 flex items-center justify-start gap-4 sm:gap-8 font-medium">
						{tabs.map(tab => (
							<div
								key={tab}
								onClick={() => setActiveTab(tab)}
								className={cn(
									'cursor-pointer',
									activeTab === tab ? 'text-[#3366FF] underline underline-offset-8' : 'text-[#6B7280]'
								)}>
								{tab}
							</div>
						))}
					</div>

					<div className="flex justify-center items-center gap-8 border rounded-2xl py-2 my-4 mr-4">
						{studentClass.map((cls, indx) => (
							<div key={indx} className={cn('text-white p-2 rounded-2xl', cls.active ? 'bg-[#FF3366]' : 'text-[#6B7280]')}>
								{cls.className}
							</div>
						))}
					</div>

					{activeTab === 'Teachers' && (
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[80vh] overflow-y-auto pr-4">
							{Array.from({ length: 100 }).map((_, i) => (
								<TeacherRectangle key={i} />
							))}
						</div>
					)}

					{activeTab === 'Students' && (
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[80vh] overflow-y-auto pr-4">
							{Array.from({ length: 100 }).map((_, i) => (
								<StudentRectangle key={i} /> // replace with StudentRectangle if different
							))}
						</div>
					)}
				</MaxWidthWrapper>
			</div>
		</div>
	)
}

function SearchFilterBar() {
	return (
		<div className="flex flex-wrap md:flex-nowrap gap-4 items-center">
			<div className="relative w-full">
				<Input className="border-black rounded-full pl-9" placeholder="Search" />
				<Search className="absolute -top-1/12 translate-y-1/2 left-2 h-5" />
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

function TeacherRectangle() {
	return (
		<div className="bg-[#F3F4F6] rounded-2xl px-2 py-1.5 flex items-center gap-1">
			<Image
				src="/images/admin-teacher-profile.png"
				alt="Teacher Profile"
				width={228}
				height={228}
				className="w-20 h-20 aspect-square"
			/>
			<div className="ml-1 flex items-center justify-between w-full">
				<div>
					<h2 className="text-lg font-bold">Name</h2>
					<h4 className="text-[#FF3366]">Subject</h4>
					<h4 className="text-[#6B7280] text-xs">Class Assigned</h4>
					<h4 className="text-[#6B7280] text-xs">Batch Assigned</h4>
				</div>
			</div>
		</div>
	)
}

function StudentRectangle() {
	return (
		<div className="bg-[#F3F4F6] rounded-2xl px-2 py-2 border border-[#B0B0B0] flex items-center gap-1">
			<Image
				src="/images/admin-student-profile.png"
				alt="Teacher Profile"
				width={228}
				height={228}
				className="w-20 h-20 aspect-square"
			/>
			<div className="ml-1 flex items-center justify-between w-full">
				<div>
					<h2>Student Name</h2>
					<h4 className="text-[#6B7280] text-xs">Cource Name</h4>
					<h4 className="text-[#6B7280] text-xs">Level / Grade</h4>
					<h4 className="text-[#6B7280] text-xs">Group</h4>
				</div>
			</div>
		</div>
	)
}
