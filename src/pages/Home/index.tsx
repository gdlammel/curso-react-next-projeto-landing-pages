import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Layout } from "../Layout";
import { GridText } from "../../components/GridText";
import { mapData } from "../../api/map-data";
import { PageNotFound } from "../PageNotFound";
import { Loading } from "../Loading";
import { GridTwoColumns } from "../../components/GridTwoColumns";
import { GridContent } from "../../components/GridContent";
import { GridImage } from "../../components/GridImage";

export function Home() {
	const [data, setData] = useState([]);
	const isMounted = useRef(true);

	const location = useLocation();

	useEffect(() => {
		const pathname = location.pathname.replace(/[^a-z0-9-_]/gi, "-");
		const slug = pathname || "landing-page";

		const load = async () => {
			try {
				const data = await fetch(
					`http://localhost:1337/api/pages/?filters[slug]=${slug}&populate=deep`
				);

				const json = await data.json();
				const { attributes } = json.data[0];
				const pageData = mapData([attributes]);
				setData(() => pageData[0]);
			} catch (error) {
				setData(undefined);
			}
		};

		if (isMounted.current === true) {
			load();
		}

		return () => {
			isMounted.current = false;
		};
	}, [location]);

	useEffect(() => {
		if (data === undefined) {
			document.title = `Página não encontrada`;
		}

		if (data && !data.slug) {
			document.title = `Carregando...`;
		}

		if (data && data.title) {
			document.title = `${data.title}`;
		}
	}, [data]);

	if (data === undefined) {
		return <PageNotFound />;
	}

	if (data && !data.slug) {
		return <Loading />;
	}

	const { menu, sections, footerHtml, slug } = data;
	const { links, text, link, srcImg } = menu;

	return (
		<Layout
			links={links}
			footerHtml={footerHtml}
			logoData={{ text, link, srcImg }}
		>
			{sections.map((section, index) => {
				const { component } = section;
				const key = `${slug}-${index}`;

				if (component === "section.section-two-columns") {
					return <GridTwoColumns key={key} {...section} />;
				}
				if (component === "section.section-content") {
					return <GridContent key={key} {...section} />;
				}
				if (component === "section.section-grid-text") {
					return <GridText key={key} {...section} />;
				}
				if (component === "section.section-grid-image") {
					return <GridImage key={key} {...section} />;
				}
			})}
		</Layout>
	);
}
