import { ReactNode } from "react";

import * as Styled from "./styles";

type Props = {
	children: ReactNode;
};

export function Text({ children }: Props) {
	return <Styled.Container>{children}</Styled.Container>;
}
