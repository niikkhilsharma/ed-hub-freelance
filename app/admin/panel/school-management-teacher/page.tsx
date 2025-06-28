import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

import { ChevronDown, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import MaxWidthWrapper from '@/components/admin/max-width-wrapper'
import NamingBar from '@/components/admin/ui/naming-bar'
import { cn } from '@/lib/utils'

export default function SchoolManagementReport() {
	const tabs = [
		{ name: 'Analysis', active: false },
		{ name: 'Teachers', active: true },
		{ name: 'Students', active: false },
		{ name: 'Content', active: false },
	]

	const studentClass = [
		{ className: 'Class 1', active: true },
		{ className: 'Class 2', active: false },
		{ className: 'Class 3', active: false },
		{ className: 'Class 4', active: false },
	]

	return (
		<div className="bg-gray-100/60">
			<NamingBar name="School Name" />
			<MaxWidthWrapper className="bg-white rounded-2xl my-10 py-4">
				<SearchFilterBar />
				<div>
					<div className={cn('my-8 flex items-center justify-start gap-4 sm:gap-8 font-medium')}>
						{tabs.map((tab, indx) => (
							<div key={indx} className={cn(tab.active ? 'text-[#3366FF] underline underline-offset-8' : 'text-[#6B7280]')}>
								{tab.name}
							</div>
						))}
					</div>
					<div className="flex justify-center items-center gap-8 border rounded-2xl py-2">
						{studentClass.map((cls, indx) => (
							<div key={indx} className={cn('text-white p-2 rounded-2xl', cls.active ? 'bg-[#FF3366]' : 'text-[#6B7280]')}>
								{cls.className}
							</div>
						))}
					</div>
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
