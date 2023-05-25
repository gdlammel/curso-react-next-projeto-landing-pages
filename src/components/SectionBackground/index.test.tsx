import { describe, it } from "vitest";

import { renderTheme } from "../../utils/renderTheme";
import { SectionBackground } from ".";

describe("<SectionBackground/>", () => {
	it("should render with dark background", () => {
		const { getByText } = renderTheme(
			<SectionBackground background>Text</SectionBackground>
		);
		const section = getByText(/Text/i).parentElement;
		expect(section).toHaveStyleRule("background", "#0A1128");
	});

	it("should render with white background", () => {
		const { getByText } = renderTheme(
			<SectionBackground>Text</SectionBackground>
		);
		const section = getByText(/Text/i).parentElement;
		expect(section).toHaveStyleRule("background", "#fff");
	});

	it("should match snapshot", () => {
		const { container } = renderTheme(
			<SectionBackground>Text</SectionBackground>
		);
		expect(container.firstChild).toMatchSnapshot();
	});
});
