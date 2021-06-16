import React, { FC } from "react"
import { CssBaseline, StylesProvider } from "@material-ui/core"
import { createGlobalStyle } from "styled-components"
import * as types from "./Base.types"

const GlobalStyle = createGlobalStyle`
  body {
    overflow-y: scroll;
  }
`

/**
 * @name Base
 *
 * @description TODO Add description
 */
export const Base: FC<types.Props> = props => {
  const { children } = props

  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <GlobalStyle />
      {children}
    </StylesProvider>
  )
}

export default Base
