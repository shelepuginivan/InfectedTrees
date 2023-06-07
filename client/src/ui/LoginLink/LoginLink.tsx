import { A } from '@solidjs/router'
import { JSX } from 'solid-js'

import { LOGIN_ROUTE } from '../../utils/consts'
import styles from './loginLink.module.css'

const LoginLink = (): JSX.Element => {
	return (
		<A class={styles.loginLink} href={LOGIN_ROUTE}>Войти</A>
	)
}

export default LoginLink
