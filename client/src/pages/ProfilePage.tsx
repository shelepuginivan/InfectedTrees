import {JSX} from 'solid-js'
import BaseUserInfo from '../components/BaseUserInfo/BaseUserInfo'
import AdditionalInfo from '../components/AdditionalInfo/AdditionalInfo'
import APIInfo from '../components/APIInfo/APIInfo'
import Page from '../ui/Page/Page'
import TwoColumns from '../ui/TwoColumns/TwoColumns'

const ProfilePage = (): JSX.Element => {
	return (
		<Page>
			<TwoColumns>
				<div>
					<BaseUserInfo/>
					<AdditionalInfo/>
				</div>
				<APIInfo/>
			</TwoColumns>
		</Page>
	)
}

export default ProfilePage
