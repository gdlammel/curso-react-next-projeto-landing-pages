import { Heading } from "../Heading";
import { SectionBackground } from "../SectionBackground";
import { Text } from "../Text";
import * as Styled from "./styles";
type Props = {
	background?: boolean;
	title: string;
	description: string;
	sectionId?: string;
	grid: {
		altText: string;
		srcImg: string;
	}[];
};
export function GridImage({
	background = false,
	title,
	description,
	sectionId = "",
	grid,
}: Props) {
	return (
		<SectionBackground background={background} sectionId={sectionId}>
			<Styled.Container>
				<Heading size="huge" uppercase colordark={!background} as="h2">
					{title}
				</Heading>
				<Text>{description}</Text>
				<Styled.Grid>
					{grid.map((element) => (
						<Styled.GridElement key={element.srcImg}>
							<Styled.Image
								src={element.srcImg}
								alt={element.altText}
							/>
						</Styled.GridElement>
					))}
				</Styled.Grid>
			</Styled.Container>
		</SectionBackground>
	);
}
