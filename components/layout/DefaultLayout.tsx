import Head from 'next/head';
import React from 'react';
import useStyles from './DefaultLayout.style';

interface LayoutProps {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: LayoutProps) {
  const { classes } = useStyles();
  return (
    <>
      <Head>
        <title>Payment app</title>
        <meta name="description" content="Application for handling payment" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <div id="wrapperBackground" className={classes.wrapperBackground}>
        <div className={classes.wrapperContent}>
          <header className={classes.header} />
          <main className={classes.main}>{children}</main>
          <footer className={classes.footer} />
        </div>
      </div>
    </>
  );
}
