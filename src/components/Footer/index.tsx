import * as Styled from "./styles";
import { Text } from "../Text";
import { SectionContainer } from "../SectionContainer";

type Props = {
	html: string;
};

export function Footer({ html }: Props) {
	return (
		<Styled.Container>
			<SectionContainer>
				<Text>{html}</Text>
			</SectionContainer>
		</Styled.Container>
	);
}
