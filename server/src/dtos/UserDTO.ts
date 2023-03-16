class UserDTO implements IUserDTO {
	id: string
	firstname: string
	lastname: string
	email: string
	isActivated: boolean
	organization?: string
	phoneNumber?: number
	birthdate?: number
	hasAPIKey: boolean

	constructor(userDocument: any) {
		this.id = userDocument._id
		this.firstname = userDocument.firstname
		this.lastname = userDocument.lastname
		this.email = userDocument.email
		this.isActivated = userDocument.isActivated
		this.organization = userDocument?.organization
		this.phoneNumber = userDocument?.phoneNumber
		this.birthdate = userDocument?.birthdate
		this.hasAPIKey = userDocument.hasAPIKey
	}
}

export default UserDTO
