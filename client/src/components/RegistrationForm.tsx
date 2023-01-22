import {createSignal, JSX} from "solid-js";
import {RegistrationData} from "../utils/types/RegistrationData";
import {AxiosError} from "axios";
import {axiosInstanceUnauthorized} from "../utils/axiosInstanceUnauthorized";
import {HOME_ROUTE, LOGIN_ROUTE, SERVER_HOST} from "../utils/consts";
import TextInput from "./ui/TextInput/TextInput";
import PasswordInput from "./ui/PasswordInput/PasswordInput";
import SubmitButton from "./ui/SubmitButton/SubmitButton";
import {A} from "@solidjs/router";
import styles from '../css/form.module.css'
import Logo from "./ui/Logo";
import {navigateTo} from "../utils/navigateTo";

const RegistrationForm = (): JSX.Element => {
	const [getFirstname, setFirstname] = createSignal<string>('')
	const [getLastname, setLastname] = createSignal<string>('')
	const [getEmail, setEmail] = createSignal<string>('')
	const [getPassword, setPassword] = createSignal<string>('')


	const registration = async (): Promise<void> => {
		// TODO: form validation
		const registrationData: RegistrationData = {
			firstname: getFirstname(),
			lastname: getLastname(),
			email: getEmail(),
			password: getPassword()
		}
		try {
			const registrationResponse = await axiosInstanceUnauthorized.post(`${SERVER_HOST}/auth/registration`, registrationData)
			const userData = registrationResponse.data
			sessionStorage.setItem('accessToken', userData.accessToken)
			sessionStorage.setItem('fullName', `${userData.user.firstname} ${userData.user.lastname}`)
			sessionStorage.setItem('email', userData.user.email)
			sessionStorage.setItem('hasAPIKey', 'false')
			navigateTo(HOME_ROUTE)
		} catch (e) {
			if (e instanceof AxiosError) {
				console.log(e.message);
			}
		}
	}

	return (
		<form class={styles.form}>
			<Logo/>
			<TextInput placeholder="Имя" value={getFirstname()} onchange={e => setFirstname((e.target as HTMLInputElement).value)}/>
			<TextInput placeholder="Фамилия" value={getLastname()} onchange={e => setLastname((e.target as HTMLInputElement).value)}/>
			<TextInput placeholder="E-mail" value={getEmail()} onchange={e => setEmail((e.target as HTMLInputElement).value)}/>
			<PasswordInput placeholder="Пароль" value={getPassword()} onchange={e => setPassword((e.target as HTMLInputElement).value)}/>
			<SubmitButton onclick={registration}>Зарегистрироваться</SubmitButton>
			<p>Уже есть аккаунт? <A href={LOGIN_ROUTE}>Войти</A></p>
		</form>
	);
};

export default RegistrationForm;
