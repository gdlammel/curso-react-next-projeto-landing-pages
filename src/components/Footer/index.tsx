import * as Styled from "./styles";
import { Text } from "../Text";
import { SectionContainer } from "../SectionContainer";

type Props = {
	footerHtml: string;
};

export function Footer({ footerHtml }: Props) {
	return (
		<Styled.Container>
			<SectionContainer>
				<Text>{footerHtml}</Text>
			</SectionContainer>
		</Styled.Container>
	);
}
