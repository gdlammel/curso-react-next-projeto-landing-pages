import { describe, it, expect } from "vitest";
import { renderTheme } from "../../utils/renderTheme";
import { GridText } from ".";
import { gridTextMock } from "./mock";

describe("<GridText/>", () => {
	it("should render the component on screen", () => {
		const { container } = renderTheme(<GridText {...gridTextMock} />);
		expect(container.firstChild).toBeInTheDocument();
	});

	it("should match snapshot", () => {
		const { container } = renderTheme(<GridText {...gridTextMock} />);
		expect(container.firstChild).toMatchSnapshot();
	});
});
