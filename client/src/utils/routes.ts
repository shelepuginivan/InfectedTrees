import {RouteDependency} from "./types/RouteDependency";
import {HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "./consts";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import HomePage from "../pages/HomePage";

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
