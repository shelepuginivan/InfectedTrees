import {createSignal, JSX} from 'solid-js'
import styles from '../css/form.module.css'
import TextInput from "./ui/TextInput/TextInput";
import PasswordInput from "./ui/PasswordInput/PasswordInput";
import SubmitButton from "./ui/SubmitButton/SubmitButton";
import {axiosInstanceUnauthorized} from "../utils/axiosInstanceUnauthorized";
import {REGISTRATION_ROUTE, SERVER_HOST} from "../utils/consts";
import Logo from "./ui/Logo";
import {A} from "@solidjs/router";

const LoginForm = (): JSX.Element => {
	const [getEmail, setEmail] = createSignal<string>('')
	const [getPassword, setPassword] = createSignal<string>('')

	const login = async () => {
		// TODO: form validation
		const loginData = {
			email: getEmail(),
			password: getPassword()
		}
		try {
			const loginResponse = await axiosInstanceUnauthorized.post(`${SERVER_HOST}/auth/login`, loginData)
			const userData = loginResponse.data
			sessionStorage.setItem('accessToken', userData.accessToken)
			sessionStorage.setItem('fullName', `${userData.user.firstname} ${userData.user.lastname}`)
		} catch (e) {
			console.log(e);
		}

	}

	return (
		<form class={styles.form}>
			<Logo/>
			<TextInput placeholder="E-mail" value={getEmail()} onchange={e => setEmail((e.target as HTMLInputElement).value)}/>
			<PasswordInput placeholder="Пароль" value={getPassword()} onchange={e => setPassword((e.target as HTMLInputElement).value)}/>
			<SubmitButton onclick={login}>Войти</SubmitButton>
			<p>Ещё нет аккаунта? <A href={REGISTRATION_ROUTE}>Зарегистрируйтесь</A></p>
		</form>
	);
};

export default LoginForm;
