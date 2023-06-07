import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import ProfilePage from '../pages/ProfilePage'
import RegistrationPage from '../pages/RegistrationPage'
import UploadPage from '../pages/UploadPage'
import UserUploadsPage from '../pages/UserUploadsPage'
import {
	HOME_ROUTE,
	LOGIN_ROUTE,
	PROFILE_ROUTE,
	REGISTRATION_ROUTE,
	UPLOAD_ROUTE,
	USER_UPLOADS_ROUTE
} from './consts'
import { RouteDependency } from './types/RouteDependency'

export const unauthorizedRoutes: RouteDependency[] = [
	{
		route: HOME_ROUTE,
		component: HomePage
	},
	{
		route: LOGIN_ROUTE,
		component: LoginPage
	},
	{
		route: REGISTRATION_ROUTE,
		component: RegistrationPage
	}
]

export const authorizedRoutes: RouteDependency[] = [
	{
		route: HOME_ROUTE,
		component: HomePage
	},
	{
		route: PROFILE_ROUTE,
		component: ProfilePage
	},
	{
		route: UPLOAD_ROUTE,
		component: UploadPage
	},
	{
		route: USER_UPLOADS_ROUTE,
		component: UserUploadsPage
	}
]
