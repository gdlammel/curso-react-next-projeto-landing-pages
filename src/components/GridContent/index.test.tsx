import { describe, it, expect } from "vitest";

import { renderTheme } from "../../utils/renderTheme";
import { GridContent } from ".";
import { gridContentMock } from "./mock";

describe("<GridContent/>", () => {
	it("should render the component on screen", () => {
		const { container } = renderTheme(<GridContent {...gridContentMock} />);
		expect(container.firstChild).toBeInTheDocument();
	});

	it("should match snapshot", () => {
		const { container } = renderTheme(<GridContent {...gridContentMock} />);
		expect(container.firstChild).toMatchSnapshot();
	});
});
