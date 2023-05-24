import { styled, css, DefaultTheme } from "styled-components";
import { SizeOptions } from ".";

type TitleProps = {
	$colordark: boolean;
	size: SizeOptions;
	$uppercase: boolean;
};

const titleSize = {
	small: (theme: DefaultTheme) => css`
		font-size: ${theme.font.sizes.medium};
	`,
	medium: (theme: DefaultTheme) => css`
		font-size: ${theme.font.sizes.large};
	`,
	big: (theme: DefaultTheme) => css`
		font-size: ${theme.font.sizes.xlarge};
	`,
	huge: (theme: DefaultTheme) => css`
		font-size: ${theme.font.sizes.xhuge};
		@media ${theme.media.lteMedium} {
			font-size: ${({ theme }) => theme.font.sizes.xlarge};
		}
	`,
};

export const Title = styled.h1<TitleProps>`
	${({ size, theme }) => css`
		${titleSize[size](theme)}
	`}
	color: ${({ theme, $colordark }) =>
		$colordark ? theme.colors.primaryColor : "#fff"};
	text-transform: ${({ $uppercase }) => ($uppercase ? "uppercase" : "none")};
`;
