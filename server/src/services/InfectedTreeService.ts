import ServerException from "../exceptions/ServerException";
import InfectedTree from "../models/InfectedTree";
import InfectedTreeDTO from "../dtos/InfectedTreeDTO";
import {IInfectedTreeCreationData} from "../interfaces/IInfectedTreeCreationData";
import TokenService from "./TokenService";
import FileService from "./FileService"

class InfectedTreeService {
	async getAllUsersWrites(accessToken?: string): Promise<InfectedTreeDTO[]> {
		if (!accessToken) {
			throw ServerException.Unauthorized('no access token provided')
		}
		const userData = TokenService.validateAccessToken(accessToken)
		if (!userData) {
			throw ServerException.Expired()
		}
		const usersWritings = await InfectedTree.find({user: userData.id})
		return usersWritings.map(item => new InfectedTreeDTO(item))
	}

	async getOneWriting(id: string): Promise<InfectedTreeDTO> {
		if (!id) {
			throw ServerException.BadRequest('parameter id required')
		}
		const writing = await InfectedTree.findById(id)
		return new InfectedTreeDTO(writing)
	}

	async create(creationData: IInfectedTreeCreationData, accessToken?: string): Promise<InfectedTreeDTO> {
		if (!accessToken) {
			throw ServerException.Unauthorized('no access token provided')
		}
		const userData = TokenService.validateAccessToken(accessToken)
		if (!userData) {
			throw ServerException.Expired()
		}
		const filename = await FileService.writeFile(creationData.photo)
		const infectedTreeData = {
			user: userData.id,
			lat: creationData.lat,
			lon: creationData.lon,
			photoURL: filename
		}
		const newRecord = await InfectedTree.create(infectedTreeData)
		return new InfectedTreeDTO(newRecord)
	}
}

export default new InfectedTreeService()
