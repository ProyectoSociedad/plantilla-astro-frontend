import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import React from 'react'

export const h3Variants = cva('', {
	variants: {
		variant: {
			default: '',
			primary:
				'leading-[13.151px] tracking-[-0.22px] font-bold font-raleway text-[14px] lg:leading-[17.968px] lg:tracking-[-0.3px] lg:text-[16px] xl:tracking-[-0.46px] xl:leading-[27px]'
		}
	},
	defaultVariants: {
		variant: 'primary'
	}
})
export interface H3Props
	extends React.HTMLProps<HTMLHeadingElement>,
		VariantProps<typeof h3Variants> {}

const TypographyH3 = React.forwardRef<HTMLHeadingElement, H3Props>(
	({ className, variant, ...props }, ref) => {
		return <h3 className={cn(h3Variants({ variant, className }))} ref={ref} {...props} />
	}
)
TypographyH3.displayName = 'TypographyH3'

export { TypographyH3 }
