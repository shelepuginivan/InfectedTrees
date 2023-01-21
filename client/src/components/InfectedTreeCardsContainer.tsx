import {createSignal, JSX, onMount} from "solid-js";
import {axiosInstanceAuthorized} from "../utils/axiosInstanceAuthorized";
import {SERVER_HOST} from "../utils/consts";
import InfectedTreeCard from "./InfectedTreeCard";
import styles from '../css/infectedTreeCardsContainer.module.css'
import {interceptor} from "../utils/interceptor";

const InfectedTreeCardsContainer = (): JSX.Element => {
	const [getUserRecords, setUserRecords] = createSignal<any[]>([])

	const recordsRequest = async (): Promise<void> => {
		const userRecordsResponse = await axiosInstanceAuthorized(sessionStorage.getItem('accessToken') as string).get(`${SERVER_HOST}/records`)
		setUserRecords(userRecordsResponse.data)
	}

	onMount(async () => await interceptor(recordsRequest, sessionStorage.getItem('accessToken') as string))

	return (
		<div class={styles.container}>
			{
				getUserRecords().map(record => <InfectedTreeCard lat={record.lat} lon={record.lon} uploadTime={record.uploadTime} photoURL={`${SERVER_HOST}/api/files/${record.photoURL}`}/>)
			}
		</div>
	);
};

export default InfectedTreeCardsContainer;
