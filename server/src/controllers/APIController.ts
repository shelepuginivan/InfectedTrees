import {IAPIController} from "../interfaces/IAPIController";
import {Request, Response} from "express";
import APIService from "../services/APIService";
import ServerException from "../exceptions/ServerException";

class APIController implements IAPIController{
	async generateAPIKey(req: Request, res: Response): Promise<void> {
		try {
			const accessToken = req.headers.authorization?.split(' ')[1]
			const userData = await APIService.generateAPIKey(accessToken)
			res.status(200).json(userData)
		} catch (e) {
			if (e instanceof ServerException) {
				res.status(e.status).json({message: e.message})
			} else {
				res.status(500).json({message: `Unexpected server error: ${(e as Error).message}`})
				console.error(e)
			}
		}
	}
	async getAPIKey(req: Request, res: Response): Promise<void> {
		try {
			const accessToken = req.headers.authorization?.split(' ')[1]
			const userData = await APIService.getAPIKey(accessToken)
			res.status(200).json(userData)
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

export default new APIController()
