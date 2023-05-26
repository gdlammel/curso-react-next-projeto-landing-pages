import { describe, it, expect } from "vitest";
import { renderTheme } from "../../utils/renderTheme";
import { GridImage } from ".";
import { gridImageMock } from "./mock";

describe("<GridImage/>", () => {
	it("should render the component on screen", () => {
		const { container } = renderTheme(<GridImage {...gridImageMock} />);
		expect(container.firstChild).toBeInTheDocument();
	});

	it("should match snapshot", () => {
		const { container } = renderTheme(<GridImage {...gridImageMock} />);
		expect(container.firstChild).toMatchSnapshot();
	});
});
