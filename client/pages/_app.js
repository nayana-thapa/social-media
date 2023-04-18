// Next.js uses the App component to initialize pages; meaning all the pages
// we will have, before those pages are render this MyApp function will run
// first. MyApp function helps to make anything available globally.

import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../components/Nav";
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <link rel="stylesheet" href="/css/style.css"/>
    </Head>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}
