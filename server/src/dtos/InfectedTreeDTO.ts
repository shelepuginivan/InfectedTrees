class InfectedTreeDTO implements IInfectedTreeDTO {
	id: string
    address: string
    lat: number
    lon: number
    photoURL: string

    constructor(data: any) {
		this.id = data._id
        this.lat = data.lat
        this.lon = data.lon
        this.address = data.address
        this.photoURL = data.photoURL
    }
}

export default InfectedTreeDTO
