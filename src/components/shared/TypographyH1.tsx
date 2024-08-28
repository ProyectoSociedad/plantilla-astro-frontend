import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import React from 'react'

export const h1Variants = cva('', {
	variants: {
		variant: {
			default: '',
			primary:
				'text-[28px] [letter-spacing:-1.4px] md:text-[45px] md:[letter-spacing:-2px] lg:[letter-spacing:-4px] lg:text-[55px] xl:text-[65px] 2xl:text-[80px] font-bold font-archivo'
		}
	},
	defaultVariants: {
		variant: 'primary'
	}
})
export interface H1Props
	extends React.HTMLProps<HTMLHeadingElement>,
		VariantProps<typeof h1Variants> {}

const TypographyH1 = React.forwardRef<HTMLHeadingElement, H1Props>(
	({ className, variant, ...props }, ref) => {
		return <h1 className={cn(h1Variants({ variant, className }))} ref={ref} {...props} />
	}
)
TypographyH1.displayName = 'TypographyH1'

export { TypographyH1 }
