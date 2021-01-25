import React, { Fragment, ReactChild } from 'react';
import { css } from '@emotion/css';

type Props = {
    children: JSX.Element
}

export const Layout: React.FC<Props> = ({ children }: any) => {
    return (
        <Fragment>
            <header className={myStyle}>Header</header>
            <main>{children}</main>
            <footer className={myStyle}>Footer</footer>
        </Fragment>

    )
}

const myStyle = css`
  height:10vh;
  width:100vw;
  background-color:#1d1c1d;
  color:white;
  display:flex;
  justify-content:center;
  align-items:center;
`
