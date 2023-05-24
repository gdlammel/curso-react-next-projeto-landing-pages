import { Heading } from "../../components/Heading";
import { MenuLink } from "../../components/MenuLink";
import { NavLinks } from "../../components/NavLinks";
import { mock } from "../../components/NavLinks/mock";
import { Text } from "../../components/Text";
import * as Styled from "./styles";

export function Home() {
	return (
		<Styled.Container>
			<Heading size={"huge"} uppercase={false}>
				Heading
			</Heading>
			<Text>Home</Text>
			<MenuLink link="https://github.com" newTab>
				Link
			</MenuLink>
			<NavLinks links={mock} />
		</Styled.Container>
	);
}
