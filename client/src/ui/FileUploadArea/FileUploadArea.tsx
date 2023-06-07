import {JSX} from 'solid-js'
import styles from './fileUploadArea.module.css'

type PropsType = {
	clearInput: () => void
	imagePreviewURL?: string
	anyImageUploaded: boolean
	uploadFailed: boolean
} & Pick<JSX.InputHTMLAttributes<HTMLInputElement>, 'ondragleave' | 'onchange'> &
	Pick<JSX.ObjectHTMLAttributes<HTMLDivElement>, 'ondragstart' | 'ondrop'>

const FileUploadArea = (props: PropsType): JSX.Element => {
	return (
		<div class={styles.container}>
			<div class={styles.preview} data-visible={Boolean(props.imagePreviewURL).toString()} >
				<img class={styles.image} src={props.imagePreviewURL} alt=""/>
				<button type="button" class={styles.btnReset} onclick={props.clearInput}>x</button>
			</div>
			<div
				class={styles.dropArea}
				ondragstart={props.ondragstart}
				ondrop={props.ondrop}
				data-uploaded={props.anyImageUploaded.toString()}
				data-upload-failed={props.uploadFailed}
				ondragover={e => e.preventDefault()}
			>Перетащите фото или&nbsp;<label class={styles.label} for="infectedTreePhotoInput">выберите файл</label>
				<input id="infectedTreePhotoInput" class={styles.input} type="file" datatype="image/*" onchange={props.onchange}/></div>
		</div>
	)
}

export default FileUploadArea
