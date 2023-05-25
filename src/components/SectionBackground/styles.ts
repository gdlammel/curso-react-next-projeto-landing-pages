import { DefaultTheme, styled, css } from "styled-components";

type ContainerProps = {
	$background: boolean;
};

function containerBackgroundActivate(theme: DefaultTheme) {
	return css`
		background: ${theme.colors.primaryColor};
		color: #fff;
	`;
}

export const Container = styled.div<ContainerProps>`
	${({ theme, $background }) => css`
		background: #fff;
		color: ${theme.colors.primaryColor};
		${$background && containerBackgroundActivate(theme)}
		min-height: 100vh;
		display: flex;
		align-items: center;
	`}
`;
