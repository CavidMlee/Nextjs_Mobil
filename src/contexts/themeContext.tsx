import React, { createContext, useState } from 'react';
import { ThemeProvider as Theme } from '@emotion/react'
import { lightTheme, darkTheme } from 'styles/theme/themeBuilder'

interface IProps {
    children: JSX.Element
}


export const ThemeContext = createContext({});

export const ThemeProvider: React.FC<IProps> = ({ children }) => {
    const [dark, setDark] = useState<boolean>(false)

    return (
        <ThemeContext.Provider value={[ dark, setDark ]} >
            <Theme theme={dark ? darkTheme : lightTheme}>
                {children}
            </Theme>

        </ThemeContext.Provider>
    )
}
