import { ReactNode } from "react";

import * as Styled from "./styles";

export type MenuLinkProps = {
	children: ReactNode;
	link: string;
	newTab?: boolean;
};

export function MenuLink({ children, link, newTab = false }: MenuLinkProps) {
	const target = newTab ? "_blank" : "_self";

	return (
		<Styled.Container href={link} target={target}>
			{children}
		</Styled.Container>
	);
}
