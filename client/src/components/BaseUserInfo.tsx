import {JSX} from 'solid-js'
import LogoutButton from "./ui/LogoutButton/LogoutButton";
import styles from '../css/baseUserInfo.module.css'

const BaseUserInfo = (): JSX.Element => {
	const fullName = sessionStorage.getItem('fullName')
	const email = sessionStorage.getItem('email')

	return (
		<div class={styles.baseUserInfo}>
			<h1>{fullName}</h1>
			<p>{email}</p>
			<LogoutButton>Выйти</LogoutButton>
		</div>
	);
};

export default BaseUserInfo;
