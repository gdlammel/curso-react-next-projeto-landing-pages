import { describe, it } from "vitest";

import { renderTheme } from "../../utils/renderTheme";
import { NavLinks } from ".";
import { navLinksMock } from "./mock";

describe("<NavLinks/>", () => {
	it("should render a nav", () => {
		const { getByRole, queryAllByText } = renderTheme(<NavLinks />);
		const nav = getByRole("navigation");
		const links = queryAllByText(/Link [0-9]+/i);
		expect(nav).toBeInTheDocument();
		expect(links).toHaveLength(0);
	});

	it("should has 10 MenuLink", () => {
		const { getAllByRole } = renderTheme(<NavLinks links={navLinksMock} />);
		const links = getAllByRole("link");
		expect(links).toHaveLength(navLinksMock.length);
	});

	it("should match snapshot", () => {
		const { container } = renderTheme(<NavLinks links={navLinksMock} />);
		expect(container.firstChild).toMatchSnapshot();
	});
});
