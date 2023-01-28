import {JSX} from 'solid-js'
import InfectedTreeCardsContainer from '../components/InfectedTreeCardsContainer/InfectedTreeCardsContainer'
import Page from '../ui/Page/Page'
import MainHeader from '../ui/MainHeader/MainHeader'

const UserUploadsPage = (): JSX.Element => {
	return (
		<Page>
			<MainHeader>Мои записи</MainHeader>
			<InfectedTreeCardsContainer/>
		</Page>
	)
}

export default UserUploadsPage
