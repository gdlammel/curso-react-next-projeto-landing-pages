import { describe, it, expect } from "vitest";
import { renderTheme } from "../../utils/renderTheme";
import { Layout } from ".";
import { layoutMock } from "./mock";
import { GridText } from "../../components/GridText";
import { gridTextMock } from "../../components/GridText/mock";

describe("<Layout/>", () => {
	it("should render the component on screen", () => {
		const { container } = renderTheme(
			<Layout {...layoutMock}>
				<GridText {...gridTextMock} background />
				<GridText {...gridTextMock} />
				<GridText {...gridTextMock} background />
				<GridText {...gridTextMock} />
				<GridText {...gridTextMock} background />
				<GridText {...gridTextMock} />
			</Layout>
		);
		expect(container.firstChild).toBeInTheDocument();
	});

	it("should match snapshot", () => {
		const { container } = renderTheme(
			<Layout {...layoutMock}>
				<GridText {...gridTextMock} background />
				<GridText {...gridTextMock} />
				<GridText {...gridTextMock} background />
				<GridText {...gridTextMock} />
				<GridText {...gridTextMock} background />
				<GridText {...gridTextMock} />
			</Layout>
		);
		expect(container.firstChild).toMatchSnapshot();
	});
});
