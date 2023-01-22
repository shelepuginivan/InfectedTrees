import {createSignal, JSX, onMount, Show} from "solid-js";
import ActionButton from "./ui/ActionButton/ActionButton";
import {axiosInstanceAuthorized} from "../utils/axiosInstanceAuthorized";
import {SERVER_HOST} from "../utils/consts";
import Code from "./ui/Code/Code";
import {interceptor} from "../utils/interceptor";
import Container from "./ui/Container/Container";

const ApiInfo = (): JSX.Element => {
	const userHasAPIKey: boolean = sessionStorage.getItem('hasAPIKey') === 'true'
	const [getHasKey, setHasKey] = createSignal<boolean>(userHasAPIKey)
	const [getKey, setKey] = createSignal<string>('')

	const generateAPIKey = async () => {
		const APIKeyResponse = await axiosInstanceAuthorized(sessionStorage.getItem('accessToken') as string).post(`${SERVER_HOST}/api`)
		const APIKey = APIKeyResponse.data.key
		sessionStorage.setItem('hasAPIKey', 'true')
		setHasKey(true)
		setKey(APIKey)
	}

	const getAPIKey = async () => {
		const APIKeyResponse = await axiosInstanceAuthorized(sessionStorage.getItem('accessToken') as string).get(`${SERVER_HOST}/api`)
		const APIKey = APIKeyResponse.data.key
		setKey(APIKey)
	}

	onMount(async () => {
		if (getHasKey()) {
			await interceptor(getAPIKey, sessionStorage.getItem('accessToken') as string)
		}
	})

	return (
		<Show keyed={true} when={getHasKey()} fallback={
			<Container>
				<h1>API</h1>
				<p>Наш сервис предоставляет бесплатный API для разработчиков ПО, волонтёров и государственных
					организаций</p>
				<h2>Ваш API ключ</h2>
				<ActionButton
					onclick={async () => await interceptor(generateAPIKey, sessionStorage.getItem('accessToken') as string)}
				>Сгенерировать ключ</ActionButton>
				<p>Также рекомендуем вам ознакомиться с документацией к API</p>
			</Container>
		}>
			<Container>
				<h1>API</h1>
				<p>Наш сервис предоставляет бесплатный API для разработчиков ПО, волонтёров и государственных организаций</p>
				<h2>Ваш API ключ</h2>
				<Code>{getKey()}</Code>
				<p>Также рекомендуем вам ознакомиться с документацией к API</p>
			</Container>
		</Show>
	)
}

export default ApiInfo;
