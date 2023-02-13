import {JSX} from 'solid-js'
import LogoutButton from '../../ui/LogoutButton/LogoutButton'
import Container from '../../ui/Container/Container'

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
