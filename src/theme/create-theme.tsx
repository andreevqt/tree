import { TTheme } from './theme';
import defaultTheme from './default-theme';

export default (theme: Partial<TTheme>): TTheme => {
  return { ...defaultTheme, ...theme };
};
