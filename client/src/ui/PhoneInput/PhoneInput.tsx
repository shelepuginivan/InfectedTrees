import {JSX} from 'solid-js'
import styles from './phoneNumber.module.css'

const PhoneInput = (props: JSX.InputHTMLAttributes<any>): JSX.Element => {
	return (
		<input type="tel" placeholder={props.placeholder || ''} class={styles.phoneInput} value={props.value} onchange={props.onchange}/>
	);
};

export default PhoneInput;
