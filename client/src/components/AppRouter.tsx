import {JSX} from "solid-js";
import {Route, Router, Routes} from "@solidjs/router";
import {unauthorizedRoutes} from "../utils/routes";
import Header from "./Header";


const AppRouter = (): JSX.Element => {
	const authorized = Boolean(sessionStorage.getItem('accessToken'))

	if (authorized) {
		return (
			<Router>
				<Header/>
				<Routes>
					<Route path={'/'} element={<div></div>}/>
				</Routes>
			</Router>
		)
	} else {
		return (
			<Router>
				<Routes>
					{unauthorizedRoutes.map(item => <Route path={item.route} component={item.component}/>)}
				</Routes>
			</Router>
		)
	}
}

export default AppRouter
