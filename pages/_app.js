import { dom as fontAwesomeDom } from "@fortawesome/fontawesome-svg-core";
import Head from "next/head";
import { useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Springboard from "../components/global/Springboard";
import "../styles/globals.scss";

const GlobalStyles = createGlobalStyle`
	@font-face {
		font-family: "wotfard";
		src: url("/font/wotfard/regular.woff2") format("woff2"),
			url("/font/wotfard/regular.ttf") format("truetype");
		font-weight: normal;
		font-style: normal;
	}

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

const PageSpringboard = styled.div`
  @media screen and (max-width: 768px) {
    position: fixed;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  @media screen and (min-width: 769px) {
    min-width: 300px;
    flex: 0 0 25vw;
    background: #293462;
  }
`;

const PageContent = styled.div`
  @media screen and (max-width: 768px) {
    padding-top: 12px;
  }

  @media screen and (min-width: 769px) {
    flex: 1;
  }
`;

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const setupBrushstroke = async () => {
      if (CSS && CSS.paintWorklet) {
        await CSS.paintWorklet.addModule("/brushstroke.js");
      }
    };

    setupBrushstroke();
  }, []);

  return (
    <>
      <Head>
        <title>Dan Beddows</title>
        <meta
          name="description"
          content="I'm Dan Beddows, a web developer based in Manchester, UK. I like donuts."
        />
        <link rel="icon" href="/favicon.svg" />
        <style type="text/css">{fontAwesomeDom.css()}</style>
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,600,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyles />
      <PageContainer>
        <PageSpringboard>
          <Springboard />
        </PageSpringboard>
        <PageContent>
          <Component {...pageProps} />
        </PageContent>
      </PageContainer>
    </>
  );
}

export default MyApp;
