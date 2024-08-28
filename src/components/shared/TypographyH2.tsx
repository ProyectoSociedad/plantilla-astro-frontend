import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import React from 'react'

export const h2Variants = cva('', {
	variants: {
		variant: {
			default: '',
			primary:
				'text-[18px] tracking-[-0.54px] lg:tracking-[-0.72px] lg:text-[24px] 2xl:tracking-[-1.14px] 2xl:text-[38px] font-bold font-archivo'
		}
	},
	defaultVariants: {
		variant: 'primary'
	}
})
export interface H2Props
	extends React.HTMLProps<HTMLHeadingElement>,
		VariantProps<typeof h2Variants> {}

const TypographyH2 = React.forwardRef<HTMLHeadingElement, H2Props>(
	({ className, variant, ...props }, ref) => {
		return <h2 className={cn(h2Variants({ variant, className }))} ref={ref} {...props} />
	}
)
TypographyH2.displayName = 'TypographyH2'

export { TypographyH2 }
