import React from 'react';
import Head from 'next/head'
import styles from '../src/styles/Home.module.css';
import {Login} from 'containers'

 const  Home:React.FC = () => {

   const token:boolean = false

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        token ? <div>Home list</div> : <Login />
      }
    </div>
  )
}

export default Home;