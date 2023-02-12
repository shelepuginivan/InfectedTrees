import {JSX, ParentProps} from 'solid-js'
import styles from './homePageSection.module.css'

const SectionSolution = (props: ParentProps): JSX.Element => {
	return (
		<section class={styles.section}>{props.children}</section>
	)
}

export default SectionSolution
