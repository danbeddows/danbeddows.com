import { dom as fontAwesomeDom } from "@fortawesome/fontawesome-svg-core";
import type { AppProps /*, AppContext */ } from "next/app";
import Head from "next/head";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import Springboard from "../components/global/components/Springboard/Springboard";
import fontBasier from "../components/global/themes/fontBasier";
import { Theme as GlobalTheme } from "../components/global/themes/globalTheme";

const assetDomain = process.env.NEXT_PUBLIC_ASSET_SERVER;
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
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: 769px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
  }
`;

const SpringboardContainer = styled.div`
  @media screen and (max-width: 768px) {
    position: fixed;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  @media screen and (min-width: 769px) {
    min-width: 300px;
    flex: 0 0 22vw;
    background: #293462;
  }
`;

const ContentContainer = styled.div`
  @media screen and (max-width: 768px) {
    //padding-top: 12px;
  }

  @media screen and (min-width: 769px) {
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

      <FontBasierGlobalStyle />
      <PageContainer>
        <SpringboardContainer>
          <Springboard />
        </SpringboardContainer>
        <ContentContainer>
          <ThemeProvider theme={GlobalTheme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </ContentContainer>
      </PageContainer>
    </>
  );
}

export default MyApp;
