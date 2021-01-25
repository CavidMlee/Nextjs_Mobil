import React from 'react';
import Head from 'next/head'
import { NextPage } from 'next'
import styles from '../src/styles/Home.module.css';
import { Home } from 'containers'

const Index: NextPage = () => {


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </div>
  )
}

export default Index;