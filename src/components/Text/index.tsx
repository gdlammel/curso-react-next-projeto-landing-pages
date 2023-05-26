import * as Styled from "./styles";

type Props = {
	children: string;
};

export function Text({ children }: Props) {
	return <Styled.Container dangerouslySetInnerHTML={{ __html: children }} />;
}
