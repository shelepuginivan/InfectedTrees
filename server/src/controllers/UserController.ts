import {Request, Response} from 'express'
import UserDTO from '../dtos/UserDTO'
import UserService from '../services/UserService'
import ServerException from '../exceptions/ServerException'

class UserController {
	async updateUserData(req: Request, res: Response): Promise<void> {
		try {
			const {birthdate, organization, phoneNumber} = req?.body
			const accessToken = req.headers.authorization?.split(' ')[1]
			const updatedUserData: UserDTO = await UserService.updateUserData(organization, birthdate, phoneNumber, accessToken)
			res.status(200).json(updatedUserData)
		} catch (e) {
			if (e instanceof ServerException) {
				res.status(e.status).json({message: e.message})
			} else {
				res.status(500).json({message: `Unexpected server error: ${(e as Error).message}`})
				console.error(e)
			}
		}
	}

	async getUserData(req: Request, res: Response): Promise<void> {
		try {
			const accessToken = req.headers.authorization?.split(' ')[1]
			const userData = await UserService.getUserData(accessToken)
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

export default new UserController()
