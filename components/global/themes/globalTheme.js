import { createGlobalStyle } from "styled-components";

const ThemeGlobals = createGlobalStyle`
	:root {
		--dark-blue: #293462;
		--light-blue: #2873a9;
		--coral: #ff5757;
	}
`;

const Theme = {
  bp: {
    mobile: "374px",
    mobileNoPx: "374",
    desktop: "769px",
    desktopNoPx: "769",
    smallMobileHeight: "500px",
    smallMobileHeightNoPx: "500",
  },
};

export { ThemeGlobals, Theme };
