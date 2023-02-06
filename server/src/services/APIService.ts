import {IAPIService} from "../interfaces/IAPIService";
import UserDTO from "../dtos/UserDTO";
import ServerException from "../exceptions/ServerException";
import TokenService from "./TokenService";
import generateApiKey from 'generate-api-key'
import User from "../models/User";
import InfectedTreeDTO from "../dtos/InfectedTreeDTO";
import InfectedTree from "../models/InfectedTree";

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

	async validateAPIKey(APIKey?: string): Promise<boolean> {
		if (!APIKey) {
			return false
		}

		const apiKeyOwner = await User.findOne({APIKey})

		return Boolean(apiKeyOwner)
	}

	async getAllTreesRecords(APIKey?: string, from?: string, to?: string): Promise<InfectedTreeDTO[]> {
		if (!APIKey) {
			throw ServerException.BadRequest('apiKey query parameter required')
		}

		const APIKeyIsValid = await this.validateAPIKey(APIKey)

		if (!APIKeyIsValid) {
			throw ServerException.Unauthorized('invalid api key')
		}

		const fromDate = from ? Date.parse(from) : 0
		const toDate = to ? Date.parse(to) : Infinity

		const treesRecords = await InfectedTree.find({
			uploadTime: {
				$gte: fromDate,
				$lte: toDate
			},
		})

		return treesRecords.map(record => new InfectedTreeDTO(record))
	}

	async getRecentTreesRecords(APIKey?: string): Promise<InfectedTreeDTO[]> {
		if (!APIKey) {
			throw ServerException.BadRequest('apiKey query parameter required')
		}

		const APIKeyIsValid = await this.validateAPIKey(APIKey)

		if (!APIKeyIsValid) {
			throw ServerException.Unauthorized('invalid api key')
		}

		const treesRecords = await InfectedTree.find({
			uploadTime: {
				$gte: Date.now() - 1000 * 60 * 60 * 24,
				$lte: Date.now()
			},
		})

		return treesRecords.map(record => new InfectedTreeDTO(record))
	}

	async getTreesRecordsByDate(APIKey?: string, date?: string) {
		if (!APIKey) {
			throw ServerException.BadRequest('apiKey query parameter required')
		}

		const APIKeyIsValid = await this.validateAPIKey(APIKey)

		if (!APIKeyIsValid) {
			throw ServerException.Unauthorized('invalid api key')
		}

		const targetDate = date ? Date.parse(date) : Date.now()

		const treesRecords = await InfectedTree.find({
			uploadTime: {
				$gte: targetDate,
				$lte: targetDate + 1000 * 60 * 60 * 24
			}
		})

		return treesRecords.map(record => new InfectedTreeDTO(record))
	}

	async getTreesRecordsWithPagination(APIKey?: string, from?: string, to?: string, page: number = 1, limit: number = 15) {
		if (!APIKey) {
			throw ServerException.BadRequest('apiKey query parameter required')
		}

		const APIKeyIsValid = await this.validateAPIKey(APIKey)

		if (!APIKeyIsValid) {
			throw ServerException.Unauthorized('invalid api key')
		}

		const fromDate = from ? Date.parse(from) : 0
		const toDate = to ? Date.parse(to) : Infinity

		const treesRecords = await InfectedTree.find({
			uploadTime: {
				$gte: fromDate,
				$lte: toDate
			},
		}).limit(limit).skip(limit * (page - 1))

		return treesRecords.map(record => new InfectedTreeDTO(record))
	}
}

export default new APIService()
