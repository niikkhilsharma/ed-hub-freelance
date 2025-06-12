'use client'

import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import SearchSvg from '@/public/svg/search.svg'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, CircleArrowLeft, CircleArrowRight, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ArrowControl from '@/components/admin/ui/arrow-control'

export default function DashboardPage() {
	return (
		<div>
			<div>
				<div className="my-8 flex flex-col gap-6 px-4 bg-white p-4 border rounded-2xl">
					<div className="px-4 flex gap-4 w-full">
						<Card className="shadow-none bg-[#F9FAFB] w-1/3">
							<CardHeader className="flex float-col justify-center items-center gap-2">
								<CardTitle className="text-[#3366FF] text-4xl">10</CardTitle>
								<CardDescription className="text-[#000000] font-semibold tracking-wide">Schools</CardDescription>
							</CardHeader>
						</Card>
						<Card className="shadow-none bg-[#F9FAFB] w-1/3">
							<CardHeader className="flex float-col justify-center items-center gap-2">
								<CardTitle className="text-[#3366FF] text-4xl">250</CardTitle>
								<CardDescription className="text-[#000000] font-semibold tracking-wide">Teachers</CardDescription>
							</CardHeader>
						</Card>
						<Card className="shadow-none bg-[#F9FAFB] w-1/3">
							<CardHeader className="flex float-col justify-center items-center gap-2">
								<CardTitle className="text-[#3366FF] text-4xl">6000</CardTitle>
								<CardDescription className="text-[#000000] font-semibold tracking-wide">Students</CardDescription>
							</CardHeader>
						</Card>
					</div>
					<div>
						<Card className="shadow-none bg-[#F9FAFB] w-[40%]">
							<CardHeader className="flex flex-row gap-4 px-4">
								<div className="relative w-full">
									<Input
										className="border-[#6B7280] w-full rounded-full pl-10 placeholder:tracking-wide placeholder:text-base border-[1.5px] placeholder:font-light"
										placeholder="Search"
									/>
									<Image
										src={SearchSvg}
										alt="Search"
										width={24}
										height={24}
										className="absolute left-3 top-1/2 -translate-y-1/2 w-[22px]"
									/>
								</div>
								<div>
									<ArrowControl leftOnClick={() => {}} RightOnClick={() => {}} text="Branch 1" />
								</div>
							</CardHeader>
							<div className="h-60"></div>
						</Card>
					</div>
				</div>
			</div>
		</div>
	)
}
