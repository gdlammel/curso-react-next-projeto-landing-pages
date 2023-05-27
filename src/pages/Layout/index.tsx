import { ReactNode } from "react";

import { Menu } from "../../components/Menu";
import { MenuLinkProps } from "../../components/MenuLink";
import { LogoLinkProps } from "../../components/LogoLink";

import * as Styled from "./styles";
import { Footer } from "../../components/Footer";
import { GoTop } from "../../components/GoTop";

type Props = {
	links?: MenuLinkProps[];
	logoData: LogoLinkProps;
	footerHtml: string;
	children: ReactNode;
};

export function Layout({ children, links = [], logoData, footerHtml }: Props) {
	return (
		<>
			<Menu links={links} logoData={logoData} />
			<Styled.Container>
				{children}
				<Footer html={footerHtml} />
			</Styled.Container>
			<GoTop />
		</>
	);
}
