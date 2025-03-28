import { createGlobalStyle } from "styled-components";

export const ThemeGlobalStyles = createGlobalStyle`
  body {
		padding: 0;
		margin: 0;
		text-rendering: optimizeLegibility;
		background: #fff;
	}

	* {
		box-sizing: border-box;
	}

	:root {
		--dark-blue: #293462;
		--light-blue: #2873a9;
		--coral: #ff5757;
		--bpDesktop: 769px;
	}
`;

export const theme = {
  bp: {
    mobile: "374px",
    mobileNoPx: "374",
    desktop: "769px",
    desktopNoPx: "769",
    smallMobileHeight: "500px",
    smallMobileHeightNoPx: "500"
  }
};
