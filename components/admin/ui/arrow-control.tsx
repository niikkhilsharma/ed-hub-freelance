import { CircleArrowLeft, CircleArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ArrowControl({
	leftOnClick,
	RightOnClick,
	text = 'Next',
}: {
	leftOnClick: () => void
	RightOnClick: () => void
	text: string
}) {
	return (
		<Button
			variant={'outline'}
			className="flex gap-2 items-center justify-between rounded-xl font-normal w-32 px-2! shadow-none bg-[#F9FAFB] border-[#E5E7EB] tracking-tight">
			<CircleArrowLeft onClick={leftOnClick} />
			{text}
			<CircleArrowRight onClick={RightOnClick} />
		</Button>
	)
}
