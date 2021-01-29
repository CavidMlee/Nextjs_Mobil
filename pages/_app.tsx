import React, { Fragment } from 'react';
import type { AppProps /*, AppContext */ } from 'next/app';
// import Head from 'next/head';
import '../src/styles/globals.css';
import { Head } from 'components';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'contexts';
import 'react-responsive-modal/styles.css';


// Create a client
const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head title='Phones' />
      
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </QueryClientProvider>
      
    </Fragment>
  )
}

export default MyApp
