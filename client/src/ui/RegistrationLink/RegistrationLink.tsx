import { A } from '@solidjs/router'
import { JSX } from 'solid-js'

import { LOGIN_ROUTE } from '../../utils/consts'
import styles from './registrationLink.module.css'

const RegistrationLink = (): JSX.Element => {
	return (
		<A class={styles.registrationLink} href={LOGIN_ROUTE}>Зарегистрироваться</A>
	)
}

export default RegistrationLink
