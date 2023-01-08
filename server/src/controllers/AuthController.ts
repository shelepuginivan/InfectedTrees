import {Request, Response} from "express";
import {IAuthController} from '../interfaces/IAuthController'

class AuthController implements IAuthController {
	async registration(req: Request, res: Response): Promise<void> {
		return Promise.resolve(undefined);
	}

	async login(req: Request, res: Response): Promise<void> {
		return Promise.resolve(undefined);
	}

	async logout(req: Request, res: Response): Promise<void> {
		return Promise.resolve(undefined);
	}

	async activateAccount(req: Request, res: Response): Promise<void> {
		return Promise.resolve(undefined);
	}

	async refresh(req: Request, res: Response): Promise<void> {
		return Promise.resolve(undefined);
	}
}

export default new AuthController()
