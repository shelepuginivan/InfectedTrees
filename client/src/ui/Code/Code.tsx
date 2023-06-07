import styles from './code.module.css'

const Code = (props: {children: string}) => {
	return (
		<code class={styles.code}>
			<span>{props.children}</span>
			<button class={styles.clipButton} onclick={() => navigator.clipboard.writeText(props.children)}>
				<span class='icon-clip'></span>
			</button>
		</code>
	)
}

export default Code
