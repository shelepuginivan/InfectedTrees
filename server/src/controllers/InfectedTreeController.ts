import {Request, Response} from "express";
import {IInfectedTreeController} from "../interfaces/IInfectedTreeController";
import ServerException from "../exceptions/ServerException";
import InfectedTreeService from "../services/InfectedTreeService";
import InfectedTreeDTO from "../dtos/InfectedTreeDTO";
import {IInfectedTreeCreationData} from "../interfaces/IInfectedTreeCreationData";
import { UploadedFile } from "express-fileupload";

class InfectedTreeController implements IInfectedTreeController {
	async getAllUsersRecords(req: Request, res: Response): Promise<void> {
		try {
			const accessToken = req.headers.authorization?.split(' ')[1]		// Bearer <JWT_ACCESS_TOKEN>
			const usersWritings = await InfectedTreeService.getAllUsersWrites(accessToken)
			res.status(200).json(usersWritings)
		} catch (e) {
			if (e instanceof ServerException) {
				res.status(e.status).json({message: e.message})
			} else {
				res.status(500).json({message: `Unexpected server error: ${(e as Error).message}`})
				console.error(e)
			}
		}
	}

	async getOneRecord(req: Request, res: Response): Promise<void> {
		try {
			const recordID = req.params.id
			const record = InfectedTreeService.getOneWriting(recordID)
			const recordDTO: InfectedTreeDTO = new InfectedTreeDTO(record)
			res.status(200).json(recordDTO)
		} catch (e) {
			if (e instanceof ServerException) {
				res.status(e.status).json({message: e.message})
			} else {
				res.status(500).json({message: `Unexpected server error: ${(e as Error).message}`})
				console.error(e)
			}
		}

	}

	async create(req: Request, res: Response): Promise<void> {
		try {
			const {lat, lon} = req.body
			const accessToken = req.headers.authorization?.split(' ')[1]
			const creationData: IInfectedTreeCreationData = {
				lat,
				lon,
				photo: req.files?.infectedTreePhoto as UploadedFile
			}
			const createdRecord = await InfectedTreeService.create(creationData, accessToken)
			res.status(200).json(createdRecord)
		} catch (e) {
			if (e instanceof ServerException) {
				res.status(e.status).json({message: e.message})
			} else {
				res.status(500).json({message: `Unexpected server error: ${(e as Error).message}`})
				console.error(e)
			}
		}

	}

	async update(req: Request, res: Response): Promise<void> {
		try {
			const id = req.params.id
			const {lat, lon} = req.body
			const accessToken = req.headers.authorization?.split(' ')[1]
			const updateData: IInfectedTreeCreationData = {
				lat,
				lon,
				photo: req.files?.infectedTreePhoto as UploadedFile
			}
			const updatedRecord: InfectedTreeDTO = await InfectedTreeService.update(id, updateData, accessToken)
			res.status(200).json(updatedRecord)
		} catch (e) {
			if (e instanceof ServerException) {
				res.status(e.status).json({message: e.message})
			} else {
				res.status(500).json({message: `Unexpected server error: ${(e as Error).message}`})
				console.error(e)
			}
		}
	}

	async delete(req: Request, res: Response): Promise<void> {
		try {
			const id = req.params.id
			const accessToken = req.headers.authorization?.split(' ')[1]
			await InfectedTreeService.delete(id, accessToken)
			res.status(200).end()
		} catch (e) {
			if (e instanceof ServerException) {
				res.status(e.status).json({message: e.message})
			} else {
				res.status(500).json({message: `Unexpected server error: ${(e as Error).message}`})
				console.error(e)
			}
		}
	}
}

export default new InfectedTreeController()
