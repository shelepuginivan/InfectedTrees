class InfectedTreeDTO implements IInfectedTreeDTO {
    address: string;
    lat: number;
    lon: number;
    photoURL: string;

    constructor(data: IInfectedTreeDTO) {
        this.lat = data.lat
        this.lon = data.lon
        this.address = data.address
        this.photoURL = data.photoURL
    }
}

export default InfectedTreeDTO
