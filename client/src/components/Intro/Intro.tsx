import {JSX} from 'solid-js'
import styles from './intro.module.css'

const Intro = (): JSX.Element => {
	return (
		<section class={styles.intro}>
			<h1>Внесите<br/><i>свой&nbsp;вклад</i><br/>в спасение вязов</h1>
		</section>
	)
}

export default Intro
