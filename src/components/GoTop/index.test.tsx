import { describe, it, expect } from "vitest";
import { renderTheme } from "../../utils/renderTheme";
import { GoTop } from ".";

describe("<GoTop/>", () => {
	it("should render the component on screen", () => {
		const { getByRole } = renderTheme(<GoTop />);
		const link = getByRole("link", { name: "Go to top" });
		expect(link).toBeInTheDocument();
	});
	it("should has href attribute", () => {
		const { getByRole } = renderTheme(<GoTop />);
		const link = getByRole("link", { name: "Go to top" });
		expect(link).toHaveAttribute("href", "#");
	});

	it("should match snapshot", () => {
		const { container } = renderTheme(<GoTop />);
		expect(container.firstChild).toMatchSnapshot();
	});
});
