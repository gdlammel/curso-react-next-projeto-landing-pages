import { Heading } from "../Heading";
import { SectionBackground } from "../SectionBackground";
import { Text } from "../Text";
import * as Styled from "./styles";

type Props = {
	title: string;
	text: string;
	srcImg: string;
	background?: boolean;
};

export function GridTwoColumns({
	title,
	text,
	srcImg,
	background = false,
}: Props) {
	return (
		<SectionBackground background={background}>
			<Styled.Container>
				<Styled.TextContainer>
					<Heading uppercase colordark={!background} as="h2">
						{title}
					</Heading>
					<Text>{text}</Text>
				</Styled.TextContainer>
				<Styled.ImageContainer>
					<Styled.Image src={srcImg} alt={title} />
				</Styled.ImageContainer>
			</Styled.Container>
		</SectionBackground>
	);
}
