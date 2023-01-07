import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;

	label {
		font-family: 'Inter';
		font-weight: 500;
		font-size: 24px;
		color: #6D7C99;
	}

	p {
		font-family: 'Inter';
		font-weight: 700;
		font-size: 30px;
		color: #0F141E;
		margin-left: 10px;
	}

	svg {
		margin-left: 10px;
		cursor: pointer;
	}

	.input-questionary-name {
		margin-left: 10px;
	}
`