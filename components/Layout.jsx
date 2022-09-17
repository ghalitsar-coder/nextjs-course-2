import Head from "next/head";
import React from "react";
import { Header, Footer } from "./";
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Amogus Hotel</title>
        <meta name="description" content="The Greatest Hotel in Bali" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="py-20 container ">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
