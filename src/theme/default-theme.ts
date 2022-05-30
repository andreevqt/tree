import { TTheme } from './theme';

const defaultColors = {
  lightGray: '#A3A3A3',
  darkGray: '#4F4F4F',
  black: '#000',
  white: '#fff',
  green: '#3bb33b'
};

const defaultTheme: TTheme = {
  color: defaultColors.darkGray,
  backgroundColor: defaultColors.white,
  font: 'arial, hevletica, sans-serif',
  highlight: defaultColors.lightGray,
  offline: defaultColors.lightGray,
  online: defaultColors.green
};

export default defaultTheme;
