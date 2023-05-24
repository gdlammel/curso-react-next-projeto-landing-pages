import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		colors: {
			primaryColor: string;
			secondaryColor: string;
		};
		font: {
			family: {
				default: string;
				secondary: string;
			};
			sizes: {
				xsmall: string;
				small: string;
				medium: string;
				large: string;
				xlarge: string;
				xxlarge: string;
				huge: string;
				xhuge: string;
			};
		};
		media: {
			lteMedium: string;
		};
	}
}
