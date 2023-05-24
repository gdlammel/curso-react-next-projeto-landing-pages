import { describe, it } from "vitest";

import { renderTheme } from "../../utils/renderTheme";
import { Text } from ".";

describe("<Text />", () => {
	it("should be able to return true if component is on screen", () => {
		const { getByText } = renderTheme(<Text>Text</Text>);
		const text = getByText("Text");
		expect(text).toBeInTheDocument();
	});

	it("should match snapshot", () => {
		const { getByText } = renderTheme(<Text>Text</Text>);
		const text = getByText("Text");
		expect(text).toMatchSnapshot();
	});
});
