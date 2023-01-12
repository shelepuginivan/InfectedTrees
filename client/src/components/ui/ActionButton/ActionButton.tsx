import {JSX} from "solid-js";
import styles from './actionButton.module.css'

const ActionButton = (props: JSX.ButtonHTMLAttributes<any>): JSX.Element => {
	return (
		<button disabled={props.disabled || false} class={styles.actionButton} onclick={props.onclick} type="button">{props.children}</button>
	);
};

export default ActionButton
