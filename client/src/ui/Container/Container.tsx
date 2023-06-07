import { JSX, ParentProps } from 'solid-js'

import styles from './Container.module.css'

const Container = (props: ParentProps): JSX.Element => {
	return (
		<div class={styles.container}>{props.children}</div>
	)
}

export default Container
