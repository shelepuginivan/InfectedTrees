import ServerException from "../exceptions/ServerException";
import InfectedTree from "../models/InfectedTree";
import InfectedTreeDTO from "../dtos/InfectedTreeDTO";
import {IInfectedTreeCreationData} from "../interfaces/IInfectedTreeCreationData";
import TokenService from "./TokenService";

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
		const writing = await InfectedTree.findById(id)
		return new InfectedTreeDTO(writing)
	}

	async create(accessToken: string, creationData: IInfectedTreeCreationData) {
		const userData = TokenService.validateAccessToken(accessToken)
		if (!accessToken) {
			throw ServerException.Expired()
		}
	}
}

export default new InfectedTreeService()
