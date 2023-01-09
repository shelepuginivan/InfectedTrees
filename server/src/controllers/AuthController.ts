import {Request, Response} from "express";
import {IAuthController} from '../interfaces/IAuthController'
import AuthService from "../services/AuthService";
import ServerException from "../exceptions/ServerException";

class AuthController implements IAuthController {
	async registration(req: Request, res: Response): Promise<void> {
		try {
			const {firstname, lastname, email, password} = req.body
			const data = await AuthService.registration(firstname, lastname, email, password)
			res.cookie('refreshToken', data.refreshToken, {maxAge: 60 * 24 * 60 * 60 * 1000, httpOnly: true}).status(200).json(data)
		} catch (e) {
			if (e instanceof ServerException) {
				res.status(e.status).json({message: e.message})
			} else {
				res.status(500).json({message: 'Unexpected server error'})
				console.error(e)
			}
		}
	}

	async login(req: Request, res: Response): Promise<void> {
		try {
			res.status(200).json('works')
		} catch (e) {

		}
	}

	async logout(req: Request, res: Response): Promise<void> {
		try {

		} catch (e) {

		}
	}

	async activateAccount(req: Request, res: Response): Promise<void> {
		try {

		} catch (e) {

		}
	}

	async refresh(req: Request, res: Response): Promise<void> {
		try {

		} catch (e) {

		}
	}
}

export default new AuthController()
