import { Heading } from "../Heading";
import { SectionBackground } from "../SectionBackground";
import { Text } from "../Text";
import * as Styled from "./styles";

type Props = {
	title: string;
	description: string;
	grid: {
		title: string;
		description: string;
	}[];
};

export function GridText({ title, description, grid }: Props) {
	return (
		<SectionBackground>
			<Styled.Container>
				<Heading size="huge" uppercase>
					{title}
				</Heading>
				<Text>{description}</Text>
				<Styled.Grid>
					{grid.map((element) => (
						<Styled.GridElement key={element.title}>
							<Heading size="medium">{element.title}</Heading>
							<Text>{element.description}</Text>
						</Styled.GridElement>
					))}
				</Styled.Grid>
			</Styled.Container>
		</SectionBackground>
	);
}
