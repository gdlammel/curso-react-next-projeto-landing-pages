import { ReactNode } from "react";

import * as Styled from "./styles";

type AsOptions = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type SizeOptions = "small" | "medium" | "big" | "huge";

type Props = {
	children: ReactNode;
	colordark?: boolean;
	as?: AsOptions;
	size?: SizeOptions;
	uppercase?: boolean;
};
export function Heading({
	children,
	colordark = true,
	as = "h1",
	size = "huge",
	uppercase = false,
}: Props) {
	return (
		<Styled.Title
			$colordark={colordark}
			as={as}
			size={size}
			$uppercase={uppercase}
		>
			{children}
		</Styled.Title>
	);
}
