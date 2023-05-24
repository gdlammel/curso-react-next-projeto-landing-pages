import { describe, it } from "vitest";

import { renderTheme } from "../../utils/renderTheme";
import { MenuLink } from ".";

describe("<MenuLink/>", () => {
	it("should render a link", () => {
		const { getByRole } = renderTheme(
			<MenuLink link="localhost">Text</MenuLink>
		);
		const link = getByRole("link", { name: "Text" });

		expect(link).toBeInTheDocument();
	});

	it("should render a link with default target", () => {
		const { getByRole } = renderTheme(
			<MenuLink link="localhost">Text</MenuLink>
		);
		const link = getByRole("link", { name: "Text" });

		expect(link).toHaveAttribute("target", "_self");
	});

	it("should render a link with _blank target", () => {
		const { getByRole } = renderTheme(
			<MenuLink link="localhost" newTab>
				Text
			</MenuLink>
		);
		const link = getByRole("link", { name: "Text" });

		expect(link).toHaveAttribute("target", "_blank");
	});

	it("should match snapshot", () => {
		const { getByRole } = renderTheme(
			<MenuLink link="localhost">Text</MenuLink>
		);
		const link = getByRole("link", { name: "Text" });
		expect(link).toMatchSnapshot();
	});
});
