import {JSX, ParentProps} from 'solid-js'
import styles from './InfoMessage.module.css'

const InfoMessage = (props: ParentProps): JSX.Element => {
	return (
		<h1 class={styles.infoMessage}>{props.children}</h1>
	)
}

export default InfoMessage
