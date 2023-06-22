import {
  dom as fontAwesomeDom,
  library,
} from "@fortawesome/fontawesome-svg-core";
import {
  faAngular,
  faAws,
  faCss3,
  faFontAwesome,
  faHtml5,
  faJs,
  faMailchimp,
  faNode,
  faPaypal,
  faPhp,
  faReact,
  faSass,
  faStripe,
  faSymfony,
} from "@fortawesome/free-brands-svg-icons";
import type { AppProps } from "next/app";
import Head from "next/head";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import fontBasier from "../src/components/themes/globalFontBasier";
import { Theme, ThemeGlobals } from "../src/components/themes/globalTheme";
import SpringboardLayout from "src/components/layout/SpringboardLayout";

library.add(
  faReact,
  faSymfony,
  faStripe,
  faMailchimp,
  faPhp,
  faAws,
  faFontAwesome,
  faHtml5,
  faSass,
  faAngular,
  faJs,
  faPaypal,
  faCss3,
  faNode
);

const assetDomain = process.env.NEXT_PUBLIC_ASSET_SERVER ?? "";

const FontBasierGlobalStyle = fontBasier(assetDomain);

const GlobalStyles = createGlobalStyle`
  body {
		padding: 0;
		margin: 0;
		text-rendering: optimizeLegibility;
		background: #fff;
	}

	* {
		box-sizing: border-box;
	}
`;

const App = ({ Component, pageProps }: AppProps) => {
  const aboutUrl = "https://danbeddows.com/";
  const aboutDescription =
    "Hi, I'm Dan Beddows, a full stack web developer. I'm available to hire for contract work.";

  return (
    <>
      <Head>
        <title>Dan Beddows – Web Developer</title>

        <meta name="description" content={aboutDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />

        <link rel="icon" href="/favicon.png" />

        <style type="text/css">{fontAwesomeDom.css()}</style>

        <meta property="og:url" content={aboutUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Dan Beddows" />
        <meta property="og:description" content={aboutDescription} />
        <meta property="og:title" content="Dan Beddows" />
        <meta property="og:image" content="" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dan Beddows" />
        <meta property="twitter:domain" content="danbeddows.com" />
        <meta property="twitter:url" content={aboutUrl} />
        <meta name="twitter:description" content={aboutDescription} />
        <meta name="twitter:image" content="" />
      </Head>
      <GlobalStyles />
      <ThemeGlobals />
      <FontBasierGlobalStyle />
      <ThemeProvider theme={Theme}>
        <SpringboardLayout>
          <Component {...pageProps} />
        </SpringboardLayout>
      </ThemeProvider>
    </>
  );
};

export default App;
