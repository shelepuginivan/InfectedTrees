import { createSignal, JSX } from 'solid-js'

import styles from './passwordInput.module.css'

const PasswordInput = (props: JSX.InputHTMLAttributes<HTMLInputElement>): JSX.Element => {
	const [getVisible, setVisible] = createSignal(false)

	return (
		<div class={styles.inputWrapper}>
			<input
				value={props.value}
				onchange={props.onchange}
				placeholder={props.placeholder}
				type={getVisible() ? 'text' : 'password'}
				class={styles.input}
			/>
			<button
				onClick={() => setVisible(prev => !prev)}
				class={styles.watchButton}
				type='button'
			>
				<i class={getVisible() ? 'icon-invisible' : 'icon-visible'}></i>
			</button>
		</div>
	)
}

export default PasswordInput
