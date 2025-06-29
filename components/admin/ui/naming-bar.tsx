import { ArrowLeft } from 'lucide-react'
import MaxWidthWrapper from '../max-width-wrapper'

export default function NamingBar({ name }: { name: string }) {
	return (
		<div className="bg-white py-2">
			<MaxWidthWrapper className="flex justify-start items-center py-2 gap-3 2xl:px-8 font-main text-lg">
				<ArrowLeft /> <span className="text-[#FF3366] font-medium -tracking-[0.01em]">{name}</span>
			</MaxWidthWrapper>
		</div>
	)
}
