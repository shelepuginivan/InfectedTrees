import {JSX} from 'solid-js'
import {A} from '@solidjs/router'
import styles from '../css/header.module.css'
import Logo from "./ui/Logo";
import LoginLink from "./ui/LoginLink/LoginLink";
import RegistrationLink from "./ui/RegistrationLink/RegistrationLink";

const Header = (): JSX.Element => {
	const authorized = Boolean(sessionStorage.getItem('accessToken'))

	if (authorized) {
		return (
			<header class={styles.header}>
				<Logo/>
				<div class={styles.headerLinks}>
					<A class={styles.headerLink} href={'/'}>Мои записи</A>
					<A class={styles.headerLink} href={'/'}>Загрузить фото</A>
					<A class={styles.headerLink} href={'/'}>Профиль</A>
				</div>
			</header>
		)
	} else {
		return (
			<header class={styles.header}>
				<Logo/>
				<div class={styles.authLinks}>
					<LoginLink/>
					<RegistrationLink/>
				</div>
			</header>
		)
	}
}

export default Header;
