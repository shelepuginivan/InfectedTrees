import {IUserService} from "../interfaces/IUserService";
import ServerException from "../exceptions/ServerException";
import TokenService from "./TokenService";
import User from "../models/User";
import UserDTO from "../dtos/UserDTO";

class UserService implements IUserService {
	async updateUserData(organization: string, birthdate: number, phoneNumber: number, accessToken?: string): Promise<UserDTO> {
		if (!accessToken) {
			throw ServerException.Unauthorized('access token not provided')
		}
		const userData = TokenService.validateAccessToken(accessToken)
		if (!userData) {
			throw ServerException.Expired()
		}
		const updatedUserData = await User.findByIdAndUpdate(userData.id, {
			$set: {
				organization,
				phoneNumber,
				birthdate
			}
		}, {new: true})
		if (!updatedUserData) {
			throw ServerException.BadRequest(`user with id ${userData.id} not found`)
		}
		return new UserDTO(updatedUserData)
	}
}

export default new UserService()
