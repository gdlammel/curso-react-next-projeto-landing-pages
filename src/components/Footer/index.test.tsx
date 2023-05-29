import { describe, it, expect } from "vitest";
import { renderTheme } from "../../utils/renderTheme";
import { Footer } from ".";

describe("<Footer/>", () => {
	it("should render the component on screen", () => {
		const { container } = renderTheme(
			<Footer
				footerHtml={`<p><a href="https://beacons.page/otaviomiranda">Feito com ❤ por Otávio Miranda</a></p>`}
			/>
		);
		expect(container.firstChild).toBeInTheDocument();
	});

	it("should match snapshot", () => {
		const { container } = renderTheme(
			<Footer
				footerHtml={`<p><a href="https://beacons.page/otaviomiranda">Feito com ❤ por Otávio Miranda</a></p>`}
			/>
		);
		expect(container.firstChild).toMatchSnapshot();
	});
});
