type Logo = {
	data: {
		attributes: {
			url: string;
		};
	};
};

type MenuLinksData = {
	open_in_new_tab: boolean;
	link_text: string;
	url: string;
};

export type MenuData = {
	logo_text: string;
	logo_link: string;
	logo?: Logo;
	menu_links?: MenuLinksData[];
};

const menuLinksDefaultValues = {
	open_in_new_tab: false,
	link_text: "",
	url: "",
};

const menuDefaultValues = {
	open_in_new_tab: false,
	logo_text: "",
	logo_link: "",
	menu_links: [menuLinksDefaultValues],
};

export function mapMenu(menu: MenuData = menuDefaultValues) {
	const { logo_text, logo_link } = menu;

	const links = menu.menu_links || [];
	const srcImg = menu?.logo?.data?.attributes?.url || "";

	return {
		text: logo_text,
		link: logo_link,
		srcImg,
		links: mapMenuLinks(links),
	};
}

export function mapMenuLinks(links: MenuLinksData[] = []) {
	return links.map((item) => {
		const { open_in_new_tab, link_text, url } = item;

		return {
			newTab: open_in_new_tab,
			children: link_text,
			link: url,
		};
	});
}
