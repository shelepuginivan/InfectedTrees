import styles from './code.module.css'

const Code = (props: {children: string}) => {
	return (
		<code class={styles.code}>
			<span>{props.children}</span>
			<button
				onclick={() => navigator.clipboard.writeText(props.children)}
				class={styles.clipButton}
			>
				<i class='icon-clip'></i>
			</button>
		</code>
	)
}

export default Code
