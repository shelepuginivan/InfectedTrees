import { JSX } from 'solid-js'

import styles from './actionButton.module.css'

const ActionButton = (props: JSX.ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element =>
	<button
		disabled={props.disabled}
		class={styles.actionButton}
		onclick={props.onclick}
		type='button'
	>{props.children}</button>

export default ActionButton
