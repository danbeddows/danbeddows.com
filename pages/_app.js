import Head from "next/head";
import { useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import Springboard from "../components/global/Springboard";
import "../styles/globals.scss";

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: "silka";
  src: url("/font/silka/silka-regular-webfont.woff2") format("woff2"),
    url("/font/silka/silka-regular-webfont.woff") format("woff"),
    url("/font/silka/silka-regular-webfont.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

  body {
		padding: 0;
		margin: 0;
		
		text-rendering: optimizeLegibility;
	}
	
	* {
		box-sizing: border-box;
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
          content="I'm Dan Beddows, a web developer based in Manchester, UK ☔️"
        />
        <link rel="icon" href="/favicon.svg" />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,600,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyles />
      <div className="page-container">
        <div className="page-sidebar">
          <Springboard />
        </div>
        <div className="page-content">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

export default MyApp;
