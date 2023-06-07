import { useNavigate } from '@solidjs/router'

type navigatorProps = {
	to: string
	replace: boolean
}

const Redirect = (props: navigatorProps): any => {
	const navigate = useNavigate()
	return navigate(props.to, { replace: props.replace })
}

export default Redirect
