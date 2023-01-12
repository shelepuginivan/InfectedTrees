import {JSX} from 'solid-js'
import BaseUserInfo from "../components/BaseUserInfo";

const ProfilePage = (): JSX.Element => {
	return (
		<div class="page">
			<div class="two-cols">
				<div>
					<BaseUserInfo/>
				</div>

				{/* API menu */}
			</div>
		</div>
	)
}

export default ProfilePage
