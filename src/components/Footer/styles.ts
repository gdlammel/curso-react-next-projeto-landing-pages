import { styled } from "styled-components";

export const Container = styled.footer`
	text-align: center;
	a {
		color: inherit;
		text-decoration: none;
		font-size: ${({ theme }) => theme.font.sizes.small};
	}
`;
