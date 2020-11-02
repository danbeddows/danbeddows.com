import Head from "next/head";
import Sidebar from "../components/Sidebar";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Dan Beddows</title>
        <link rel="icon" href="/favicon.svg" />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:200,300400,500,600,700,800,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="page-container">
        <div className="page-sidebar">
          <Sidebar />
        </div>
        <div className="page-content">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

export default MyApp;
