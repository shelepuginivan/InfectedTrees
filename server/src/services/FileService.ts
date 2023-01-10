import fileUpload from 'express-fileupload'
import {IFileService} from '../interfaces/IFileService'
import crypto from 'crypto'
import path from 'path'

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
}

export default new FileService()
