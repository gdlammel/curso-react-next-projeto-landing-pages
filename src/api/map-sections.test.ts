import {
	mapImageGrid,
	mapSectionContent,
	mapSections,
	mapSectionTwoColumns,
	mapTextGrid,
	SectionContent,
	SectionGrid,
	SectionTwoColumns,
} from "./map-sections";

import pagesFakeData from "./data.json";

describe("map-sections", () => {
	it("should render predefined section if no data", () => {
		const data = mapSections();
		expect(data).toEqual([]);
	});

	it("should render sections with correct data", () => {
		const data = mapSections(
			pagesFakeData.data[0].attributes.sections as (
				| SectionTwoColumns
				| SectionContent
				| SectionGrid
			)[]
		);
		expect(data).toHaveLength(3);
	});

	it("should test section with invalid data", () => {
		const withNoTextOrImageGrid = mapSections([
			{
				__component: "section.section-grid",
			},
		]);

		const WithNoComponent = mapSections([{} as SectionGrid]);
		expect(withNoTextOrImageGrid).toEqual([
			{ __component: "section.section-grid" },
		]);
		expect(WithNoComponent).toEqual([{}]);
	});

	it("should test section.section-grid with no text_grid or image_grid", () => {
		const data = [
			{
				__component: "section.section-grid",
				image_grid: [],
			},
			{
				__component: "section.section-grid",
				text_grid: [],
			},
		];
		const withNoTextOrImageGrid = mapSections(data);
		expect(withNoTextOrImageGrid.length).toBe(2);
	});

	it("should test section.section-grid with only text_grid", () => {
		const data = mapSections([
			{
				__component: "section.section-grid",
				text_grid: [
					{
						title: "Test",
						description: "This is a test",
					},
				],
			},
		]);
		const section = data[0] as { component: string };
		expect(section.component).toBe("section.section-grid-text");
	});

	it("should test section.section-grid with only image_grid", () => {
		const data = mapSections([
			{
				__component: "section.section-grid",
				image_grid: [
					{
						image: {
							url: "localhost",
							alternativeText: "test",
						},
					},
				],
			},
		]);
		const section = data[0] as { component: string };
		expect(section.component).toBe("section.section-grid-image");
	});

	it("should map section two columns if data is empty", () => {
		const data = mapSectionTwoColumns();
		expect(data.background).toBe(false);
		expect(data.component).toBe("");
		expect(data.sectionId).toBe("");
		expect(data.srcImg).toBe("");
		expect(data.text).toBe("");
		expect(data.title).toBe("");
	});

	it("should map section two columns with data", () => {
		const data = mapSectionTwoColumns({
			__component: "section.section-two-columns",
			title: "title",
			description: "abc",
			metadata: {
				background: true,
				section_id: "contact",
			},
			image: {
				data: {
					attributes: {
						url: "a.svg",
					},
				},
			},
		});
		expect(data.background).toBe(true);
		expect(data.component).toBe("section.section-two-columns");
		expect(data.sectionId).toBe("contact");
		expect(data.srcImg).toBe("a.svg");
		expect(data.text).toBe("abc");
		expect(data.title).toBe("title");
	});

	it("should map section content with no data", () => {
		const data = mapSectionContent();
		expect(data.background).toBe(false);
		expect(data.component).toBe("");
		expect(data.sectionId).toBe("");
		expect(data.title).toBe("");
		expect(data.html).toBe("");
	});

	it("should map section content", () => {
		const data = mapSectionContent({
			__component: "section.section-content",
			title: "Pricing",
			content: "abc",
			metadata: {
				background: false,
				section_id: "pricing",
			},
		});
		expect(data.background).toBe(false);
		expect(data.component).toBe("section.section-content");
		expect(data.sectionId).toBe("pricing");
		expect(data.title).toBe("Pricing");
		expect(data.html).toBe("abc");
	});

	it("should map grid text with data", () => {
		const data = mapTextGrid({
			__component: "section.section-grid",
			description: "abc",
			title: "My Grid",
			text_grid: [
				{
					title: "Teste 1",
					description: "Coisa",
				},
				{
					title: "Teste 2",
					description: "abc",
				},
			],
			image_grid: [],
			metadata: {
				background: true,
				section_id: "grid-one",
			},
		});
		expect(data.background).toBe(true);
		expect(data.component).toBe("section.section-grid-text");
		expect(data.sectionId).toBe("grid-one");
		expect(data.title).toBe("My Grid");
		expect(data.description).toBe("abc");
		expect(data.grid[0].title).toBe("Teste 1");
		expect(data.grid[0].description).toBe("Coisa");
	});

	it("should map grid text without data", () => {
		const data = mapTextGrid(undefined);
		expect(data.background).toBe(false);
		expect(data.component).toBe("section.section-grid-text");
		expect(data.sectionId).toBe("");
		expect(data.title).toBe("");
		expect(data.description).toBe("");
	});

	it("should map grid image without data", () => {
		const data = mapImageGrid(undefined);
		expect(data.background).toBe(false);
		expect(data.component).toBe("section.section-grid-image");
		expect(data.sectionId).toBe("");
		expect(data.title).toBe("");
		expect(data.description).toBe("");
	});

	it("should map grid image with data", () => {
		const data = mapImageGrid({
			__component: "section.section-grid",
			description: "abc",
			title: "Gallery",
			text_grid: [],
			image_grid: [
				{
					image: {
						alternativeText: "abc",
						url: "a.svg",
					},
				},
			],
			metadata: {
				background: false,
				name: "gallery",
				section_id: "gallery",
			},
		});
		expect(data.background).toBe(false);
		expect(data.component).toBe("section.section-grid-image");
		expect(data.sectionId).toBe("gallery");
		expect(data.title).toBe("Gallery");
		expect(data.description).toBe("abc");
		expect(data.grid[0].srcImg).toBe("a.svg");
		expect(data.grid[0].altText).toBe("abc");
	});
});
