import { JSX } from 'solid-js'

import styles from './submitButton.module.css'

const SubmitButton = (props: JSX.ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element =>
	<button
		onclick={props.onclick}
		class={styles.submitButton}
		type='button'
	>
		{props.children}
	</button>

export default SubmitButton
