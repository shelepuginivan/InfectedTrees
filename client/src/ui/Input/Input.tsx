import { JSX } from 'solid-js'

import styles from './input.module.css'

const Input = (props: JSX.InputHTMLAttributes<HTMLInputElement>): JSX.Element =>
	<input
		placeholder={props.placeholder}
		value={props.value}
		onchange={props.onchange}
		class={styles.input}
		type={props.type || 'text'}
	/>

export default Input
