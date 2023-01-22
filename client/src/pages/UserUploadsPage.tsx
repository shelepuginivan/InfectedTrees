import {JSX} from 'solid-js'
import InfectedTreeCardsContainer from '../components/InfectedTreeCardsContainer'
import Page from '../components/ui/Page/Page'
import MainHeader from '../components/ui/MainHeader/MainHeader'

const UserUploadsPage = (): JSX.Element => {
	return (
		<Page>
			<MainHeader>Мои записи</MainHeader>
			<InfectedTreeCardsContainer/>
		</Page>
	)
}

export default UserUploadsPage
