import { ReactNode } from "react";

import * as Styled from "./styles";

type Props = {
	children: ReactNode;
	link: string;
	newTab?: boolean;
};

export function MenuLink({ children, link, newTab = false }: Props) {
	const target = newTab ? "_blank" : "_self";

	return (
		<Styled.Container href={link} target={target}>
			{children}
		</Styled.Container>
	);
}
