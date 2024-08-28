import React from 'react'

interface Props extends React.SVGAttributes<SVGElement> {
	size?: number | string
	fill?: string
}

export const BroadcastSignalIcon = ({ size = '1em', fill = 'currentColor', ...props }: Props) => (
	<svg xmlns="http://www.w3.org/2000/svg" width={size} fill={fill} viewBox="0 0 22 14" {...props}>
		<path
			fill={fill}
			d="M6 11.1c-.2 0-.5-.1-.6-.3C4.5 9.6 4 8.2 4 6.8s.5-2.9 1.4-4.1c.2-.3.7-.4 1.1-.1.3.2.4.7.1 1.1-.7.9-1.1 2-1.1 3.1S5.9 9 6.6 9.9c.2.3.2.8-.1 1.1-.2.1-.4.1-.5.1ZM15.6 11.1c-.2 0-.3 0-.4-.1-.3-.2-.4-.7-.1-1.1.5-.9.9-2 .9-3.1s-.4-2.3-1-3.2c-.2-.3-.2-.8.1-1.1.3-.2.8-.2 1.1.1.9 1.2 1.4 2.6 1.4 4.1 0 1.5-.5 2.9-1.4 4.1-.2.2-.4.3-.6.3ZM2.8 13.5c-.2 0-.5-.1-.6-.3C.7 11.3 0 9.1 0 6.8 0 4.5.7 2.2 2.2.3c.2-.3.7-.4 1-.1.3.2.4.7.1 1.1-1.2 1.5-1.8 3.4-1.8 5.5s.6 3.9 1.8 5.5c.2.3.2.8-.1 1.1-.1.1-.3.1-.4.1ZM18.7 13.5c-.2 0-.3 0-.5-.2-.3-.2-.4-.7-.1-1.1 1.2-1.6 1.8-3.5 1.8-5.5s-.6-3.9-1.8-5.5c-.2-.3-.2-.8.1-1.1.3-.3.8-.2 1.1.1 1.4 1.9 2.2 4.1 2.2 6.5 0 2.4-.7 4.6-2.2 6.5-.1.2-.3.3-.6.3ZM10.8 9.5C9.2 9.5 8 8.3 8 6.8 8 5.3 9.2 4 10.8 4c1.6 0 2.8 1.2 2.8 2.8 0 1.6-1.3 2.7-2.8 2.7Zm0-4c-.7 0-1.3.6-1.3 1.3 0 .7.6 1.2 1.3 1.2.7 0 1.2-.6 1.2-1.2s-.6-1.3-1.2-1.3Z"
		/>
	</svg>
)
