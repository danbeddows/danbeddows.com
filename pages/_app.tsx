import {
  dom as fontAwesomeDom,
  library,
} from "@fortawesome/fontawesome-svg-core";
import {
  faAngular,
  faAws,
  faFontAwesome,
  faHtml5,
  faMailchimp,
  faPhp,
  faReact,
  faSass,
  faStripe,
  faSymfony,
} from "@fortawesome/free-brands-svg-icons";
import type { AppProps } from "next/app";
import Head from "next/head";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import Springboard from "../components/global/components/Springboard/Springboard";
import fontBasier from "../components/global/themes/globalFontBasier";
import { Theme, ThemeGlobals } from "../components/global/themes/globalTheme";

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
  faAngular
);

const assetDomain =
  process.env.NEXT_PUBLIC_ASSET_SERVER !== undefined
    ? process.env.NEXT_PUBLIC_ASSET_SERVER
    : "";

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

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
  }
`;

const SpringboardContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 990;

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    position: static;
    min-width: 300px;
    pointer-events: auto;
    flex: 0 0 22vw;
    z-index: 1;
    background: var(--dark-blue);
    height: auto;
  }
`;

const ContentContainer = styled.div`
  //padding-top: 12px;

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    flex: 1;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  const aboutUrl = "https://danbeddows.com/";
  const aboutDescription =
    "Hi, I'm Dan Beddows, a full stack web developer. I'm available to hire for contract work.";

  return (
    <>
      <Head>
        <title>Dan Beddows</title>

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
        <PageContainer>
          <SpringboardContainer>
            <Springboard />
          </SpringboardContainer>
          <ContentContainer>
            <Component {...pageProps} />
          </ContentContainer>
        </PageContainer>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
