import {JSX} from 'solid-js'
import BaseUserInfo from "../components/BaseUserInfo";
import AdditionalInfo from "../components/AdditionalInfo";
import APIInfo from "../components/APIInfo";
import Page from "../components/ui/Page/Page";
import TwoColumns from "../components/ui/TwoColumns/TwoColumns";

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
