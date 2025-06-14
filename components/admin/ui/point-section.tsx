import { cn } from '@/lib/utils'

export default function PointSection({ points }: { points: { value: number; name: string; isActive: boolean }[] }) {
	return (
		<div className="flex gap-6 flex-col sm:flex-row  justify-center items-start sm:items-center py-4">
			{points.map((point, indx) => (
				<div
					key={indx}
					className={cn('flex items-center justify-center tracking-tight gap-2', point.isActive && 'text-[#FF3366]')}>
					<p className="py-1.5 px-3 rounded-full font-semibold border">{point.value.toString()}</p>
					<h3>{point.name}</h3>
				</div>
			))}
		</div>
	)
}
