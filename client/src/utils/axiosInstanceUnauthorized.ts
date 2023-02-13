import axios, {AxiosInstance} from 'axios'

export const axiosInstanceUnauthorized: AxiosInstance = axios.create({
	withCredentials: true,
})
