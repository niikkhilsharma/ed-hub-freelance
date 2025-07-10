import { CircleArrowLeft, CircleArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function ArrowUi({
	leftOnClick,
	RightOnClick,
	text = 'Next',
	className = '',
}: {
	leftOnClick: () => void
	RightOnClick: () => void
	text: string
	className?: string
}) {
	return (
		<Button
			variant={'outline'}
			className={cn(
				'flex gap-2 items-center justify-between rounded-xl font-normal w-[8.3rem] shadow-none bg-[#F9FAFB] border-[#E5E7EB] tracking-tight',
				className
			)}>
			<CircleArrowLeft onClick={leftOnClick} />
			{text}
			<CircleArrowRight onClick={RightOnClick} />
		</Button>
	)
}
