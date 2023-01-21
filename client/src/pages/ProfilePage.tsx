import {JSX} from 'solid-js'
import BaseUserInfo from "../components/BaseUserInfo";
import AdditionalInfo from "../components/AdditionalInfo";

const ProfilePage = (): JSX.Element => {
	return (
		<div class="page">
			<div class="two-cols">
				<div>
					<BaseUserInfo/>
					<AdditionalInfo/>
				</div>

				{/* API menu */}
			</div>
		</div>
	)
}

export default ProfilePage
