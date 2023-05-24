import { Heading } from "../../components/Heading";
import { Text } from "../../components/Text";
import * as Styled from "./styles";

export function Home() {
	return (
		<Styled.Container>
			<Heading size={"huge"} uppercase={false}>
				Heading
			</Heading>
			<Text>Home</Text>
		</Styled.Container>
	);
}
