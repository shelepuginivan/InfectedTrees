import { JSX } from 'solid-js'

import styles from './dateInput.module.css'

const DateInput = (props: JSX.InputHTMLAttributes<any>) => {
	return (
		<input type='date' placeholder={props.placeholder || ''} class={styles.dateInput} value={props.value} onchange={props.onchange}/>
	)
}

export default DateInput
