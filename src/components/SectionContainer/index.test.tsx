import { describe, it, expect } from "vitest";

import { renderTheme } from "../../utils/renderTheme";
import { SectionContainer } from ".";

describe("<SectionContainer/>", () => {
	it("should render the component on screen", () => {
		const { container } = renderTheme(
			<SectionContainer>Text</SectionContainer>
		);
		expect(container.firstChild).toBeInTheDocument();
	});

	it("should match snapshot", () => {
		const { container } = renderTheme(
			<SectionContainer>Text</SectionContainer>
		);
		expect(container.firstChild).toMatchSnapshot();
	});
});
