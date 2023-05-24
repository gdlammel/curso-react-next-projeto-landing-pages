import { describe, it } from "vitest";
import { renderTheme } from "../../utils/renderTheme";
import { LogoLink } from ".";

describe("<LogoLink/>", () => {
	it("should render the component", () => {
		const { getByRole } = renderTheme(
			<LogoLink link="#target" text="Text" />
		);
		const heading = getByRole("heading");
		expect(heading).toBeInTheDocument();
	});

	it("should has href attribute", () => {
		const { getByRole } = renderTheme(
			<LogoLink link="#target" text="Text" />
		);
		const heading = getByRole("heading");
		expect(heading.firstChild).toHaveAttribute("href", "#target");
	});

	it("should render image", () => {
		const { getByRole } = renderTheme(
			<LogoLink link="#target" text="Text" srcImg="image.jpg" />
		);
		const image = getByRole("img");
		expect(image).toHaveAttribute("src", "image.jpg");
	});

	it("should match snapshot", () => {
		const { container } = renderTheme(
			<LogoLink link="#target" text="Text" />
		);
		expect(container.firstChild).toMatchSnapshot();
	});
});
