'use client'

import MaxWidthWrapper from '@/components/admin/max-width-wrapper'
import { Input } from '@/components/ui/input'
import { ChevronDown, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import NamingBar from '@/components/admin/ui/naming-bar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export default function StudentManagement() {
	const [activeTab, setActiveTab] = useState<'Analysis' | 'Content' | 'Teachers' | 'Student'>('Teachers')
	const tabs: Array<'Analysis' | 'Schools' | 'Teachers' | 'Student' | 'Content'> = [
		'Analysis',
		'Teachers',
		'Student',
		'Content',
	]

	const classesNames = ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5']
	const [activeClass, setActiveClass] = useState(classesNames[0])

	return (
		<div className="bg-gray-100/60 min-h-screen">
			<NamingBar name="School Name" />
			<MaxWidthWrapper className="bg-white rounded-2xl my-8 py-4">
				<SearchFilterBar />
				<div className="my-6 flex items-center justify-start gap-4 sm:gap-8 font-medium">
					{tabs.map(tab => (
						<div
							key={tab}
							onClick={() => setActiveTab(tab as any)}
							className={cn(
								'cursor-pointer',
								activeTab === tab ? 'text-[#3366FF] underline underline-offset-8' : 'text-[#6B7280]'
							)}>
							{tab}
						</div>
					))}
				</div>
				{/* Classes Names */}
				<div className="flex justify-between sm:justify-center gap-2 sm:gap-6 items-center w-full flex-wrap sm:flex-nowrap rounded-2xl border border-[#E5E7EB] p-2 overflow-scroll">
					{classesNames.map((name, indx) => (
						<div
							key={indx}
							onClick={() => setActiveClass(name)}
							className={cn(activeClass === name ? 'bg-[#FF3366] text-white' : 'text-[#6B7280]', 'p-2 rounded-2xl text-nowrap')}>
							{name}
						</div>
					))}
				</div>
				{activeTab === 'Teachers' && (
					<div className="py-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
						{Array.from({ length: 12 }).map((_, i) => (
							<TeacherRectangle key={i} />
						))}
					</div>
				)}

				{activeTab === 'Student' && (
					<div className="py-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
						{Array.from({ length: 12 }).map((_, i) => (
							<StudentRectangle key={i} />
						))}
					</div>
				)}

				{activeTab === 'Content' && (
					<div className="py-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
						{Array.from({ length: 12 }).map((_, i) => (
							<ContentCard key={i} />
						))}
					</div>
				)}
			</MaxWidthWrapper>
		</div>
	)
}

function SearchFilterBar() {
	return (
		<div className="flex flex-wrap md:flex-nowrap gap-4 items-center">
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

function TeacherRectangle() {
	return (
		<div className="bg-[#F3F4F6] rounded-2xl px-2 py-1.5 flex items-center gap-2">
			<Image
				src="/images/admin-teacher-profile.png"
				alt="Teacher Profile"
				width={228}
				height={228}
				className="w-20 h-20 aspect-square"
			/>
			<div className="ml-1 flex items-center justify-between w-full">
				<div>
					<h2 className="text-lg font-semibold">Name</h2>
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
		<div className="bg-[#F3F4F6] rounded-2xl px-2 py-2 border border-[#B0B0B0] flex items-center gap-2">
			<Image
				src="/images/admin-student-profile.png"
				alt="Teacher Profile"
				width={228}
				height={228}
				className="w-20 h-20 aspect-square"
			/>
			<div className="flex flex-col justify-between items-start">
				<h2 className="text-lg font-light">Student Name</h2>
				<div className="flex flex-col gap-0.5 mt-1">
					<h4 className="text-[#6B7280] text-sm">Level / Grade</h4>
					<h4 className="text-[#6B7280] text-sm">Group</h4>
				</div>
			</div>
		</div>
	)
}

function ContentCard() {
	return (
		<div className="rounded-2xl bg-[#F9FAFB] border border-[#E5E7EB] p-2 flex gap-4">
			<div className="bg-[#99DEFF] p-8 w-fit rounded-2xl">
				<Image src={'/svg/box.png'} alt="Content" width={125} height={114} className="w-16 h-12 aspect-square" />
			</div>
			<div className="py-1 flex flex-col justify-between items-start w-full">
				<h4 className="font-medium">Folder Name</h4>
				<p>100 Files</p>
				<Button className="bg-[#F3F4F6] hover:bg-[#F3F4F6]/90 rounded-full text-[#6B7280] flex items-center justify-center gap-2 w-full">
					<Image src={'/svg/setting.png'} alt="setting" width={20} height={20} className="ml-2 w-4 h-4" />
					Manage Access
				</Button>
			</div>
		</div>
	)
}
