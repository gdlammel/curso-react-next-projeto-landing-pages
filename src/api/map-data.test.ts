import { describe, it, expect } from "vitest";
import { mapData } from "./map-data";

describe("map-data", () => {
	it("should map even if there is no data", () => {
		const pagesData = mapData()[0];
		expect(pagesData.footerHtml).toBe("");
		expect(pagesData.slug).toBe("");
		expect(pagesData.title).toBe("");
	});

	it("should map data if there is data", () => {
		const pagesData = mapData([
			{
				footer_text: "<p>Hey</p>",
				slug: "slug",
				title: "title",
				sections: [],
				menu: {
					logo_link: "",
					logo_text: "",
				},
			},
		])[0];
		expect(pagesData.footerHtml).toBe("<p>Hey</p>");
		expect(pagesData.slug).toBe("slug");
		expect(pagesData.title).toBe("title");
	});
});
