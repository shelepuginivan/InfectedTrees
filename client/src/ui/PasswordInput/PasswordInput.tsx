import { createSignal, JSX } from 'solid-js'

import styles from './passwordInput.module.css'

const PasswordInput = (props: JSX.InputHTMLAttributes<any>): JSX.Element => {
	const [visible, setVisible] = createSignal<boolean>(false)

	return (
		<div class={styles.inputWrapper}>
			<input class={styles.input} placeholder={props.placeholder} value={props.value} onchange={props.onchange} type={visible() ? 'text' : 'password'} />
			<button class={styles.watchButton} type='button' onClick={() => setVisible(prev => !prev)}><span class={visible() ? 'icon-invisible' : 'icon-visible'}></span></button>
		</div>
	)
}

export default PasswordInput
