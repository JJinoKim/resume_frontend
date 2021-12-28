import React from 'react';
import ReactDOM from 'react-dom'
import { RecoilRoot } from 'recoil'

import Layout from './common/layout';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <Layout />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);
