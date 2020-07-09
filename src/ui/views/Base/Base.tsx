/*
 * Third-party packages
 */

import React, { FC, StrictMode } from 'react';
import { Helmet } from 'react-helmet';
import styled, { createGlobalStyle } from 'styled-components';
import { StylesProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

/*
 * Module internal files
 */

import { types } from '.';

/**
 * Embedded components
 */

const GlobalStyles = createGlobalStyle`
  html {
    min-height: 100vh;
    height: 100%;
  }

  body {
    min-height: 100vh;
    height: 100%;
    overflow-y: scroll;
  }

  #root {
    min-height: 100vh;
    height: 100%;
  }
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Content = styled.div`
  flex-grow: 1;
`;

/*
 * Default Export
 */

export const Base: FC<types.Props> = (props): JSX.Element => {
  const { children, header, footer } = props;

  return (
    <StrictMode>
      <CssBaseline />
      <GlobalStyles />

      <Helmet>
        <title>Media Lens</title>
        <meta
          name="description"
          content="Media Lens is a statistical analysis tool for marketers to help understand the behaviour of South African consumers and optimise their campaigns"
        />
      </Helmet>

      <StylesProvider injectFirst>
        <Layout>
          {header}
          <Content>{children}</Content>
          {footer}
        </Layout>
      </StylesProvider>
    </StrictMode>
  );
};

export default Base;
