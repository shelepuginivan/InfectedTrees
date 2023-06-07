import { JSX } from 'solid-js'

import AuthFormContainer from '../components/AuthFormContainer/AuthFormContainer'
import LoginForm from '../components/LoginForm'
import styles from '../css/authPage.module.css'

const LoginPage = (): JSX.Element => {
	return (
		<div class={styles.authPage}>
			<AuthFormContainer>
				<LoginForm/>
			</AuthFormContainer>
		</div>
	)
}

export default LoginPage
