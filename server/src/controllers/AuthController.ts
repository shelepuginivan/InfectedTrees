import {Request, Response} from "express";
import {IAuthController} from '../interfaces/IAuthController'
import AuthService from "../services/AuthService";
import ServerException from "../exceptions/ServerException";
import TokenService from "../services/TokenService";
import AuthDTO from "../dtos/AuthDTO";

class AuthController implements IAuthController {
	async registration(req: Request, res: Response): Promise<void> {
		try {
			const {firstname, lastname, email, password} = req.body
			const userData = await AuthService.registration(firstname, lastname, email, password)
			const authData: AuthDTO = new AuthDTO(userData)
			res.cookie('refreshToken', userData.refreshToken, {maxAge: 60 * 24 * 60 * 60 * 1000, httpOnly: true}).status(200).json(authData)
		} catch (e) {
			if (e instanceof ServerException) {
				res.status(e.status).json({message: e.message})
			} else {
				res.status(500).json({message: `Unexpected server error: ${(e as Error).message}`})
				console.error(e)
			}
		}
	}

	async login(req: Request, res: Response): Promise<void> {
		try {
			const {email, password} = req.body
			const userData = await AuthService.login(email, password)
			const authData: AuthDTO = new AuthDTO(userData)
			res.cookie('refreshToken', userData.refreshToken, {maxAge: 60 * 24 * 60 * 60 * 1000, httpOnly: true}).status(200).json(authData)
		} catch (e) {
			if (e instanceof ServerException) {
				res.status(e.status).json({message: e.message})
			} else {
				res.status(500).json({message: `Unexpected server error: ${(e as Error).message}`})
				console.error(e)
			}
		}
	}

	async logout(req: Request, res: Response): Promise<void> {
		try {
			const refreshToken: string = req.cookies.refreshToken
			await TokenService.removeToken(refreshToken)
			res.clearCookie('refreshToken').status(200).end()
		} catch (e) {
			if (e instanceof ServerException) {
				res.status(e.status).json({message: e.message})
			} else {
				res.status(500).json({message: `Unexpected server error: ${(e as Error).message}`})
				console.error(e)
			}
		}
	}

	async activateAccount(req: Request, res: Response): Promise<void> {
		try {
			const uuid: string = req.params.uuid
			await AuthService.activateAccount(uuid)
			res.status(302).redirect(`${process.env.CLIENT_HOST}`)
		} catch (e) {
			if (e instanceof ServerException) {
				res.status(e.status).json({message: e.message})
			} else {
				res.status(500).json({message: `Unexpected server error: ${(e as Error).message}`})
				console.error(e)
			}
		}
	}

	async refresh(req: Request, res: Response): Promise<void> {
		try {
			const refreshToken: string = req.cookies.refreshToken
			const userData = await AuthService.refresh(refreshToken)
			const authData: AuthDTO = new AuthDTO(userData)
			res.status(200).json(authData)
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

export default new AuthController()
