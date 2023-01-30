import styled from 'styled-components'

export const Container = styled.button`
	background: #1f4cd5;
	width: 38px;
	height: 38px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;

	:hover {
		background: #072788;
	}

	:active {
		transition: none;
		background: #1f4cd5;
	}

	svg {
		width: 24px;
		height: 24px;
		color: #ffffff;
	}
`
