import { createGlobalStyle } from "styled-components";

const ThemeGlobals = createGlobalStyle`
:root {
	--dark-blue: #293462;

}
`;

const Theme = {
  bp: {
    desktop: "769px",
    desktopNoPx: "769",
  },
};

export { ThemeGlobals, Theme };
