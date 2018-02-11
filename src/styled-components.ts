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
  withTheme,
} = (styledComponents as ThemedStyledComponentsModule<
  any
>) as ThemedStyledComponentsModule<ThemeInterface>;

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
