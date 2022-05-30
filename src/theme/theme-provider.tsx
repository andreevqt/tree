import React from 'react';
import { ThemeProvider as Provider } from 'styled-components';
import createTheme from './create-theme';
import { TTheme } from './theme';

type TThemeProviderProps = {
  children?: React.ReactNode,
  theme?: Partial<TTheme>,
};

const ThemeProvider: React.FC<TThemeProviderProps> = ({ children, theme = {} }) => (
  <Provider theme={createTheme(theme)}>
    {children}
  </Provider>
);

export default ThemeProvider;
