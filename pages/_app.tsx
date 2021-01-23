import React, { Fragment } from 'react';
import type { AppProps /*, AppContext */ } from 'next/app';
// import Head from 'next/head';
import '../src/styles/globals.css';
import {Head} from 'components';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head title='Phones' />
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
