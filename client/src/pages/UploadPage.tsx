import InfectedTreeUploadForm from '../components/InfectedTreeUploadForm'
import MainHeader from '../components/ui/MainHeader/MainHeader'
import Page from '../components/ui/Page/Page'

const UploadPage = () => {
	return (
		<Page>
			<MainHeader>Новая запись</MainHeader>
			<InfectedTreeUploadForm/>
		</Page>
	)
}

export default UploadPage
