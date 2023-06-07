import { createSignal, JSX } from 'solid-js'

import ActionButton from '../../ui/ActionButton/ActionButton'
import FileUploadArea from '../../ui/FileUploadArea/FileUploadArea'
import FormErrorMessage from '../../ui/FormErrorMessage/FormErrorMessage'
import Input from '../../ui/Input/Input'
import SubmitButton from '../../ui/SubmitButton/SubmitButton'
import { axiosInstanceAuthorized } from '../../utils/axiosInstanceAuthorized'
import { SERVER_HOST, USER_UPLOADS_ROUTE } from '../../utils/consts'
import { getCurrentPosition } from '../../utils/getCurrentPosition'
import { navigateTo } from '../../utils/navigateTo'
import styles from './infectedTreeUploadForm.module.css'

const InfectedTreeUploadForm = (): JSX.Element => {
	const [getAnyFileUploaded, setAnyFileUploaded] = createSignal(false)
	const [getFile, setFile] = createSignal<File | undefined>(undefined)
	const [getFileURL, setFileUrl] = createSignal<string | undefined>(undefined)
	const [getLatitude, setLatitude] = createSignal('')
	const [getLongitude, setLongitude] = createSignal('')
	const [getLoading, setLoading] = createSignal(false)
	const [getUploadFailed, setUploadFailed] = createSignal(false)
	const [getCoordinatesUndefined, setCoordinatesUndefined] = createSignal(false)

	const uploadData = async (): Promise<void> => {
		const data = new FormData()
		data.append('lat', getLatitude())
		data.append('lon', getLongitude())
		data.append('infectedTreePhoto', getFile() as Blob)

		if (!getFile()) {
			setUploadFailed(true)
			return
		}

		if (!getLatitude() || !getLongitude()) {
			setCoordinatesUndefined(true)
			return
		}

		try {
			await axiosInstanceAuthorized(sessionStorage.getItem('accessToken') as string).post(`${SERVER_HOST}/records`, data)
			navigateTo(USER_UPLOADS_ROUTE)
		} catch (e) {
			console.log(e)
		}
	}

	const fileReader: FileReader = new FileReader()
	fileReader.onload = () => {
		setFileUrl(fileReader.result as string)
	}

	const dragStartHandler = (e: DragEvent) => {
		e.preventDefault()
	}

	const dropHandler = (e: DragEvent) => {
		e.preventDefault()
		if (!e.dataTransfer) {
			return
		}
		const file = e.dataTransfer.files[0]
		if (file instanceof File && file.type.includes('image/')) {
			setFile(file)
			setAnyFileUploaded(true)
			fileReader.readAsDataURL(file)
			setUploadFailed(false)
		}
	}

	const leaveHandler = (e: DragEvent) => {
		e.preventDefault()
	}

	const clearInput = () => {
		setAnyFileUploaded(false)
		setFile(undefined)
		setFileUrl(undefined)
	}

	const getCoordinates = async () => {
		setCoordinatesUndefined(false)
		setLoading(true)
		try {
			const position = await getCurrentPosition()
			setLatitude(position.coords.latitude.toString())
			setLongitude(position.coords.longitude.toString())
		} finally {
			setLoading(false)
		}
	}

	const inputFile = (e: Event) => {
		const file = ((e.target as HTMLInputElement).files as FileList)[0]
		fileReader.readAsDataURL(file)
		setFile(file)
		setAnyFileUploaded(true)
	}

	return (
		<form class={styles.form}>
			<h2>Координаты</h2>
			<div>
				<Input placeholder='Широта' value={getLatitude()} onchange={e => setLatitude((e.target as HTMLInputElement).value)}/>
				<Input placeholder='Долгота' value={getLongitude()} onchange={e => setLongitude((e.target as HTMLInputElement).value)}/>
				<ActionButton disabled={getLoading()} onclick={getCoordinates}>{getLoading() ? 'Ожидайте...' : 'Определить'}</ActionButton>
				<FormErrorMessage visible={getCoordinatesUndefined()}>Необходимо определить координаты</FormErrorMessage>
			</div>
			<FileUploadArea
				uploadFailed={getUploadFailed()}
				anyImageUploaded={getAnyFileUploaded()}
				ondragstart={dragStartHandler}
				ondragleave={leaveHandler}
				ondrop={dropHandler}
				onchange={inputFile}
				clearInput={clearInput}
				imagePreviewURL={getFileURL()}
			/>
			<SubmitButton onclick={uploadData}>Отправить</SubmitButton>
		</form>
	)
}

export default InfectedTreeUploadForm
