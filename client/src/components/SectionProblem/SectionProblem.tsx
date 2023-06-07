import { JSX } from 'solid-js'

import grafiozExample from '../../assets/grafioz-example.jpg'
import HomePageSection from '../../ui/HomePageSection/HomePageSection'

const SectionProblem = (): JSX.Element => {
	return (
		<HomePageSection>
			<div>
				<h2>Проблема</h2>
				<h1>Графиоз</h1>
				<p>
					Графиоз - одно из наиболее опасных сосудистых заболеваний деревьев.
					В его результате происходит закупорка сосудов ветвей и ствола, что
					приводит к усыханию кроны и гибели дерева. Эта болезнь крайне плохо
					поддаётся лечению, в подавляющем большинстве случаев дерево погибает.
					<br/><br/>
					Ежегодно в Санкт-Петербурге из-за графиоза погибает всё больше вязов.
					Распространение болезни и отсутствие эффективных мер борьбы с ней
					диктует необходимость вырубки больных деревьев.
				</p>
			</div>
			<img src={grafiozExample} alt='Заражённый вяз'/>
		</HomePageSection>
	)
}

export default SectionProblem
