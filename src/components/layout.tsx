import React, { Fragment, ReactChild } from 'react';

type Props = {
    children: JSX.Element
}

export const Layout: React.FC<Props> = ({ children }: any) => {
    return (
        <Fragment>
            <header>Header</header>
            <main>{children}</main>
            <footer>Footer</footer>
        </Fragment>

    )
}
