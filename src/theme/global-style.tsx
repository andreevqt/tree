import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: #A3A3A3;
  }
`;

export default GlobalStyle;
