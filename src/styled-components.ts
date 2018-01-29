import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';
import styledTs from 'styled-components-ts';

import { ThemeInterface } from './config';

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
  styledTs,
};
export default styled;
