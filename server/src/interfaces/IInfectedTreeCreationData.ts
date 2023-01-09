import {UploadedFile} from 'express-fileupload'

export interface IInfectedTreeCreationData {
	lat: number
	lon: number
	photo: UploadedFile
}
