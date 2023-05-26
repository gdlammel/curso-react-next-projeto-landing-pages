import { Heading } from "../Heading";
import { SectionBackground } from "../SectionBackground";
import { Text } from "../Text";
import * as Styled from "./styles";

type Props = {
	background?: boolean;
	title: string;
	description: string;
	grid: {
		title: string;
		description: string;
	}[];
};

export function GridText({
	title,
	description,
	grid,
	background = false,
}: Props) {
	return (
		<SectionBackground background={background}>
			<Styled.Container>
				<Heading size="huge" uppercase colordark={!background}>
					{title}
				</Heading>
				<Text>{description}</Text>
				<Styled.Grid>
					{grid.map((element) => (
						<Styled.GridElement key={element.title}>
							<Heading size="medium" colordark={!background}>
								{element.title}
							</Heading>
							<Text>{element.description}</Text>
						</Styled.GridElement>
					))}
				</Styled.Grid>
			</Styled.Container>
		</SectionBackground>
	);
}
