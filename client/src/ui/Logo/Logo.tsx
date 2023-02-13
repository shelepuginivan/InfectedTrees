import {JSX} from 'solid-js'
import {HOME_ROUTE} from '../../utils/consts'
import {A} from '@solidjs/router'
import styles from './logo.module.css'

const Logo = (): JSX.Element => {
	return (
		<A href={HOME_ROUTE} class={styles.logo}>
			<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80">
				<image href="/src/assets/favicon.svg"></image>
			</svg>
			<h1>Infected<br/>Trees</h1>
		</A>
	)
}

export default Logo
