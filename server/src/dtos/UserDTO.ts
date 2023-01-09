class UserDTO implements IUserDTO {
	id: string
	firstname: string;
	lastname: string;
	email: string;
	isActivated: boolean

	constructor(userDocument: any) {
		this.id = userDocument._id
		this.firstname = userDocument.firstname
		this.lastname = userDocument.lastname
		this.email = userDocument.email
		this.isActivated = userDocument.isActivated
	}
}

export default UserDTO
