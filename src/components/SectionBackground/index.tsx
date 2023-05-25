import { ReactNode } from "react";

import * as Styled from "./styles";
import { SectionContainer } from "../SectionContainer";

type Props = {
	children: ReactNode;
	background?: boolean;
};

export function SectionBackground({ children, background = false }: Props) {
	return (
		<Styled.Container $background={background}>
			<SectionContainer>{children}</SectionContainer>
		</Styled.Container>
	);
}
