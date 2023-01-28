import {JSX} from "solid-js";
import {HOME_ROUTE} from "../utils/consts";
import {A} from "@solidjs/router";

const Logo = (): JSX.Element => {
	return (
		<A href={HOME_ROUTE}>
			<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80">
				<image href="/src/assets/logo.svg"></image>
			</svg>
		</A>
	);
};

export default Logo;
