import { JSX, ParentProps } from 'solid-js'

import styles from './MainHeader.module.css'

const MainHeader = (props: ParentProps): JSX.Element => {
	return (
		<h1 class={styles.mainHeader}>{props.children}</h1>
	)
}

export default MainHeader
