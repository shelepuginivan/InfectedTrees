import {JSX} from 'solid-js'
import styles from '../css/authPage.module.css'
import AuthFormContainer from '../components/AuthFormContainer/AuthFormContainer'
import LoginForm from '../components/LoginForm'

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
