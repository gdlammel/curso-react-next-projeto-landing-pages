import { describe, it, expect } from "vitest";

import { navLinksMock } from "../NavLinks/mock";
import { renderTheme } from "../../utils/renderTheme";
import { Menu } from ".";

const logoData = {
	text: "Logo",
	link: "#target",
};

describe("<Menu />", () => {
	it("should render component on screen", () => {
		const { getByRole } = renderTheme(
			<Menu links={navLinksMock} logoData={logoData} />
		);
		const heading = getByRole("heading", { name: "Logo" });
		const nav = getByRole("navigation", { name: "Main menu" });

		expect(heading).toBeInTheDocument();
		expect(nav).toBeInTheDocument();
	});

	it("should not render button ", () => {
		const { getByLabelText } = renderTheme(
			<Menu links={navLinksMock} logoData={logoData} />
		);
		const button = getByLabelText("Open/Close menu");

		expect(button).toHaveStyleRule("display", "none");
	});

	it("should not render links", () => {
		const { getByRole, container } = renderTheme(
			<Menu logoData={logoData} />
		);
		const nav = getByRole("navigation", { name: "Main menu" });
		expect(nav.firstChild).not.toBeInTheDocument();
		expect(container.firstChild).toMatchSnapshot();
	});

	it("should match snapshot", () => {
		const { container } = renderTheme(
			<Menu links={navLinksMock} logoData={logoData} />
		);

		expect(container.firstChild).toMatchSnapshot();
	});
});
