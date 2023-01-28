import InfectedTreeUploadForm from '../components/InfectedTreeUploadForm/InfectedTreeUploadForm'
import MainHeader from '../ui/MainHeader/MainHeader'
import Page from '../ui/Page/Page'

const UploadPage = () => {
	return (
		<Page>
			<MainHeader>Новая запись</MainHeader>
			<InfectedTreeUploadForm/>
		</Page>
	)
}

export default UploadPage
