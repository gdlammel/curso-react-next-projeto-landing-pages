import { MenuData, mapMenu } from "./map-menu";
import {
	SectionContent,
	SectionGrid,
	SectionTwoColumns,
	mapSections,
} from "./map-sections";

type PageData = {
	footer_text: string;
	slug: string;
	title: string;
	sections: (SectionTwoColumns | SectionContent | SectionGrid)[];
	menu: MenuData;
}[];

export function mapData(
	pagesData: PageData = [
		{
			footer_text: "",
			slug: "",
			title: "",
			sections: [],
			menu: { logo_link: "", logo_text: "" },
		},
	]
) {
	return pagesData.map((data) => {
		const { footer_text, slug, title, sections, menu } = data;
		return {
			footerHtml: footer_text,
			slug,
			title,
			sections: mapSections(sections),
			menu: mapMenu(menu),
		};
	});
}
