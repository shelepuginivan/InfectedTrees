import { A } from '@solidjs/router'
import { AxiosError } from 'axios'
import { createSignal, JSX } from 'solid-js'

import styles from '../css/form.module.css'
import FormErrorMessage from '../ui/FormErrorMessage/FormErrorMessage'
import Input from '../ui/Input/Input'
import Logo from '../ui/Logo/Logo'
import PasswordInput from '../ui/PasswordInput/PasswordInput'
import SubmitButton from '../ui/SubmitButton/SubmitButton'
import { axiosInstanceUnauthorized } from '../utils/axiosInstanceUnauthorized'
import { HOME_ROUTE, REGISTRATION_ROUTE, SERVER_HOST } from '../utils/consts'
import { navigateTo } from '../utils/navigateTo'
import { validateEmail } from '../utils/validateEmail'

const LoginForm = (): JSX.Element => {
	const [getEmail, setEmail] = createSignal<string>('')
	const [getPassword, setPassword] = createSignal<string>('')
	const [getLoginFailed, setLoginFailed] = createSignal<boolean>(false)
	const [getErrorMessage, setErrorMessage] = createSignal<string>('')
	const login = async () => {
		if (!(getEmail() && getPassword())) {
			setLoginFailed(true)
			setErrorMessage('Заполните все поля')
			return
		}

		if (!validateEmail(getEmail())) {
			setLoginFailed(true)
			setErrorMessage('Некорректный Email')
			return
		}

		const loginData = {
			email: getEmail(),
			password: getPassword()
		}

		try {
			const loginResponse = await axiosInstanceUnauthorized.post(`${SERVER_HOST}/auth/login`, loginData)
			const userData = loginResponse.data
			sessionStorage.setItem('accessToken', userData.accessToken)
			sessionStorage.setItem('fullName', `${userData.user.firstname} ${userData.user.lastname}`)
			sessionStorage.setItem('email', userData.user.email)
			sessionStorage.setItem('hasAPIKey', userData.user.hasAPIKey.toString())
			navigateTo(HOME_ROUTE)
		} catch (e) {
			if (e instanceof AxiosError) {
				setLoginFailed(true)
				setErrorMessage('Неверный Email или пароль')
			}
		}

	}

	return (
		<form class={styles.form}>
			<Logo/>
			<Input placeholder='E-mail' value={getEmail()} onchange={e => setEmail((e.target as HTMLInputElement).value)}/>
			<PasswordInput placeholder='Пароль' value={getPassword()} onchange={e => setPassword((e.target as HTMLInputElement).value)}/>
			<SubmitButton onclick={login}>Войти</SubmitButton>
			<FormErrorMessage visible={getLoginFailed()}>{getErrorMessage}</FormErrorMessage>
			<p>Ещё нет аккаунта? <A href={REGISTRATION_ROUTE}>Зарегистрируйтесь</A></p>
		</form>
	)
}

export default LoginForm
