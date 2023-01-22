import {JSX, ParentProps} from 'solid-js'
import styles from './TwoColumns.module.css'

const TwoColumns = (props: ParentProps): JSX.Element => {
	return (
		<div class={styles.twoColumns}>{props.children}</div>
	)
}

export default TwoColumns
