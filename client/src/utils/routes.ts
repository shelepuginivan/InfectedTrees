import {RouteDependency} from "./types/RouteDependency";
import {HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, PROFILE_ROUTE, UPLOAD_ROUTE} from "./consts";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import UploadPage from "../pages/UploadPage";

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
		route: PROFILE_ROUTE,
		component: ProfilePage
	},
	{
		route: UPLOAD_ROUTE,
		component: UploadPage
	}
]
