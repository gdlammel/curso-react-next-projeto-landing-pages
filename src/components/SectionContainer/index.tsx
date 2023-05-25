import { ReactNode } from "react";

import * as Styled from "./styles";

type Props = {
	children: ReactNode;
};
export function SectionContainer({ children }: Props) {
	return <Styled.Container>{children}</Styled.Container>;
}
