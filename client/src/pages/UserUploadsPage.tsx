import {JSX} from "solid-js";
import InfectedTreeCardsContainer from "../components/InfectedTreeCardsContainer";

const UserUploadsPage = (): JSX.Element => {
	return (
		<div class="page">
			<h1 class="main-page-header">Мои записи</h1>
			<InfectedTreeCardsContainer/>
		</div>
	);
};

export default UserUploadsPage;
