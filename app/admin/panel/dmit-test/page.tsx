'use client'

import MaxWidthWrapper from '@/components/admin/max-width-wrapper'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ChevronDown } from 'lucide-react'

export default function DmitTest() {
	return (
		<MaxWidthWrapper className="px-4">
			<div className="bg-white rounded-2xl p-6 mt-6 mb-20 flex flex-col gap-8 md:flex-row justify-between items-start">
				<div className="w-full sm:w-auto">
					<h1 className="text-[#3366FF] font-semibold text-2xl underline underline-offset-8">DMIT</h1>

					<h2 className="text-[#FF3366] my-4 font-medium">Edit DMIT Test</h2>
					<div className="space-y-8 my-8">
						<div className="flex w-full gap-2 flex-col">
							<label htmlFor="options" className="font-light">
								Choose Existing Test (to Edit)
							</label>
							<div className="relative w-full">
								<select
									name="options"
									id="options"
									className="p-2 rounded-full border bg-gray-100/60 font-light appearance-none shadow-xs focus:outline-3 w-full focus:border-gray-600 transition-all duration-75">
									<option className="font-light" value="1">
										Option 1
									</option>
									<option className="font-light" value="2">
										Option 2
									</option>
									<option className="font-light" value="3">
										Option 3
									</option>
									<option className="font-light" value="4">
										Option 4
									</option>
									<option className="font-light" value="5">
										Option 5
									</option>
								</select>
								<ChevronDown className="absolute top-0 translate-y-1/2 right-2" strokeWidth={1.5} />
							</div>
						</div>
						<div className="flex gap-2 flex-col">
							<label htmlFor="name" className="font-light">
								Test Name
							</label>
							<Input className="rounded-full w-full border" placeholder="Test Name" name="name" id="name" />
						</div>
						<div className="flex gap-2 flex-col">
							<label htmlFor="duration" className="font-light">
								Duration (Minutes)
							</label>
							<Input id="duration" className="rounded-full w-full border" placeholder="Test Name" name="name" />
						</div>
					</div>
					<div className="flex flex-col items-end justify-center gap-4">
						<Button className="hidden sm:block rounded-full w-32 bg-[#FF3366] px-2 hover:bg-[#FF3366]/90 shadow-none">
							Edit Questions
						</Button>
						<div className="flex justify-between sm:justify-center flex-wrap gap-4">
							<Button className="rounded-full bg-[#FF33661A] px-6 shadow-none hover:bg-[#FF33661A]/90 text-[#FF3366]">
								Discard
							</Button>

							<Button className="rounded-full w-32 bg-[#FF3366] px-2 hover:bg-[#FF3366]/90 shadow-none">Edit Questions</Button>
							<Button className="rounded-full bg-[#3366FF1A] shadow-none hover:bg-[#3366FF1A]/90 text-[#3366FF]">
								View Existing Test
							</Button>
							<Button className="rounded-full w-32 px-6 shadow-none">Save</Button>
						</div>
					</div>
				</div>

				<div className="flex justify-center items-end flex-col gap-4">
					<h2 className="text-[#FF3366] font-semibold">Create new DMIT Test</h2>
					<Button className="rounded-full shadow-none px-16">Create</Button>
				</div>
			</div>
		</MaxWidthWrapper>
	)
}
