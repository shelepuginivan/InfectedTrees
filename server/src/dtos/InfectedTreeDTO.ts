class InfectedTreeDTO implements IInfectedTreeDTO {
	id: string
    address: string
    lat: number
    lon: number
    photoURL: string
	uploadTime: number

    constructor(data: any) {
		this.id = data._id
        this.lat = data.lat
        this.lon = data.lon
        this.address = data.address
        this.photoURL = data.photoURL
		this.uploadTime = data.uploadTime
    }
}

export default InfectedTreeDTO
