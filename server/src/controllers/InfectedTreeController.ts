import {Request, Response} from "express";
import {IInfectedTreeController} from "../interfaces/IInfectedTreeController";
import ServerException from "../exceptions/ServerException";
import InfectedTreeService from "../services/InfectedTreeService";

class InfectedTreeController implements IInfectedTreeController {
	async getAllUsersWrites(req: Request, res: Response): Promise<void> {
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

	async getOne(req: Request, res: Response): Promise<void> {
		return Promise.resolve(undefined);
	}

	async getOneWrite(req: Request, res: Response): Promise<void> {
		return Promise.resolve(undefined);
	}

	async create(req: Request, res: Response): Promise<void> {
		return Promise.resolve(undefined);
	}

	async update(req: Request, res: Response): Promise<void> {
		return Promise.resolve(undefined);
	}

	async delete(req: Request, res: Response): Promise<void> {
		return Promise.resolve(undefined);
	}
}

export default new InfectedTreeController()
