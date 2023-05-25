import { MenuLink, MenuLinkProps } from "../MenuLink";
import * as Styled from "./styles";

export type NavLinksProps = {
	links?: MenuLinkProps[];
};

export function NavLinks({ links = [] }: NavLinksProps) {
	return (
		<Styled.Container aria-label="Main menu">
			{links.map((link) => (
				<MenuLink key={link.link} {...link}>
					{link.children}
				</MenuLink>
			))}
		</Styled.Container>
	);
}
