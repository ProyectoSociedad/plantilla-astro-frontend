import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle
} from '@/components/ui/alert-dialog'

import type { Dispatch, SetStateAction } from 'react'
import { buttonVariants } from '@/components/ui/button'
interface Props {
	title: string | React.ReactNode
	open?: boolean
	setOpen?: Dispatch<SetStateAction<boolean>>
	description: string | React.ReactNode
	onRedirection?: () => void
	btnAcceptText?: string
	btnAccept?: boolean
	btnCancel?: boolean
	btnCancelText?: string
	btnCancelStyle?: string
	btnClose?: boolean
}
export const BasicModal = ({
	title,
	description,
	open,
	setOpen,
	onRedirection,
	btnCancel = false,
	btnAccept = true,
	btnAcceptText = 'Aceptar',
	btnCancelText = 'Cancelar',
	btnCancelStyle = 'bg-red-600 hover:bg-red-600/80',
	btnClose = true
}: Props) => {
	// p-[46px_35px_31px_35px]
	return (
		<AlertDialog open={open} onOpenChange={setOpen}>
			{/* <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger> */}
			<AlertDialogContent className="max-w-[435px] !rounded-[38px] p-[46px_0_0_0]">
				{btnClose && (
					<button
						onClick={() => setOpen && setOpen(false)}
						className="border-deep-purple-gray hover:bg-deep-purple-gray absolute right-[35px] top-[28px] grid h-[35px] w-[35px] place-content-center rounded-full border-[1px] transition-colors hover:text-white"
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
							<path
								d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"
								fill="currentColor"
							/>
						</svg>
					</button>
				)}
				<AlertDialogHeader className="items-center gap-[15px] px-[58px]">
					<div className="grid h-[55px] w-[50px] place-content-center rounded-[5.383px_10.766px] shadow-[0px_6.46px_15.073px_0px_rgba(143,143,143,0.16)]">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
						>
							<path
								d="M3 4.99509C3 3.89323 3.89262 3 4.99509 3H19.0049C20.1068 3 21 3.89262 21 4.99509V19.0049C21 20.1068 20.1074 21 19.0049 21H4.99509C3.89323 21 3 20.1074 3 19.0049V4.99509ZM5 5V19H19V5H5ZM7.97216 18.1808C7.35347 17.9129 6.76719 17.5843 6.22083 17.2024C7.46773 15.2753 9.63602 14 12.1022 14C14.5015 14 16.6189 15.2071 17.8801 17.0472C17.3438 17.4436 16.7664 17.7877 16.1555 18.0718C15.2472 16.8166 13.77 16 12.1022 16C10.3865 16 8.87271 16.8641 7.97216 18.1808ZM12 13C10.067 13 8.5 11.433 8.5 9.5C8.5 7.567 10.067 6 12 6C13.933 6 15.5 7.567 15.5 9.5C15.5 11.433 13.933 13 12 13ZM12 11C12.8284 11 13.5 10.3284 13.5 9.5C13.5 8.67157 12.8284 8 12 8C11.1716 8 10.5 8.67157 10.5 9.5C10.5 10.3284 11.1716 11 12 11Z"
								fill="#51B96A"
								fillOpacity="0.84"
							/>
						</svg>
					</div>
					<AlertDialogTitle className="text-deep-purple-gray text-center text-[26px] font-bold">
						{title}
					</AlertDialogTitle>
					<AlertDialogDescription className="text-dark-gray-purple text-center text-[15px] font-semibold">
						{description}
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter className="bg-soft-purple/10 mt-[30px] !justify-center px-[35px] py-[25px]">
					{btnCancel && (
						<AlertDialogCancel
							className={`!bg-vivid-crimson/80 hover:bg-vivid-crimson/80 rounded-full p-[16px_32px] text-[15px] font-bold text-white hover:text-white ${btnCancelStyle}`}
						>
							{btnCancelText}
						</AlertDialogCancel>
					)}
					{btnAccept && (
						<AlertDialogAction
							onClick={onRedirection && onRedirection}
							className={buttonVariants()}
						>
							{btnAcceptText}
						</AlertDialogAction>
					)}
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}
