import * as React from 'react';
import eStyled, {
  css,
  injectGlobal,
  keyframes,
  ThemedReactEmotionInterface,
  StyledComponent,
} from 'react-emotion';
import { ThemeProvider, withTheme } from 'emotion-theming';

import { ThemeInterface } from './config';

interface ThemeProps {
  theme?: ThemeInterface;
}

const styled = eStyled as ThemedReactEmotionInterface<ThemeInterface>;

export {
  styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProps,
  StyledComponent,
  ThemeInterface,
  ThemeProvider,
  withTheme,
};
export default styled;
