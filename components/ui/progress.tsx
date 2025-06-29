'use client'

import * as React from 'react'
import * as ProgressPrimitive from '@radix-ui/react-progress'

import { cn } from '@/lib/utils'

const Progress = React.forwardRef<
	React.ComponentRef<typeof ProgressPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & { innerClass?: string }
>(({ className, innerClass, value, ...props }, ref) => (
	<ProgressPrimitive.Root ref={ref} className={cn('relative h-2 w-full overflow-hidden bg-primary/20', className)} {...props}>
		<ProgressPrimitive.Indicator
			className={cn('h-full w-full flex-1 bg-[#4BC4B6] transition-all', innerClass)}
			style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
		/>
	</ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
