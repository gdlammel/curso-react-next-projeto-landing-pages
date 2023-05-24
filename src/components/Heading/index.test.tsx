import "jest-styled-components";
import { describe, it, expect } from "vitest";

import { renderTheme } from "../../utils/renderTheme";
import { Heading } from ".";
import { theme } from "../../styles/theme";

describe("<Heading />", () => {
	it("should render with default values", () => {
		const { getByRole } = renderTheme(<Heading>Text</Heading>);
		const heading = getByRole("heading", { name: "Text" });
		expect(heading).toHaveStyleRule("color", theme.colors.primaryColor);
		expect(heading).toHaveStyleRule("font-size", theme.font.sizes.xhuge);
		expect(heading).toHaveStyleRule("text-transform", "none");
	});

	it("should render with white color", () => {
		const { getByRole } = renderTheme(
			<Heading colordark={false}>Text</Heading>
		);
		const heading = getByRole("heading", { name: "Text" });
		expect(heading).toHaveStyleRule("color", "#fff");
	});

	it("should render correct small size", () => {
		const { getByRole } = renderTheme(<Heading size="small">Text</Heading>);
		const heading = getByRole("heading", { name: "Text" });
		expect(heading).toHaveStyleRule("font-size", theme.font.sizes.medium);
	});

	it("should render correct medium size", () => {
		const { getByRole } = renderTheme(
			<Heading size="medium">Text</Heading>
		);
		const heading = getByRole("heading", { name: "Text" });
		expect(heading).toHaveStyleRule("font-size", theme.font.sizes.large);
	});

	it("should render correct big size", () => {
		const { getByRole } = renderTheme(<Heading size="big">Text</Heading>);
		const heading = getByRole("heading", { name: "Text" });
		expect(heading).toHaveStyleRule("font-size", theme.font.sizes.xlarge);
	});

	it("should render with uppercase letters", () => {
		const { getByRole } = renderTheme(<Heading uppercase>Text</Heading>);
		const heading = getByRole("heading", { name: "Text" });
		expect(heading).toHaveStyleRule("text-transform", "uppercase");
	});

	it("should render correct heading element", () => {
		const { container } = renderTheme(<Heading as="h6">Text</Heading>);
		const heading = container.querySelector("h6");
		expect(heading?.tagName.toLowerCase()).toBe("h6");
	});

	it("should match snapshot", () => {
		const { container } = renderTheme(<Heading>Text</Heading>);
		expect(container.firstChild).toMatchSnapshot();
	});
});
