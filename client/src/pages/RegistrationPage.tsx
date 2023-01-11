import {JSX} from 'solid-js'
import AuthFormContainer from '../components/AuthFormContainer'
import styles from '../css/authPage.module.css'
import RegistrationForm from "../components/RegistrationForm";

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
