import React from "react";
import Grid from "./grid/Grid";
import MaxWidthSection from "./grid/MaxWidthSection";
import Row from "./grid/Row";
import Head from "next/head";
import Header from "./Header";

type LayoutProps = {
  children: React.ReactNode;
  pageTitle: string;
};

const Layout = ({ children, pageTitle }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="A very cool ecommerce website" />
      </Head>
      <Grid>
        <Header />
        <MaxWidthSection>
          <Row>
            <main>{children}</main>
          </Row>
        </MaxWidthSection>
      </Grid>
    </>
  );
};

export default Layout;
