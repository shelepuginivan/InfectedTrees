import { JSX } from 'solid-js'

import styles from './textInput.module.css'

const TextInput = (props: JSX.InputHTMLAttributes<any>): JSX.Element => {
	return (
		<input placeholder={props.placeholder || ''} value={props.value || ''} onchange={props.onchange} class={styles.textInput} type={props.type} />
	)
}

export default TextInput
