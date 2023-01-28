import {JSX} from 'solid-js'
import {FileUploadAreaProps} from "../../utils/types/FileUploadAreaProps";
import styles from './fileUploadArea.module.css'

const FileUploadArea = (props: FileUploadAreaProps): JSX.Element => {
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
				ondragover={e => e.preventDefault()}
			>{props.children} или&nbsp;<label class={styles.label} for="infectedTreePhotoInput">выберите файл</label>
				<input id="infectedTreePhotoInput" class={styles.input} type="file" datatype="image/*" onchange={props.inputFile}/></div>
		</div>
	);
};

export default FileUploadArea;
