import { dom as fontAwesomeDom } from "@fortawesome/fontawesome-svg-core";
import type { AppProps /*, AppContext */ } from "next/app";
import Head from "next/head";
import { useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Springboard from "../components/global/Springboard";

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


	/* Hamburger icon
	* @author Jonathan Suh @jonsuh
	* @site https://jonsuh.com/hamburgers
	* @link https://github.com/jonsuh/hamburgers
	*/
.hamburger {
  padding: 20p;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;
  opacity: 0.7;
}
.hamburger:hover {
  opacity: 0.7;
}
.hamburger.isActive:hover {
  opacity: 0.7;
}
.hamburger.isActive .hamburgerInner,
.hamburger.isActive .hamburgerInner::before,
.hamburger.isActive .hamburgerInner::after {
  background-color: #fff;
}

.hamburgerBox {
  width: 30px;
  height: 18px;
  display: inline-block;
  position: relative;
}

.hamburgerInner {
  display: block;
  top: 50%;
  margin-top: -2px;
}
.hamburgerInner,
.hamburgerInner::before,
.hamburgerInner::after {
  width: 30px;
  height: 4px;
  background-color: #fff;
  border-radius: 4px;
  position: absolute;
  transition-property: transform 0.275s ease;
}
.hamburgerInner::before,
.hamburgerInner::after {
  content: "";
  display: block;
}
.hamburgerInner::before {
  top: -10px;
}
.hamburgerInner::after {
  bottom: -10px;
}

/*
	* Elastic
	*/
.hamburgerElastic .hamburgerInner {
  top: 2px;
  transition-duration: 0.275s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.hamburgerElastic .hamburgerInner::before {
  top: 10px;
  transition: opacity 0.125s 0.275s ease;
}
.hamburgerElastic .hamburgerInner::after {
  top: 20px;
  transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.hamburgerElastic.isActive .hamburgerInner {
  transform: translate3d(0, 10px, 0) rotate(135deg);
  transition-delay: 0.075s;
}
.hamburgerElastic.isActive .hamburgerInner::before {
  transition-delay: 0s;
  opacity: 0;
}
.hamburgerElastic.isActive .hamburgerInner::after {
  transform: translate3d(0, -20px, 0) rotate(-270deg);
  transition-delay: 0.075s;
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

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const setupBrushstroke = async () => {
      const cssModule: any = CSS;
      if (cssModule && cssModule.paintWorklet) {
        await cssModule.paintWorklet.addModule("/brushstroke.js");
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
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
