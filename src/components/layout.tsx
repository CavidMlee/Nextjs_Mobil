import React, { Fragment, ReactChild, useContext } from 'react';
import { css } from '@emotion/css';
import { ThemeContext } from 'contexts';

type Props = {
    children: JSX.Element
}


export const Layout: React.FC<Props> = ({ children }: any) => {

    const [ dark, setDark ]:any = useContext(ThemeContext)
    
    return (
        <Fragment>
            <header className={myStyle}>
                <div>
                    Header
                </div>
                <button onClick={()=>setDark(true)}>Dark</button>
                <button onClick={()=>setDark(false)}>Light</button>
                <span>Theme:{dark?'dark':'light'}</span>
            </header>
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
