import { Heading } from "../../components/Heading";
import * as Styled from "./styles";

export function Home() {
	return (
		<Styled.Container>
			<Heading size={"huge"} uppercase={false}>
				Heading
			</Heading>
			<p>Home</p>
		</Styled.Container>
	);
}
