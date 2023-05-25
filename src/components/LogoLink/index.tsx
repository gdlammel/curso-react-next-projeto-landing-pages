import { Heading } from "../Heading";
import * as Styled from "./styles";

export type LogoLinkProps = {
	text: string;
	srcImg?: string;
	link: string;
};

export function LogoLink({ text, srcImg = "", link }: LogoLinkProps) {
	return (
		<Heading size="small" uppercase>
			<Styled.Container href={link}>
				{srcImg ? <img src={srcImg} alt={text} /> : text}
			</Styled.Container>
		</Heading>
	);
}
