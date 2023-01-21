import {Request, Response} from "express";
import path from "path";

class FileController {
	async getTreePhotoByFilename(req: Request, res: Response) {
		try {
			const filename = req.params.filename
			const filepath = path.join(__dirname, '..', '..', 'files', filename)
			res.status(200).sendFile(filepath)
		} catch (e) {
			res.status(500).json({message: `Unexpected error: ${(e as Error).message}`})
		}
	}
}

export default new FileController()
