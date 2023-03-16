class AuthDTO implements IAuthDTO {
	accessToken: string
	user: IUserDTO

	constructor(data: any) {
		this.accessToken = data.accessToken
		this.user = data.user
	}
}

export default AuthDTO
