import styled from 'styled-components'

type ContainerProps = {
	cardContext?: boolean
}

export const Container = styled.div<ContainerProps>`
	overflow-y: scroll;
	width: 100vw;
	padding-left: 180px;
	padding-right: 180px;

	.content {
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 1440px;
		margin: 0 auto;
		margin-bottom: 48px;
		margin-top: 48px;
	}

	@media (max-width: 1280px) {
		padding-left: 140px;
		padding-right: 140px;
	}
`
