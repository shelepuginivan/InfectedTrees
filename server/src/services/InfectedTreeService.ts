import ServerException from "../exceptions/ServerException";
import InfectedTree from "../models/InfectedTree";
import InfectedTreeDTO from "../dtos/InfectedTreeDTO";
import {IInfectedTreeCreationData} from "../interfaces/IInfectedTreeCreationData";
import TokenService from "./TokenService";
import FileService from "./FileService"

class InfectedTreeService {
	async getAllUsersWrites(accessToken?: string): Promise<InfectedTreeDTO[]> {
		if (!accessToken) {
			throw ServerException.Unauthorized('access token not provided')
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
			throw ServerException.BadRequest('parameter id is required')
		}
		const writing = await InfectedTree.findById(id)
		return new InfectedTreeDTO(writing)
	}

	async create(creationData: IInfectedTreeCreationData, accessToken?: string): Promise<InfectedTreeDTO> {
		if (!accessToken) {
			throw ServerException.Unauthorized('access token not provided')
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

	async update(id: string, updateData: IInfectedTreeCreationData, accessToken?: string): Promise<InfectedTreeDTO> {
		if (!accessToken) {
			throw ServerException.Unauthorized('access token not provided')
		}
		const userData = TokenService.validateAccessToken(accessToken)
		if (!userData) {
			throw ServerException.Expired()
		}
		const recordToUpdate = await InfectedTree.findById(id)
		if (!recordToUpdate) {
			throw ServerException.BadRequest('record with given id not found')
		}
		const filename = recordToUpdate.photoURL
		await FileService.rewriteFile(filename, updateData.photo)
		recordToUpdate.lat = updateData.lat
		recordToUpdate.lon = updateData.lon
		const updatedRecord = await recordToUpdate.save()
		return new InfectedTreeDTO(updatedRecord)
	}

	async delete(id: string, accessToken?: string) {
		if (!accessToken) {
			throw ServerException.Unauthorized('access token not provided')
		}
		const userData = TokenService.validateAccessToken(accessToken)
		if (!userData) {
			throw ServerException.Expired()
		}
		const deletedRecord = await InfectedTree.findOneAndDelete({
			_id: id,
			user: userData.id
		})
		if (!deletedRecord) {
			throw ServerException.BadRequest('record with given id not found')
		}
		await FileService.deleteFile(deletedRecord.photoURL)
	}
}

export default new InfectedTreeService()
