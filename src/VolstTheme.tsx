import * as React from 'react';
import { ThemeProvider, injectGlobal } from './styled-components';
import * as RobotoLight from 'typeface-roboto/files/roboto-latin-300.woff2';
import * as RobotoRegular from 'typeface-roboto/files/roboto-latin-400.woff2';
import * as RobotoMedium from 'typeface-roboto/files/roboto-latin-500.woff2';
import * as RobotoBold from 'typeface-roboto/files/roboto-latin-700.woff2';
import { defaultConfig, themeOverrides, ThemeInterface } from './config';
import { mapValues } from 'lodash';

const injectGlobalStyles = (theme: ThemeInterface) => injectGlobal`
  @font-face {
    font-family: 'Roboto';
    src: url('${RobotoLight}');
    font-weight: 300;
  }
  @font-face {
    font-family: 'Roboto';
    src: url('${RobotoRegular}');
    font-weight: 400;
  }
  @font-face {
    font-family: 'Roboto';
    src: url('${RobotoMedium}');
    font-weight: 500;
  }
  @font-face {
    font-family: 'Roboto';
    src: url('${RobotoBold}');
    font-weight: 700;
  }

  html {
    box-sizing: border-box;
    background: ${theme.bodyBackground};
    font-family: ${theme.fontFamily};
    color: ${theme.textColor};
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
    margin: 0;
  }

  input, textarea, button {
    font-family: inherit;
  }

  input:focus,
  textarea:focus,
  a:focus,
  button:focus {
    outline: 0;
  }

  select:-moz-focusring, select::-moz-focus-inner {
    color: transparent;
    text-shadow: 0 0 0 #000;
  }
`;

export function getTheme(theme: ThemeInterface) {
  // Fallback to the value of the fallbackProp
  const fallback = mapValues(themeOverrides, (fallbackProp, overrideProp) => {
    return theme[fallbackProp] || defaultConfig[fallbackProp];
  });

  return Object.assign({}, defaultConfig, fallback, theme);
}

export interface VolstThemeProps {
  theme: any; // TODO: should have strict type checking
}

export default class VolstTheme extends React.Component<VolstThemeProps, {}> {
  static defaultProps = {
    theme: {},
  };
  componentDidMount() {
    injectGlobalStyles(getTheme(this.props.theme));
  }
  render() {
    return (
      <ThemeProvider theme={getTheme(this.props.theme)}>
        {this.props.children}
      </ThemeProvider>
    );
  }
}
