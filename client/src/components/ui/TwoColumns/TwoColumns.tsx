import {JSX, ParentProps} from 'solid-js'
import styles from './TwoColumns.module.css'

const TwoColumns = (props: ParentProps): JSX.Element => {
	return (
		<div class={styles.twoCols}>{props.children}</div>
	)
}

export default TwoColumns
