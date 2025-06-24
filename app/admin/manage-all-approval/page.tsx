'use client'

import { useState } from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Card } from '@/components/ui/card'
import MaxWidthWrapper from '@/components/admin/max-width-wrapper'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ChevronDown, Search } from 'lucide-react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import NamingBar from '@/components/admin/ui/naming-bar'

export default function ManageAllApprovals() {
	const tabs = ['Schools', 'Teachers', 'Students'] as const;
	type Tab = typeof tabs[number]; // "Schools" | "Teachers" | "Students"

	const [activeTab, setActiveTab] = useState<Tab>('Schools');

	return (
		<div className="bg-gray-100/60 min-h-screen">
			<NamingBar name="Manage Approvals" />
			<MaxWidthWrapper className="bg-white rounded-2xl my-10 py-4">
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

				{activeTab === 'Schools' && (
					<div className="grid gap-3 sm:gap-4 grid-cols-1 lg:grid-cols-2">
						{Array.from({ length: 6 }).map((_, i) => (
							<SchoolCard key={i} />
						))}
					</div>
				)}

				{activeTab === 'Teachers' && (
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						{Array.from({ length: 12 }).map((_, i) => (
							<TeacherRectangle key={i} />
						))}
					</div>
				)}

				{activeTab === 'Students' && (
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						{Array.from({ length: 12 }).map((_, i) => (
							<StudentRectangle key={i} /> // replace with StudentRectangle if different
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

function SchoolCard() {
	return (
		<Card className="shadow-none bg-[#F9FAFB] flex flex-col sm:flex-row gap-3 sm:gap-4 p-3 sm:p-4">
			<div className="w-full sm:w-52 h-44">
				<Image
					src="/images/school-image.jpg"
					alt="School"
					width={1880}
					height={1250}
					className="w-full h-full sm:w-52 object-cover rounded-xl"
				/>
			</div>
			<div className="flex flex-col justify-between gap-2 flex-1">
				<div>
					<h2 className="font-semibold text-sm sm:text-base truncate">School Name</h2>
					<p className="text-[#6B7280] text-xs font-light truncate">Address</p>
					<p className="text-[#6B7280] text-xs font-light truncate">Detail 1</p>
					<p className="text-[#6B7280] text-xs font-light truncate">Detail 2</p>
				</div>
				<div className="flex gap-4 justify-end items-center mt-auto">
					<Button variant="secondary" className="bg-[#FF33661A] text-[#FF3366] rounded-full px-6">
						Reject
					</Button>
					<Button className="rounded-full px-6">Approve</Button>
				</div>
			</div>
		</Card>
	)
}

function TeacherRectangle() {
	return (
		<div className="bg-[#F3F4F6] rounded-2xl px-2 py-1.5 border border-[#B0B0B0] flex items-center gap-1">
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
				<div className="flex gap-2 items-center">
					<Button className="rounded-full px-2">Approve</Button>
					<Button className="rounded-full text-[#FF3366] bg-[#FF33661A] px-2">Reject</Button>
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
				<div className="flex gap-2 items-center">
					<Button className="rounded-full px-2">Approve</Button>
					<Button className="rounded-full text-[#FF3366] bg-[#FF33661A] px-2">Reject</Button>
				</div>
			</div>
		</div>
	)
}
