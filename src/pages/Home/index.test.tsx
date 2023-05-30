import { describe, expect, it } from "vitest";

import { renderTheme } from "../../utils/renderTheme";
import { Home } from ".";

describe("<Home />", () => {
	it("should render the component on screen", () => {
		const { container } = renderTheme(<Home />);
		expect(container.firstChild).toBeInTheDocument();
	});
});
