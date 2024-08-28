import React from 'react'

interface Props extends React.SVGAttributes<SVGElement> {
	size?: number | string
	fill?: string
}

export const BarChartBoxIcon = ({ size = '1em', fill = 'currentColor', ...props }: Props) => (
	<svg xmlns="http://www.w3.org/2000/svg" width={size} fill={fill} viewBox="0 0 20 20" {...props}>
		<path
			fill={fill}
			d="M19 0a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4.455L0 19.5V1a1 1 0 0 1 1-1zm-1 2H2v13.385L3.763 14H18zm-7 2v8H9V4zm4 2v6h-2V6zM7 8v4H5V8z"
		/>
	</svg>
)
