import {JSX} from "solid-js";
import {Route, Router, Routes} from "@solidjs/router";
import {unauthorizedRoutes} from "../utils/routes";
import Header from "./Header";
import Redirect from "./Redirect";
import {HOME_ROUTE} from "../utils/consts";


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
					<Route path='*' element={<Redirect to={HOME_ROUTE} replace={true}/>}/>
				</Routes>
			</Router>
		)
	}
}

export default AppRouter
