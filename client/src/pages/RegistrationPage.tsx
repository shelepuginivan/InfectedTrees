import { JSX } from 'solid-js'

import AuthFormContainer from '../components/AuthFormContainer/AuthFormContainer'
import RegistrationForm from '../components/RegistrationForm'
import styles from '../css/authPage.module.css'

const RegistrationPage = (): JSX.Element => {
	return (
		<div class={styles.authPage}>
			<AuthFormContainer>
				<RegistrationForm/>
			</AuthFormContainer>
		</div>

	)
}

export default RegistrationPage
