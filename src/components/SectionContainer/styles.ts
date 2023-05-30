import { styled } from "styled-components";

export const Container = styled.div`
	max-width: 120rem;
	margin: 0 auto;
	padding: ${({ theme }) => theme.spacings.large};
	width: 100%;
`;
