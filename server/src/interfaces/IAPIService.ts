import UserDTO from "../dtos/UserDTO";

export interface IAPIService {
	generateAPIKey(accessToken?: string): Promise<{user: UserDTO, key: string}>

	getAPIKey(accessToken?: string): Promise<{user: UserDTO, key: string}>
}
