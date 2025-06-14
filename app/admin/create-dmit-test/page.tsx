'use client'

import MaxWidthWrapper from '@/components/admin/max-width-wrapper'
import NamingBar from '@/components/admin/ui/naming-bar'
import { Input } from '@/components/ui/input'
import PointSection from '@/components/admin/ui/point-section'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export default function DmitTestQuestions() {
	return (
		<div className="bg-gray-200">
			<NamingBar name="Create New DMIT Test" />
			<MaxWidthWrapper className="bg-white rounded-2xl my-10 pb-10">
				<PointSection
					points={[
						{ value: 1, name: 'DMIT Test Details', isActive: true },
						{ value: 2, name: 'DMIT Test Questionnaire ', isActive: false },
						{ value: 3, name: 'Review', isActive: false },
					]}
				/>

				<div className="flex flex-col justify-center items-center gap-8 mt-4 w-96 mx-auto">
					<div className="w-full">
						<Label htmlFor="testName" className="font-light">
							Test Name
						</Label>
						<Input className="rounded-full bg-[#F9FAFB] mt-2" placeholder="text" />
					</div>

					<div className="w-full">
						<Label htmlFor="description">Your message</Label>
						<Textarea placeholder="Type your message here." id="description" className="rounded-2xl bg-[#F9FAFB] mt-2" rows={6} />
					</div>

					<div className="w-full">
						<Label className="font-light mb-4">Duration & Point</Label>
						<div className="flex gap-4">
							<div className="text-xs text-[#6B7280]">
								<Label htmlFor="hours" className="font-light">
									Hours
								</Label>
								<Input
									id="hours"
									type="number"
									className="rounded-full bg-[#F9FAFB] mt-2 placeholder:text-black placeholder:text-center"
									placeholder="00"
								/>
							</div>
							<div className="text-xs text-[#6B7280]">
								<Label htmlFor="minutes" className="font-light">
									Minutes
								</Label>
								<Input
									id="minutes"
									type="number"
									className="rounded-full bg-[#F9FAFB] mt-2 placeholder:text-black placeholder:text-center"
									placeholder="00"
								/>
							</div>
							<div className="text-xs text-[#6B7280]">
								<Label htmlFor="totalPoints" className="font-light">
									Total Points
								</Label>
								<Input
									id="totalPoints"
									type="number"
									className="rounded-full bg-[#F9FAFB] mt-2 placeholder:text-black placeholder:text-center"
									placeholder="00"
								/>
							</div>
							<div className="text-xs text-[#6B7280]">
								<Label htmlFor="passPoint" className="font-light">
									Pass Points
								</Label>
								<Input
									id="passPoint"
									type="number"
									className="rounded-full bg-[#F9FAFB] mt-2 placeholder:text-black placeholder:text-center"
									placeholder="00"
								/>
							</div>
						</div>
					</div>

					<div className="flex gap-4">
						<Button className="rounded-full py-6" variant={'outline'}>
							Cancel
						</Button>
						<Button className="bg-[#3366FF] rounded-full py-6 text-white shadow-none">Continue</Button>
					</div>
				</div>
			</MaxWidthWrapper>
		</div>
	)
}
