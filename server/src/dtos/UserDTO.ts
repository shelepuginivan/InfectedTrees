class UserDTO implements IUserDTO {
	firstname: string;
	lastname: string;
	email: string;
	isActivated: boolean

	constructor(userDocument: any) {
		this.firstname = userDocument.firstname
		this.lastname = userDocument.lastname
		this.email = userDocument.email
		this.isActivated = userDocument.isActivated
	}
}

export default UserDTO
