import {JSX, ParentProps} from 'solid-js'
import styles from './Center.module.css'

const Center = (props: ParentProps): JSX.Element => {
	return (
		<div class={styles.center}>{props.children}</div>
	)
}

export default Center
