import { css, styled } from "styled-components";

import { Container as SectionContainer } from "../SectionContainer/styles";
import { Title as Heading } from "../Heading/styles";

type Props = {
	$visible: boolean;
};

function menuVisible() {
	return css`
		visibility: visible;
		opacity: 1;
	`;
}

export const Container = styled.div<Props>`
	position: fixed;
	z-index: 5;
	top: 0;
	left: 0;
	right: 0;
	border-bottom: ${({ theme }) => theme.colors.mediumGray};
	background: #fff;
	transition: all 300ms ease-in-out;

	> ${SectionContainer} {
		padding-top: 0;
		padding-bottom: 0;
	}

	& ${Heading} {
		margin-top: 0;
		margin-bottom: 0;
	}

	${({ theme, $visible }) => css`
		@media ${theme.media.lteMedium} {
			height: 100vh;
			visibility: hidden;
			opacity: 0;
			${$visible && menuVisible()}

			> ${SectionContainer} {
				display: grid;
				grid-template-columns: 1fr;
				grid-template-rows: 1fr;
				height: 100vh;
				align-items: center;
				overflow-y: auto;
			}

			& ${Heading} {
				padding-bottom: ${theme.spacings.large};
				display: flex;
				justify-content: center;
			}
		}
	`}
`;

export const MenuContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	${({ theme }) => css`
		@media ${theme.media.lteMedium} {
			display: block;
			text-align: center;
			padding: ${theme.spacings.xxlarge} 0;
		}
	`}
`;

export const Button = styled.button<Props>`
	z-index: 6;
	position: fixed;
	top: 2rem;
	right: 2rem;
	width: 4rem;
	height: 4rem;
	background: ${({ theme }) => theme.colors.primaryColor};
	color: #fff;
	border: none;
	display: none;
	> svg {
		width: 2.5rem;
		height: 2.5rem;
	}

	${({ theme, $visible }) => css`
		pointer-events: ${$visible ? "none" : "all"};
		@media ${theme.media.lteMedium} {
			display: flex;
			align-items: center;
			justify-content: center;
		}
	`}
`;
