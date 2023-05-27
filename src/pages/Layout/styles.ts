import { styled, css } from "styled-components";

export const Container = styled.div`
	padding-top: 5.4rem;

	${({ theme }) => css`
		@media ${theme.media.lteMedium} {
			padding-top: 0;
		}
	`}
`;
