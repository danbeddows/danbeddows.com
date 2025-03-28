import { createGlobalStyle } from "styled-components";

export const fontBasier = (assetDomain: string) => {
  return createGlobalStyle`
		* {
			font-family: "basier", Segoe UI, Roboto, Oxygen;
		}

		@font-face {
			font-family: "basier";
			src: url("${assetDomain}/font/basier/regular.woff2") format("woff2"),
				url("${assetDomain}/font/basier/regular.ttf") format("truetype");
			font-weight: 400;
			font-style: normal;
			font-display: fallback;
		}

		@font-face {
			font-family: "basier";
			src: url("${assetDomain}/font/basier/regularitalic.woff2") format("woff2"),
				url("${assetDomain}/font/basier/regularitalic.ttf") format("truetype");
			font-weight: 400;
			font-style: italic;
			font-display: fallback;
		}

		@font-face {
			font-family: "basier";
			src: url("${assetDomain}/font/basier/medium.woff2") format("woff2"),
				url("${assetDomain}/font/basier/medium.ttf") format("truetype");
			font-weight: 500;
			font-style: normal;
			font-display: fallback;
		}

		@font-face {
			font-family: "basier";
			src: url("${assetDomain}/font/basier/mediumitalic.woff2") format("woff2"),
				url("${assetDomain}/font/basier/mediumitalic.ttf") format("truetype");
			font-weight: 500;
			font-style: italic;
			font-display: fallback;
		}

		@font-face {
			font-family: "basier";
			src: url("${assetDomain}/font/basier/semibold.woff2") format("woff2"),
				url("${assetDomain}/font/basier/semibold.ttf") format("truetype");
			font-weight: 600;
			font-style: normal;
			font-display: fallback;
		}

		@font-face {
			font-family: "basier";
			src: url("${assetDomain}/font/basier/semibolditalic.woff2") format("woff2"),
				url("${assetDomain}/font/basier/semibolditalic.ttf") format("truetype");
			font-weight: 600;
			font-style: italic;
			font-display: fallback;
		}

		@font-face {
			font-family: "basier";
			src: url("${assetDomain}/font/basier/bold.woff2") format("woff2"),
				url("${assetDomain}/font/basier/bold.ttf") format("truetype");
			font-weight: 700;
			font-style: normal;
			font-display: fallback;
		}

		@font-face {
			font-family: "basier";
			src: url("${assetDomain}/font/basier/bolditalic.woff2") format("woff2"),
				url("${assetDomain}/font/basier/bolditalic.ttf") format("truetype");
			font-weight: 700;
			font-style: italic;
			font-display: fallback;
		}
	`;
};
