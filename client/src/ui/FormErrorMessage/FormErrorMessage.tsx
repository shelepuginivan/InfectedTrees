import {JSX, ParentProps} from 'solid-js'
import styles from './FormErrorMessage.module.css'

const FormErrorMessage = (props: ParentProps & {visible: boolean}): JSX.Element =>
	<span class={styles.errorMessage} data-visible={props.visible}>{props.children}</span>

export default FormErrorMessage
