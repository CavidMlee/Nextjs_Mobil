import React, { useEffect } from 'react';
import Link from 'next/link'
import { css } from '@emotion/css'
import { Layout } from 'components';

export const Home: React.FC = () => {
    return (
        <Layout>
            <div className={myStyle}>
                <h1>Home</h1>
                <Link  href='/login'>
                    <a className={linkStyle}>Login</a>
                </Link>
                <Link href='/register'>
                    <a className={linkStyle}>Register</a>
                </Link>
            </div>
        </Layout>
    )
}

const myStyle = css`
  height:80vh;
  width:100vw;
  background-color:#703070;
  color:white;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
`

const linkStyle =css`
    padding:5px 10px;
    border-radius:3px;
    border: 1px solid white;
    margin-bottom:10px
`