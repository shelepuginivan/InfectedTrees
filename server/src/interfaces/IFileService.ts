import fileUpload from 'express-fileupload'

export interface IFileService {
	writeFile(file: fileUpload.UploadedFile): Promise<string>
	rewriteFile(filename: string, file: fileUpload.UploadedFile): Promise<void>
	deleteFile(filename: string): Promise<void>
}
