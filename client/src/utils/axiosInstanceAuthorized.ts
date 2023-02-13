import axios, {AxiosInstance} from 'axios'

export const axiosInstanceAuthorized = (accessToken: string): AxiosInstance => axios.create({
	withCredentials: true,
	headers: {
		'Authorization': `Bearer ${accessToken}`
	}
})
