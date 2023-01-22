import {JSX} from 'solid-js'
import BaseUserInfo from "../components/BaseUserInfo";
import AdditionalInfo from "../components/AdditionalInfo";
import APIInfo from "../components/APIInfo";

const ProfilePage = (): JSX.Element => {
	return (
		<div class="page">
			<div class="two-cols">
				<div>
					<BaseUserInfo/>
					<AdditionalInfo/>
				</div>
				<APIInfo/>
			</div>
		</div>
	)
}

export default ProfilePage
