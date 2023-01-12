import {JSX, ParentProps} from 'solid-js'
import {axiosInstanceAuthorized} from "../../../utils/axiosInstanceAuthorized";
import {LOGIN_ROUTE, SERVER_HOST} from "../../../utils/consts";
import styles from './logoutButton.module.css'

const LogoutButton = (props: ParentProps): JSX.Element => {
	const accessToken = sessionStorage.getItem('accessToken')
	const logout = async () => {
		await axiosInstanceAuthorized(accessToken as string).post(`${SERVER_HOST}/auth/logout`)
		sessionStorage.clear()
		document.location.href = LOGIN_ROUTE
	}

	return (
		<button class={styles.logoutButton} onclick={logout}>{props.children}</button>
	);
};

export default LogoutButton;
