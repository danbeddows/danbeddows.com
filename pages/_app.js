import Head from "next/head";
import Springboard from "../components/Springboard";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
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
