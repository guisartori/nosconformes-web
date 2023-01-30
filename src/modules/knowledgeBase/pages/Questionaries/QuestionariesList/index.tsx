import React from 'react'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import { Button } from '../../../../../components/Button'
import { Input } from '../../../../../components/Input'
import { Container } from './styles'
import { Client, QuestionaryCard } from '../../../components/QuestionaryCard'

const clients: Client[] = [
	{
		_eq: 'testid-1',
		name: 'Casas Bahia',
		photo:
			'https://s.yimg.com/ny/api/res/1.2/a19vkjSUoD4hVV0djOpSLw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02Nzc-/https://s.yimg.com/os/creatr-uploaded-images/2020-07/20e95610-d02d-11ea-9f0c-81042fd4c51a',
	},
	{
		_eq: 'testid-2',
		name: 'Americanas',
		photo:
			'https://www.anacouto.com.br/wp-content/uploads/2021/07/GALERIA-SITE-AMERICANAS.png',
	},
	{
		_eq: 'testid-3',
		name: 'Magalu',
		photo:
			'https://centralvagas.com/wp-content/uploads/2022/09/logo-magazine-luiza10-1024x576.jpg',
	},
]

type QuestionariesListProps = {
	openAddNewQuestionary: () => void
}

export const QuestionariesList: React.FC<QuestionariesListProps> = ({
	openAddNewQuestionary,
}) => {
	return (
		<Container>
			<div className="questionaries-header-components">
				<Input
					name="searchCompany"
					placeholder="Pesquise pelo nome do questionário"
					endAdornmentIcon={<SearchRoundedIcon />}
					className="search-input"
				/>
				<Button
					buttonStyle="primary"
					text="Criar novo questionário +"
					className="new-questionary-button"
					onClick={openAddNewQuestionary}
				/>
			</div>
			<div className="all-questionaries">
				<QuestionaryCard
					title="Análise de política da empresa"
					clients={clients}
				/>
				<QuestionaryCard
					title="Análise de política da empresa"
					clients={clients}
				/>
				<QuestionaryCard
					title="Análise de política da empresa"
					clients={clients}
				/>
				<QuestionaryCard
					title="Análise de política da empresa"
					clients={clients}
				/>
			</div>
		</Container>
	)
}
