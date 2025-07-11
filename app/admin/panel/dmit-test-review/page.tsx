import MaxWidthWrapper from '@/components/admin/max-width-wrapper'
import NamingBar from '@/components/admin/ui/naming-bar'
import PointSection from '@/components/admin/ui/point-section'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function DmitTestReview() {
	const questions = [
		{
			question: 'Which part of the plant makes food ?',
			points: 4,
			category: 'Question Category: Academic Skills',
			options: ['Option', 'Option', 'Option'],
		},
		{
			question: 'Which part of the plant makes food ?',
			points: 4,
			category: 'Question Category: Academic Skills',
			options: ['Option', 'Option', 'Option'],
		},
	]

	return (
		<div className="bg-gray-100/60">
			<NamingBar name="Review Questions" />
			<div className="p-4">
				<MaxWidthWrapper className="bg-white p-4 sm:p-8 rounded-2xl">
					<PointSection
						points={[
							{ value: 1, name: 'Test Details', isActive: false },
							{ value: 2, name: 'Review', isActive: true },
						]}
					/>
					{/* Text */}
					<div>
						<h1 className="text-2xl font-semibold">Test Title</h1>
						<p className="text-[#777777] font-light text-sm mt-2 tracking-wider leading-6">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s
							standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
							type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
							essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
						</p>
					</div>

					<div className="bg-[#F9FAFB] text-[#808080] text-xs my-6 p-4 rounded-2xl font-light">
						<p>Duration : 30 Minutes</p>
						<p className="mt-2">Total Point: 100</p>
					</div>

					{/* Edit Button */}
					<Button variant={'secondary'} className="py-6 rounded-full px-5">
						Edit
					</Button>

					{/* Questions */}
					{questions.map((question, indx) => (
						<div key={indx} className="rounded-2xl bg-[#F9FAFB] p-4 mt-6 max-w-2xl">
							<p className="text-[#6B7280] text-sm">Question {indx + 1}</p>
							<div className="flex flex-col sm:flex-row justify-between text-start sm:items-center gap-2 sm:gap-4 my-2">
								<h2 className="font-semibold text-lg">{question.question}</h2>
								<p className="text-[#6B7280]">{question.points} Points</p>
							</div>
							<p>Question Category: {question.category}</p>

							<div className="mt-4">
								{/* Options */}
								{question.options.map((option, indx) => (
									<div
										key={indx}
										className={cn('rounded-full font-medium my-2 bg-white text-[#6B7280] p-4', 'flex gap-2 items-center')}>
										{indx === 1 && (
											<svg width={38} height={38} viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
												<rect y="0.5" width={48} height={48} rx={24} fill="#8DD9B3" />
												<path d="M32 18.5L21 29.5L16 24.5" stroke="white" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										)}
										{option}
									</div>
								))}
							</div>

							<Button className="py-6 bg-[#B0B0B01A] hover:bg-[#B0B0B02A] text-black mt-4 rounded-full px-5">Edit</Button>
						</div>
					))}

					<div className="max-w-2xl flex items-center justify-end gap-4 mt-4">
						<Button className="rounded-full text-[#6B7280] border bg-white hover:bg-white py-6 px-5">Cancel</Button>
						<Button className="rounded-full bg-[#3366FF] hover:bg-[#3366FF]/90 py-6 px-5">Update</Button>
					</div>
				</MaxWidthWrapper>
			</div>
		</div>
	)
}
