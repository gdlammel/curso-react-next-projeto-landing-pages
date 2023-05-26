import { describe, it, expect } from "vitest";
import { renderTheme } from "../../utils/renderTheme";
import { GridTwoColumns } from ".";
import { gridTwoColumnsMock } from "./mock";

describe("<GridTwoColumns />", () => {
	it("should render component on screen", () => {
		const { container } = renderTheme(
			<GridTwoColumns {...gridTwoColumnsMock} />
		);
		expect(container.firstChild).toBeInTheDocument();
	});

	it("should render component with black background", () => {
		const { container } = renderTheme(
			<GridTwoColumns {...gridTwoColumnsMock} background />
		);
		expect(container.firstChild).toHaveStyleRule("background", "#0A1128");
	});

	it("should match snapshot", () => {
		const { container } = renderTheme(
			<GridTwoColumns {...gridTwoColumnsMock} background />
		);
		expect(container.firstChild).toMatchSnapshot();
	});
});
