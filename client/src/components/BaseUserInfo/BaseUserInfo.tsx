import { JSX } from 'solid-js'

import Container from '../../ui/Container/Container'
import LogoutButton from '../../ui/LogoutButton/LogoutButton'

const BaseUserInfo = (): JSX.Element => {
	const fullName = sessionStorage.getItem('fullName')
	const email = sessionStorage.getItem('email')

	return (
		<Container>
			<h1>{fullName}</h1>
			<p>{email}</p>
			<LogoutButton>Выйти</LogoutButton>
		</Container>
	)
}

export default BaseUserInfo
