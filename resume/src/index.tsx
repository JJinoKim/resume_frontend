import React from 'react';
import ReactDOM from 'react-dom'
import { RecoilRoot } from 'recoil'
import 'bootstrap/dist/css/bootstrap.css';

import GlobalStyle from './css/global-styles';
import { theme } from './css/theme';

import Layout from './common/layout';
import { ThemeProvider } from 'styled-components';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <GlobalStyle />
        <Layout />
      </RecoilRoot>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
