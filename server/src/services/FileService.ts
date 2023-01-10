import fileUpload from 'express-fileupload'
import {IFileService} from '../interfaces/IFileService'
import crypto from 'crypto'
import path from 'path'
import fs from "fs";

class FileService implements IFileService {
	async writeFile(file: fileUpload.UploadedFile): Promise<string> {
		// uploaded file should be an image
		// so mimetype is 'image/<extension>'
		const extension = file.mimetype.replace('image/', '.')
		const filename = `${crypto.randomUUID()}${extension}`
		const filepath = path.join(__dirname, '..', '..', 'files', filename)
		await file.mv(filepath)
		return filename
	}

	async rewriteFile(filename: string, file: fileUpload.UploadedFile): Promise<void> {
		const filepath = path.join(__dirname, '..', '..', 'files', filename)
		await file.mv(filepath)
	}

	async deleteFile(filename: string): Promise<void> {
		const filepath = path.join(__dirname, '..', '..', 'files', filename)
		await fs.rmSync(filepath)
	}
}

export default new FileService()
