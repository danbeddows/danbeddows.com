import Head from "next/head";
import { useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import Springboard from "../components/global/Springboard";
import "../styles/globals.scss";

const GlobalStyles = createGlobalStyle`
  body {
		padding: 0;
		margin: 0;
		font-family: "Montserrat", Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
			Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
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
          href="https://fonts.googleapis.com/css?family=Montserrat:200,300400,500,600,700,800,900&display=swap"
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
