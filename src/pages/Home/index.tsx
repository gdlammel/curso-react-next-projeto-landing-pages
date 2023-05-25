import { Menu } from "../../components/Menu";
import { navLinksMock } from "../../components/NavLinks/mock";
import * as Styled from "./styles";

const logoDataMock = {
	link: "#target",
	text: "Logo",
	srcImg: "",
};

export function Home() {
	return (
		<Styled.Container>
			<h1>Home</h1>
			<Menu logoData={logoDataMock} links={navLinksMock} />
		</Styled.Container>
	);
}
