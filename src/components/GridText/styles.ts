import { css, styled } from "styled-components";
import { Title as Heading } from "../Heading/styles";
import { Container as Text } from "../Text/styles";

export const Container = styled.div`
	${Text} {
		margin-bottom: ${({ theme }) => theme.spacings.xhuge};
	}
`;

export const Grid = styled.div`
	counter-reset: grid-counter;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
	gap: ${({ theme }) => theme.spacings.large};
	overflow: hidden;
	width: 100%;

	${({ theme }) => css`
		@media ${theme.media.lteMedium} {
			grid-template-columns: 1fr;
		}
	`}
`;

export const GridElement = styled.div`
	${Heading} {
		position: relative;
		left: 5rem;
	}

	${Heading}::before {
		counter-increment: grid-counter;
		content: counter(grid-counter);
		position: absolute;
		font-size: 7rem;
		top: -3rem;
		left: -5rem;
		transform: rotate(5deg);
	}
`;
