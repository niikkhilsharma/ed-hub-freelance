'use client'

import MaxWidthWrapper from '@/components/admin/max-width-wrapper'
import NamingBar from '@/components/admin/ui/naming-bar'
import PointSection from '@/components/admin/ui/point-section'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/seperator'

export default function EditDmitTestQuestions() {
	return (
		<div className="bg-gray-100/60">
			<NamingBar name="Test Name" />
			<div className="p-4">
				<MaxWidthWrapper className="bg-white p-4 sm:p-8 rounded-xl">
					<PointSection
						points={[
							{ value: 1, name: 'DMIT Test Details', isActive: true },
							{ value: 2, name: 'DMIT Test Questionnaire ', isActive: false },
							{ value: 3, name: 'Review', isActive: false },
						]}
					/>

					<div className="space-y-10 mt-6">
						{/* Question 1  */}
						<div className="max-w-2xl space-y-6">
							<div className="w-full">
								<Label>Question</Label>
								<div className="flex gap-2 items-center w-full">
									<div>1.</div>
									<Input className="rounded-full bg-[#F9FAFB]" placeholder="Question" />
									<div className="flex gap-2 items-start -translate-y-1/3 ml-2">
										<span className="font-light">Points</span>
										<Input
											className="bg-[#F9FAFB] -translate-y-1/6 rounded-full placeholder:text-center w-18 placeholder:text-black"
											type="number"
											placeholder="00"
										/>
									</div>
								</div>
							</div>
							{/* First Radio Group*/}
							<div className="flex flex-col sm:flex-row items-start gap-4 sm:items-center">
								<Label className="font-medium m-0 tracking-wide text-nowrap">Question Category</Label>
								<div className="flex flex-wrap sm:flex-nowrap gap-4 items-center">
									<div className="flex items-center justify-center gap-2">
										<Input
											type="radio"
											className="appearance-none checked:bg-black p-2 rounded-full border-2 border-[#6B7280]"
											style={{ width: '2px', height: '7px' }}
										/>
										<Label id="questionCategory" className="m-0 tracking-wide text-nowrap font-light">
											Brain Development
										</Label>
									</div>
									<div className="flex items-center justify-center gap-2">
										<Input
											type="radio"
											className="appearance-none checked:bg-black p-2 rounded-full border-2 border-[#6B7280]"
											style={{ width: '2px', height: '7px' }}
										/>
										<Label id="questionCategory" className="m-0 tracking-wide text-nowrap font-light">
											Academic Skills
										</Label>
									</div>
									<div className="flex items-center justify-center gap-2">
										<Input
											type="radio"
											className="appearance-none checked:bg-black p-2 rounded-full border-2 border-[#6B7280]"
											style={{ width: '2px', height: '7px' }}
										/>
										<Label id="questionCategory" className="m-0 tracking-wide text-nowrap font-light">
											Personality Development
										</Label>
									</div>
								</div>
							</div>
							{/* Second Radio Group*/}
							<div className="flex gap-4 items-center">
								<Label className="font-medium m-0 tracking-wide text-nowrap">Answer Types</Label>
								<div className="flex gap-4 items-center">
									<div className="flex items-center justify-center gap-2">
										<Input
											type="radio"
											className="appearance-none checked:bg-black p-2 rounded-full border-2 border-[#6B7280]"
											style={{ width: '2px', height: '7px' }}
										/>
										<Label id="questionCategory" className="m-0 tracking-wide text-nowrap font-light">
											MCQ
										</Label>
									</div>
									<div className="flex items-center justify-center gap-2">
										<Input
											type="radio"
											className="appearance-none checked:bg-black p-2 rounded-full border-2 border-[#6B7280]"
											style={{ width: '2px', height: '7px' }}
										/>
										<Label id="questionCategory" className="m-0 tracking-wide text-nowrap font-light">
											Subjective
										</Label>
									</div>
								</div>
							</div>
							{/* Questions */}
							<div>
								<div className="flex items-center justify-between gap-4 w-full my-4">
									<span>Options</span>
									<Input className="w-18 rounded-full ml-auto placeholder:text-center" placeholder="4" type="number" />
								</div>
								<div className="space-y-6">
									{/* Options */}
									{Array.from({ length: 4 }, (_, i) => (
										<div key={i}>
											<Label htmlFor={`option${i + 1}`}>Option {i + 1}</Label>
											<Input className="rounded-full bg-[#F9FAFB]" placeholder="Question" />
										</div>
									))}
									<div>
										<Label htmlFor={`tips`}>Add Tips:</Label>
										<Input className="rounded-full bg-[#F9FAFB]" placeholder="Tip" />
									</div>
								</div>
							</div>
							{/* Option Radio */}
							<div className="flex gap-4 items-center">
								<div className="flex items-center justify-center gap-2">
									<Input
										type="radio"
										className="appearance-none checked:bg-black p-2 rounded-full border-2 border-[#6B7280]"
										style={{ width: '2px', height: '7px' }}
										id="option1Radio"
									/>
									<Label id="option1Radio" className="m-0 tracking-wide text-nowrap font-light">
										Option 1
									</Label>
								</div>
								<div className="flex items-center justify-center gap-2">
									<Input
										id="option2Radio"
										type="radio"
										className="appearance-none checked:bg-black p-2 rounded-full border-2 border-[#6B7280]"
										style={{ width: '2px', height: '7px' }}
									/>
									<Label htmlFor="option2Radio" className="m-0 tracking-wide text-nowrap font-light">
										Option 2
									</Label>
								</div>
								<div className="flex items-center justify-center gap-2">
									<Input
										id="option3Radio"
										type="radio"
										className="appearance-none checked:bg-black p-2 rounded-full border-2 border-[#6B7280]"
										style={{ width: '2px', height: '7px' }}
									/>
									<Label htmlFor="option3Radio" className="m-0 tracking-wide text-nowrap font-light">
										Option 3
									</Label>
								</div>
							</div>

							{/* Button */}
							<div className="flex flex-col gap-4 w-fit">
								<Button className="text-white bg-[#FFCC00] rounded-full py-6 text-sm">Upload Image / File</Button>
								<Button variant={'secondary'} className="rounded-xl">
									Image/file name.extension
								</Button>
							</div>
							<Separator />
						</div>

						{/* Question 2  */}
						<div className="max-w-2xl space-y-6">
							<div className="w-full">
								<Label>Question</Label>
								<div className="flex gap-2 items-center w-full">
									<div>1.</div>
									<Input className="rounded-full bg-[#F9FAFB]" placeholder="Question" />
									<div className="flex gap-2 items-start -translate-y-1/3 ml-2">
										<span className="font-light">Points</span>
										<Input
											className="bg-[#F9FAFB] -translate-y-1/6 rounded-full placeholder:text-center w-18 placeholder:text-black"
											type="number"
											placeholder="00"
										/>
									</div>
								</div>
							</div>
							{/* First Radio Group*/}
							<div className="flex flex-col sm:flex-row items-start gap-4 sm:items-center">
								<Label className="font-medium m-0 tracking-wide text-nowrap">Question Category</Label>
								<div className="flex flex-wrap gap-4 items-center">
									<div className="flex items-center justify-center gap-2">
										<Input
											type="radio"
											className="appearance-none checked:bg-black p-2 rounded-full border-2 border-[#6B7280]"
											style={{ width: '2px', height: '7px' }}
										/>
										<Label id="questionCategory" className="m-0 tracking-wide text-nowrap font-light">
											Brain Development
										</Label>
									</div>
									<div className="flex items-center justify-center gap-2">
										<Input
											type="radio"
											className="appearance-none checked:bg-black p-2 rounded-full border-2 border-[#6B7280]"
											style={{ width: '2px', height: '7px' }}
										/>
										<Label id="questionCategory" className="m-0 tracking-wide text-nowrap font-light">
											Academic Skills
										</Label>
									</div>
									<div className="flex items-center justify-center gap-2">
										<Input
											type="radio"
											className="appearance-none checked:bg-black p-2 rounded-full border-2 border-[#6B7280]"
											style={{ width: '2px', height: '7px' }}
										/>
										<Label id="questionCategory" className="m-0 tracking-wide text-nowrap font-light">
											Personality Development
										</Label>
									</div>
								</div>
							</div>
							{/* Second Radio Group*/}
							<div className="flex gap-4 items-center">
								<Label className="font-medium m-0 tracking-wide text-nowrap">Answer Types</Label>
								<div className="flex gap-4 items-center">
									<div className="flex items-center justify-center gap-2">
										<Input
											type="radio"
											className="appearance-none checked:bg-black p-2 rounded-full border-2 border-[#6B7280]"
											style={{ width: '2px', height: '7px' }}
										/>
										<Label id="questionCategory" className="m-0 tracking-wide text-nowrap font-light">
											MCQ
										</Label>
									</div>
									<div className="flex items-center justify-center gap-2">
										<Input
											type="radio"
											className="appearance-none checked:bg-black p-2 rounded-full border-2 border-[#6B7280]"
											style={{ width: '2px', height: '7px' }}
										/>
										<Label id="questionCategory" className="m-0 tracking-wide text-nowrap font-light">
											Subjective
										</Label>
									</div>
								</div>
							</div>
							{/* Questions */}
							<div>
								<div className="flex items-center justify-between gap-4 w-full my-4">
									<span>Options</span>
									<Input className="w-18 rounded-full ml-auto placeholder:text-center" placeholder="4" type="number" />
								</div>
								<div className="space-y-6">
									{/* Options */}
									{Array.from({ length: 4 }, (_, i) => (
										<div key={i}>
											<Label htmlFor={`option${i + 1}`}>Option {i + 1}</Label>
											<Input className="rounded-full bg-[#F9FAFB]" placeholder="Question" />
										</div>
									))}
									<div>
										<Label htmlFor={`tips`}>Add Tips:</Label>
										<Input className="rounded-full bg-[#F9FAFB]" placeholder="Tip" />
									</div>
								</div>
							</div>
							{/* Option Radio */}
							<div className="flex gap-4 items-center">
								<div className="flex items-center justify-center gap-2">
									<Input
										type="radio"
										className="appearance-none checked:bg-black p-2 rounded-full border-2 border-[#6B7280]"
										style={{ width: '2px', height: '7px' }}
										id="option1Radio"
									/>
									<Label id="option1Radio" className="m-0 tracking-wide text-nowrap font-light">
										Option 1
									</Label>
								</div>
								<div className="flex items-center justify-center gap-2">
									<Input
										id="option2Radio"
										type="radio"
										className="appearance-none checked:bg-black p-2 rounded-full border-2 border-[#6B7280]"
										style={{ width: '2px', height: '7px' }}
									/>
									<Label htmlFor="option2Radio" className="m-0 tracking-wide text-nowrap font-light">
										Option 2
									</Label>
								</div>
								<div className="flex items-center justify-center gap-2">
									<Input
										id="option3Radio"
										type="radio"
										className="appearance-none checked:bg-black p-2 rounded-full border-2 border-[#6B7280]"
										style={{ width: '2px', height: '7px' }}
									/>
									<Label htmlFor="option3Radio" className="m-0 tracking-wide text-nowrap font-light">
										Option 3
									</Label>
								</div>
							</div>

							{/* Button */}
							<div className="flex flex-col gap-4 w-fit">
								<Button className="text-white bg-[#FFCC00] rounded-full py-6 text-sm">Upload Image / File</Button>
								<Button variant={'secondary'} className="rounded-xl">
									Image/file name.extension
								</Button>
							</div>
							<Separator />
						</div>
					</div>

					<div className="flex justify-center items-center my-10">
						<Button className="rounded-full px-6">Review</Button>
					</div>
				</MaxWidthWrapper>
			</div>
		</div>
	)
}
