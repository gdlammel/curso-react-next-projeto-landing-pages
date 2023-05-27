import { styled } from "styled-components";
import { Container as Text } from "../../components/Text/styles";
import { Container as SectionContainer } from "../../components/SectionContainer/styles";

export const Container = styled.footer`
	text-align: center;
	border-top: 0.1rem solid ${({ theme }) => theme.colors.mediumGray};

	a {
		color: inherit;
		text-decoration: none;
	}

	& ${Text} {
		font-size: ${({ theme }) => theme.font.sizes.small};
	}

	& ${SectionContainer} {
		padding-top: 0;
		padding-bottom: 0;
	}
`;
