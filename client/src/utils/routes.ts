import {RouteDependency} from "./types/RouteDependency";
import {
	HOME_ROUTE,
	LOGIN_ROUTE,
	REGISTRATION_ROUTE,
	PROFILE_ROUTE,
	UPLOAD_ROUTE,
	USER_UPLOADS_ROUTE
} from "./consts";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import UploadPage from "../pages/UploadPage";
import UserUploadsPage from "../pages/UserUploadsPage";

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
