import { useState } from 'react'
import { useLoading } from './useLoading'
import { useToggle } from './useToggle'
interface FormSubmitArgs<T> {
	apiCall: (values: T) => Promise<any> // Aquí puedes ajustar el tipo de retorno si es necesario
	values?: T
	successMessage?: string | React.ReactNode
	successTitle?: string | React.ReactNode
	errorMessage?: string
}
interface MessageState {
	title: React.ReactNode // Cambiado a React.ReactNode
	description: React.ReactNode // Cambiado a React.ReactNode
}

export const useFormSubmit = () => {
	const { state, toggle, setState } = useToggle()
	const [message, setMessage] = useState<MessageState>({
		title: '',
		description: ''
	})
	const { isLoading, startLoading, endLoading } = useLoading()

	const handleSubmit = async <T>({
		apiCall,
		values,
		successMessage,
		successTitle,
		errorMessage
	}: FormSubmitArgs<T>) => {
		startLoading()
		try {
			const response = await apiCall(values ? values : ({} as any))

			// Verifica si la respuesta indica un error
			if (response?.error) {
				setMessage({
					title: '😫💥 Error 💥😫',
					description: response.message || 'Ocurrió un error inesperado'
				})
				return response // Termina la ejecución para no procesar más el éxito
			}
			setMessage({
				title: successTitle || '🌟 ¡Éxito! 🌟',
				description: successMessage || 'Tus datos se han guardado correctamente'
			})
			return response
		} catch (error: any) {
			// Strapi devuleve error una propiedad mas
			// error?.response?.data.error.message
			setMessage({
				title: '😫💥 Error 💥😫',
				description: errorMessage || error?.response?.data.message || 'Ocurrió un error inesperado'
			})
			return error.response.data
		} finally {
			endLoading()
			toggle()
		}
	}

	return {
		handleSubmit,
		state,
		setState,
		toggle,
		startLoading,
		isLoading,
		message
	}
}
