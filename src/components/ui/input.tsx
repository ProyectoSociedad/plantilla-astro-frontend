import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

export const inputVariants = cva(
	'outline-none w-full disabled:!opacity-50 disabled:!cursor-not-allowed',
	{
		variants: {
			variant: {
				default:
					'flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300',
				primary:
					'rounded-[12px] text-slate-gray border-[1px] p-[13px_22px] border-slate-gray/20 placeholder:text-slate-gray placeholder:text-[14px] text-[14px]'
			}
		},
		defaultVariants: {
			variant: 'default'
		}
	}
)

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement>,
		VariantProps<typeof inputVariants> {
	asChild?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, variant, type, ...props }, ref) => {
		return (
			<input
				type={type}
				className={cn(inputVariants({ variant, className }))}
				ref={ref}
				{...props}
			/>
		)
	}
)
Input.displayName = 'Input'

export { Input }
