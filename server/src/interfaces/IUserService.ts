import UserDTO from '../dtos/UserDTO'

export interface IUserService {
	updateUserData(organization: string, birthdate: number, phoneNumber: number, accessToken: string): Promise<UserDTO>
}
