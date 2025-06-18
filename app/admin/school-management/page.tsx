'use client'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Card } from '@/components/ui/card'

import MaxWidthWrapper from '@/components/admin/max-width-wrapper'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ChevronDown, Search } from 'lucide-react'
import Image from 'next/image'

export default function SchoolManagement() {
	return (
		<div className="bg-gray-100/60 p-4">
			<MaxWidthWrapper className="bg-white p-4 rounded-2xl">
				<SearchFilterBar />
				<div className="rounded-2xl bg-white px-2 mt-4 sm:mt-6 grid gap-3 sm:gap-4 grid-cols-1 lg:grid-cols-2">
					<SchoolCard />
					<SchoolCard />
					<SchoolCard />
					<SchoolCard />
					<SchoolCard />
					<SchoolCard />
				</div>
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
			<Button className="text-xs bg-[#FF3366] text-white rounded-full">Manage Approval</Button>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button className="bg-[#F9FAFB] border border-[#E5E7EB] hover:bg-[#F9FAFB]/90 rounded-xl font-light text-black">
						Filter 1 <ChevronDown />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuItem>Profile</DropdownMenuItem>
					<DropdownMenuItem>Billing</DropdownMenuItem>
					<DropdownMenuItem>Team</DropdownMenuItem>
					<DropdownMenuItem>Subscription</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button className="bg-[#F9FAFB] border border-[#E5E7EB] hover:bg-[#F9FAFB]/90 rounded-xl font-light text-black">
						Filter 2 <ChevronDown />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuItem>Profile</DropdownMenuItem>
					<DropdownMenuItem>Billing</DropdownMenuItem>
					<DropdownMenuItem>Team</DropdownMenuItem>
					<DropdownMenuItem>Subscription</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button className="bg-[#F9FAFB] border border-[#E5E7EB] hover:bg-[#F9FAFB]/90 rounded-xl font-light text-black">
						Filter 3 <ChevronDown />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuItem>Profile</DropdownMenuItem>
					<DropdownMenuItem>Billing</DropdownMenuItem>
					<DropdownMenuItem>Team</DropdownMenuItem>
					<DropdownMenuItem>Subscription</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	)
}

const SchoolCard = () => {
	return (
		<Card className="shadow-none bg-[#F9FAFB] flex flex-col sm:flex-row gap-3 sm:gap-4 p-3 sm:p-4">
			<div className="w-full sm:w-52 h-44">
				<Image
					src={'/images/school-image.jpg'}
					alt="School"
					width={1880}
					height={1250}
					className="w-full h-full sm:w-52 object-cover rounded-xl"
				/>
			</div>
			<div className="flex flex-col justify-between gap-2 sm:gap-2 flex-1">
				<div>
					<h2 className="font-semibold text-sm sm:text-base truncate">School Name</h2>
					<p className="text-[#6B7280] text-xs sm:text-xs font-light truncate">Address</p>
					<p className="text-[#6B7280] text-xs sm:text-xs font-light truncate">Detail 1</p>
					<p className="text-[#6B7280] text-xs sm:text-xs font-light truncate">Detail 2</p>
					<p className="text-[#6B7280] text-xs sm:text-xs font-light truncate">Detail 3</p>
					<p className="text-[#6B7280] text-xs sm:text-xs font-light truncate">Detail 4</p>
				</div>
			</div>
		</Card>
	)
}
