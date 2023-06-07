import { JSX } from 'solid-js'

import Header from '../components/Header/Header'
import Intro from '../components/Intro/Intro'
import SectionProblem from '../components/SectionProblem/SectionProblem'
import SectionSolution from '../components/SectionSolution/SectionSolution'
import SectionTakePart from '../components/SectionTakePart/SectionTakePart'
import Page from '../ui/Page/Page'

const HomePage = (): JSX.Element => {
	return (
		<Page>
			<Header/>
			<Intro/>
			<SectionProblem/>
			<SectionSolution/>
			<SectionTakePart/>
		</Page>
	)
}

export default HomePage
