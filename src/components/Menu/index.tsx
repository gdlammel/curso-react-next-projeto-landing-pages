import { useState } from "react";
import { Menu as MenuIcon } from "@styled-icons/material-outlined/Menu";
import { Close as CloseIcon } from "@styled-icons/material-outlined/Close";

import { SectionContainer } from "../SectionContainer";
import * as Styled from "./styles";
import { LogoLink, LogoLinkProps } from "../LogoLink";
import { NavLinks } from "../NavLinks";
import { MenuLinkProps } from "../MenuLink";

type Props = {
	links?: MenuLinkProps[];
	logoData: LogoLinkProps;
};

export function Menu({ links = [], logoData }: Props) {
	const [visible, setVisible] = useState(false);

	return (
		<>
			<Styled.Button
				$visible={visible}
				onClick={() => setVisible(true)}
				aria-label="Open/Close menu"
			>
				{visible ? (
					<CloseIcon aria-label="Close menu" />
				) : (
					<MenuIcon aria-label="Open menu" />
				)}
			</Styled.Button>
			<Styled.Container
				$visible={visible}
				onClick={() => setVisible(false)}
			>
				<SectionContainer>
					<Styled.MenuContainer>
						<LogoLink {...logoData} />
						<NavLinks links={links} />
					</Styled.MenuContainer>
				</SectionContainer>
			</Styled.Container>
		</>
	);
}
