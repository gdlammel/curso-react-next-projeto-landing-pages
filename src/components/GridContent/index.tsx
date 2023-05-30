import { Heading } from "../Heading";
import { SectionBackground } from "../SectionBackground";
import { Text } from "../Text";
import * as Styled from "./styles";

type Props = {
	title: string;
	html: string;
	background?: boolean;
	sectionId?: string;
};

export function GridContent({
	title,
	html,
	background = false,
	sectionId = "",
}: Props) {
	return (
		<SectionBackground background={background} sectionId={sectionId}>
			<Styled.Container>
				<Heading uppercase colordark={!background} as="h2">
					{title}
				</Heading>
				<Styled.Html>
					<Text>{html}</Text>
				</Styled.Html>
			</Styled.Container>
		</SectionBackground>
	);
}
