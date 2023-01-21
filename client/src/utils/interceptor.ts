import {AxiosError} from "axios";
import {navigateTo} from "./navigateTo";
import {LOGIN_ROUTE, SERVER_HOST} from "./consts";
import {axiosInstanceAuthorized} from "./axiosInstanceAuthorized";

export const interceptor = async (requestFunction: () => void, accessToken: string): Promise<void> => {
	try {
		await requestFunction()
	} catch (e) {
		if (e instanceof AxiosError && e.response?.status === 401) {
			sessionStorage.clear()
			navigateTo(LOGIN_ROUTE)
		} else if (e instanceof AxiosError && e.response?.data.message === 'expired') {
			await axiosInstanceAuthorized(accessToken).get(`${SERVER_HOST}/auth/refresh`)
				.then(async response => {
					sessionStorage.setItem('accessToken', response.data.accessToken)
					await requestFunction()
				})
				.catch(() => {
					sessionStorage.clear()
					navigateTo(LOGIN_ROUTE)
				})
		}
	}
}
