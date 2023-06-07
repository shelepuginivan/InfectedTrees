import { useNavigate } from '@solidjs/router'
import { JSX } from 'solid-js'

type PropsType = {
	to: string
	replace: boolean
}

const Redirect = (props: PropsType): JSX.Element => {
	const navigate = useNavigate()
	navigate(props.to, { replace: props.replace })

	return
}

export default Redirect
