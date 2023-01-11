import {RouteDependency} from "./types/RouteDependency";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "./consts";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";

export const unauthorizedRoutes: RouteDependency[] = [
	{
		route: LOGIN_ROUTE,
		component: LoginPage
	},
	{
		route: REGISTRATION_ROUTE,
		component: RegistrationPage
	}
]
