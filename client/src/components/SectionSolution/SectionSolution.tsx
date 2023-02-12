import {JSX} from 'solid-js'
import HomePageSection from '../../ui/HomePageSection/HomePageSection'
import logoImage from '../../assets/logo-image.jpg'

const SectionSolution = (): JSX.Element => {
	return (
		<HomePageSection>
			<img src={logoImage} alt="Логотип Infected Trees"/>
			<div>
				<h2>Решение</h2>
				<h1>О проекте</h1>
				<p>
					Проект "Infected Trees" призван решить проблему гибели вязов в
					Санкт-Петербурге. Благодаря сбору данных о больных деревьях,
					волонтёрские организации смогут своевременно узнать о проблеме
					и предпринять необходимые меры.
					<br/><br/>
					Принять участие в сборе данных может абсолютно каждый!
				</p>
			</div>
		</HomePageSection>
	)
}

export default SectionSolution
