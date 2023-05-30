import { ReactNode } from "react";

import * as Styled from "./styles";
import { SectionContainer } from "../SectionContainer";

type Props = {
	children: ReactNode;
	background?: boolean;
	sectionId?: string;
};

export function SectionBackground({
	children,
	background = false,
	sectionId = "",
}: Props) {
	return (
		<Styled.Container $background={background} id={sectionId}>
			<SectionContainer>{children}</SectionContainer>
		</Styled.Container>
	);
}
