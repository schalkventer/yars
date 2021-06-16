import React, { FC } from "react";
import { createGlobalStyle } from 'styled-components'
import { CssBaseline } from '@material-ui/core'
import { StylesProvider } from '@material-ui/core/styles';

const GlobalStyles = createGlobalStyle`
    body {
        overflow-x: hidden;
        overflow-y: scroll;
    }
`

export const Base: FC = (props) => {
    const { children } = props;

    return (
        <StylesProvider injectFirst>
            <CssBaseline />
            <GlobalStyles />
            {children}
        </StylesProvider>
    )
}

export default Base