import { describe, expect, it } from "vitest";

import { renderTheme } from "../../utils/renderTheme";
import { Home } from ".";

describe("<Home />", () => {
	it("should be able to see the initial text on screen", () => {
		const { getByText } = renderTheme(<Home />);
		expect(getByText("Home")).toBeInTheDocument();
	});
});
