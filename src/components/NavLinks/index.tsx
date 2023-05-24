import { MenuLink, MenuLinkProps } from "../MenuLink";
import * as Styled from "./styles";

type Props = {
	links?: MenuLinkProps[];
};

export function NavLinks({ links = [] }: Props) {
	return (
		<Styled.Container>
			{links.map((link) => (
				<MenuLink key={link.link} {...link}>
					{link.children}
				</MenuLink>
			))}
		</Styled.Container>
	);
}
