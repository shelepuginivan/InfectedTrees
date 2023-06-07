import { JSX } from 'solid-js'

import { InfectedTreeCardProps } from '../../utils/types/InfectedTreeCardProps'
import styles from './infectedTreeCard.module.css'

const InfectedTreeCard = (props: InfectedTreeCardProps): JSX.Element => {
	return (
		<div class={styles.card}>
			<img class={styles.image} src={props.photoURL} alt=''/>
			<div class={styles.data}>
				<p>Широта: {props.lat}</p>
				<p>Долгота: {props.lon}</p>
				<p>Дата загрузки: {Intl.DateTimeFormat('ru').format(props.uploadTime)}</p>
			</div>
		</div>
	)
}

export default InfectedTreeCard
