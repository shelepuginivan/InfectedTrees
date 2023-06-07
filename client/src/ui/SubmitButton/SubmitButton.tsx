import { JSX } from 'solid-js'

import styles from './submitButton.module.css'

const SubmitButton = (props: JSX.ButtonHTMLAttributes<any>): JSX.Element => {
	return (
		<button class={styles.submitButton} onclick={props.onclick} type='button'>{props.children}</button>
	)
}

export default SubmitButton
