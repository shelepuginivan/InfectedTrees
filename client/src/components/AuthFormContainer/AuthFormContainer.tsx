import {JSX, ParentProps} from 'solid-js'
import styles from './authFormContainer.module.css'

const AuthFormContainer = (props: ParentProps): JSX.Element => {
	return (
		<div class={styles.authFormContainer}>
			{props.children}
		</div>
	)
}

export default AuthFormContainer
