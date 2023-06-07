import { JSX } from 'solid-js'

import AdditionalInfo from '../components/AdditionalInfo/AdditionalInfo'
import APIInfo from '../components/APIInfo/APIInfo'
import BaseUserInfo from '../components/BaseUserInfo/BaseUserInfo'
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
