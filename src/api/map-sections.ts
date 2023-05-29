type Sections = {
	__component: string;
	title?: string;
	metadata?: {
		section_id: string;
		background: boolean;
		name?: string;
	};
};

export type SectionTwoColumns = {
	description: string;
	image?: {
		data: {
			attributes: {
				url: string;
			};
		};
	};
} & Sections;

export type SectionContent = {
	content: string;
} & Sections;

type TextGrid = {
	title: string;
	description: string;
};

type ImageGrid = {
	image: {
		url: string;
		alternativeText: string;
	};
};

export type SectionGrid = {
	description?: string;
	text_grid?: TextGrid[];
	image_grid?: ImageGrid[];
} & Sections;

export function mapSections(
	sections: (SectionTwoColumns | SectionContent | SectionGrid)[] = []
) {
	return sections.map((section) => {
		if (section.__component === "section.section-two-columns") {
			return mapSectionTwoColumns(section as SectionTwoColumns);
		}
		if (section.__component === "section.section-content") {
			return mapSectionContent(section as SectionContent);
		}
		if (section.__component === "section.section-grid") {
			const { text_grid = [], image_grid = [] } = section as SectionGrid;

			if (text_grid.length > 0) {
				return mapTextGrid(section as SectionGrid);
			}

			if (image_grid.length > 0) {
				return mapImageGrid(section as SectionGrid);
			}
		}

		return section;
	});
}

export function mapSectionTwoColumns(
	section: SectionTwoColumns = {
		__component: "",
		description: "",
		title: "",
	}
) {
	const {
		__component = "",
		title = "",
		description = "",
		metadata: { background = false, section_id = "" } = {},
	} = section;

	const srcImg = section?.image?.data?.attributes?.url || "";

	return {
		component: __component,
		title,
		text: description,
		srcImg,
		background: background,
		sectionId: section_id,
	};
}

export function mapSectionContent(
	section: SectionContent = { __component: "", content: "" }
) {
	const {
		__component = "",
		title = "",
		content = "",
		metadata: { background = false, section_id = "" } = {},
	} = section;

	return {
		component: __component,
		title,
		background: background,
		sectionId: section_id,
		html: content,
	};
}

export function mapTextGrid(section: SectionGrid = { __component: "" }) {
	const {
		title = "",
		description = "",
		metadata: { background = false, section_id = "" } = {},
		text_grid = [],
	} = section;

	return {
		component: "section.section-grid-text",
		title,
		background: background,
		sectionId: section_id,
		description,
		grid: text_grid.map((text) => {
			const { title = "", description = "" } = text;
			return {
				title,
				description,
			};
		}),
	};
}

export function mapImageGrid(section: SectionGrid = { __component: "" }) {
	const {
		title = "",
		description = "",
		metadata: { background = false, section_id = "" } = {},
		image_grid = [],
	} = section;

	return {
		component: "section.section-grid-image",
		title,
		background: background,
		sectionId: section_id,
		description,
		grid: image_grid.map((img) => {
			const { image } = img;
			return {
				srcImg: image.url,
				altText: image.alternativeText,
			};
		}),
	};
}
