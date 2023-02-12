import {JSX} from 'solid-js'
import HomePageSection from '../../ui/HomePageSection/HomePageSection'
import {Link} from '@solidjs/router'
import {GRAFIOZ_DOC, REGISTRATION_ROUTE} from '../../utils/consts'
import takePart from '../../assets/takepart.jpg'

const SectionTakePart = (): JSX.Element => {
	return (
		<HomePageSection>
			<div>
				<h2>Участие</h2>
				<h1>Как принять участие</h1>
				<blockquote>
					<p>1. <Link href={REGISTRATION_ROUTE}>Зарегистрируйтесь</Link> в системе</p>
					<p>2. Ознакомьтесь с <a target="_blank" href={GRAFIOZ_DOC}>пособием</a> по изучению графиоза</p>
					<p>3. Фотографируйте больные деревья на телефон</p>
					<p>4. Загружайте фото в сервис</p>
				</blockquote>
			</div>
			<img src={takePart} alt="Примите участие"/>
		</HomePageSection>
	)
}

export default SectionTakePart
