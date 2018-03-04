import * as React from 'react';
import * as styledComponents from 'styled-components';
import {
  ThemedStyledComponentsModule,
  StyledFunction,
  StyledComponentClass,
} from 'styled-components';

import { ThemeInterface } from './config';

interface ThemeProps {
  theme?: ThemeInterface;
}

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<ThemeInterface>;

// Just re-exporting withTheme like the other variables above doesn't work, so we ignore this one.
const withTheme = styledComponents.withTheme;

export {
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
  withTheme,
  styled,
  ThemeProps,
  StyledFunction,
  StyledComponentClass,
  ThemeInterface,
};
export default styled;
