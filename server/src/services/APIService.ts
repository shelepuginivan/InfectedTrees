import {IAPIService} from "../interfaces/IAPIService";
import UserDTO from "../dtos/UserDTO";
import ServerException from "../exceptions/ServerException";
import TokenService from "./TokenService";
import generateApiKey from 'generate-api-key'
import User from "../models/User";

class APIService implements IAPIService {
	async generateAPIKey(accessToken?: string): Promise<{user: UserDTO, key: string}> {
		if (!accessToken) {
			throw ServerException.Unauthorized('access token not provided')
		}
		const userData = TokenService.validateAccessToken(accessToken)
		if (!userData) {
			throw ServerException.Expired()
		}
		const newAPIKey = generateApiKey({
			method: 'string',
			length: 12,
			pool: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
		})
		const user = await User.findByIdAndUpdate(userData.id, {
			$set: {
				hasAPIKey: true,
				APIKey: newAPIKey
			}
		}, {new: true})
		return {
			user: new UserDTO(user),
			key: newAPIKey as string
		}
	}

	async getAPIKey(accessToken?: string): Promise<{user: UserDTO, key: string}> {
		if (!accessToken) {
			throw ServerException.Unauthorized('access token not provided')
		}
		const userData = TokenService.validateAccessToken(accessToken)
		if (!userData) {
			throw ServerException.Expired()
		}
		const user = await User.findById(userData.id)
		if (!user?.hasAPIKey) {
			throw ServerException.BadRequest('user has no api key')
		}
		return {
			user: new UserDTO(user),
			key: user.APIKey
		}
	}
}

export default new APIService()
