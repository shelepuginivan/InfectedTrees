import { A } from '@solidjs/router'
import { JSX } from 'solid-js'

import LoginLink from '../../ui/LoginLink/LoginLink'
import Logo from '../../ui/Logo/Logo'
import RegistrationLink from '../../ui/RegistrationLink/RegistrationLink'
import { PROFILE_ROUTE, UPLOAD_ROUTE, USER_UPLOADS_ROUTE } from '../../utils/consts'
import styles from './header.module.css'

const Header = (): JSX.Element => {
	const authorized = Boolean(sessionStorage.getItem('accessToken'))

	if (authorized) {
		return (
			<header class={styles.header}>
				<Logo/>
				<div class={styles.headerLinks}>
					<A class={styles.headerLink} href={USER_UPLOADS_ROUTE}>Мои записи</A>
					<A class={styles.headerLink} href={UPLOAD_ROUTE}>Загрузить фото</A>
					<A class={styles.headerLink} href={PROFILE_ROUTE}>Профиль</A>
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

export default Header
