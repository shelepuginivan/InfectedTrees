import {createSignal, JSX} from "solid-js";
import FileUploadArea from "./ui/FileUploadArea/FileUploadArea";
import styles from '../css/infectedTreeUploadForm.module.css'
import {getCurrentPosition} from "../utils/getCurrentPosition";
import TextInput from "./ui/TextInput/TextInput";
import ActionButton from "./ui/ActionButton/ActionButton";
import SubmitButton from "./ui/SubmitButton/SubmitButton";
import {axiosInstanceAuthorized} from "../utils/axiosInstanceAuthorized";
import {SERVER_HOST} from "../utils/consts";

const InfectedTreeUploadForm = (): JSX.Element => {
	const [getAnyFileUploaded, setAnyFileUploaded] = createSignal<boolean>(false)
	const [getFile, setFile] = createSignal<File | undefined>(undefined)
	const [getFileURL, setFileUrl] = createSignal<string | undefined>(undefined)

	const [getLatitude, setLatitude] = createSignal<string>('')
	const [getLongitude, setLongitude] = createSignal<string>('')
	const [getLoading, setLoading] = createSignal<boolean>(false)
	const [getButtonInnerText, setButtonInnerText] = createSignal<'Определить' | 'Ожидайте...'>('Определить')

	const uploadData = async (): Promise<void> => {
		const data = new FormData()
		data.append('lat', getLatitude())
		data.append('lon', getLongitude())
		data.append('infectedTreePhoto', getFile() as Blob)
		try {
			const res = await axiosInstanceAuthorized(sessionStorage.getItem('accessToken') as string).post(`${SERVER_HOST}/records`, data)
			console.log(res.data);
		} catch (e) {
			console.log(e);
		}
	}

	const fileReader: FileReader = new FileReader()
	fileReader.onload = () => {
		setFileUrl(fileReader.result as string)
	}

	const dragStartHandler = (e: DragEvent) => {
		e.preventDefault()
	}

	const dropHandler = (e: any) => {
		e.preventDefault()
		if (!e.dataTransfer) {
			return
		}
		const file = e.dataTransfer.files[0]
		setFile(file)
		setAnyFileUploaded(true)
		fileReader.readAsDataURL(file)
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
		setLoading(true)
		setButtonInnerText('Ожидайте...')
		try {
			const position = await getCurrentPosition()
			setLatitude(position.coords.latitude.toString())
			setLongitude(position.coords.longitude.toString())
		} finally {
			setLoading(false)
			setButtonInnerText('Определить')
		}
	}

	const inputFile = (e: any) => {
		const file = ((e.target as HTMLInputElement).files as FileList)[0]
		fileReader.readAsDataURL(file)
		setFile(file as any)
		setAnyFileUploaded(true)
	}


	return (
		<form class={styles.form}>
			<h1>Новая запись</h1>
			<div>
				<TextInput placeholder="Широта" value={getLatitude()} onchange={e => setLatitude((e.target as HTMLInputElement).value)}/>
				<TextInput placeholder="Долгота" value={getLongitude()} onchange={e => setLongitude((e.target as HTMLInputElement).value)}/>
				<ActionButton disabled={getLoading()} onclick={getCoordinates}>{getButtonInnerText()}</ActionButton>
			</div>
			<FileUploadArea
				anyImageUploaded={getAnyFileUploaded()}
				ondragstart={dragStartHandler}
				ondragleave={leaveHandler}
				ondrop={dropHandler}
				inputFile={inputFile}
				clearInput={clearInput}
				imagePreviewURL={getFileURL()}
			>Перетащите фото</FileUploadArea>
			<SubmitButton onclick={uploadData}>Отправить</SubmitButton>
		</form>
	);
};

export default InfectedTreeUploadForm;
