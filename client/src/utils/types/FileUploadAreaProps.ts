import {JSX} from "solid-js";

export type FileUploadAreaProps = {
	ondragstart: (e: DragEvent) => void
	ondragleave: (e: DragEvent) => void
	ondrop: (e: DragEvent) => void
	inputFile: (e: Event) => void
	clearInput: () => void
	imagePreviewURL?: string
	anyImageUploaded: boolean
	uploadFailed: boolean
	children?: JSX.Element
}
