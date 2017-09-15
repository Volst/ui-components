import React, { Component } from 'react';
import { ThemeProvider, injectGlobal } from 'styled-components';
import RobotoLight from 'typeface-roboto/files/roboto-latin-300.woff2';
import RobotoRegular from 'typeface-roboto/files/roboto-latin-400.woff2';
import RobotoMedium from 'typeface-roboto/files/roboto-latin-500.woff2';
import RobotoBold from 'typeface-roboto/files/roboto-latin-700.woff2';

export const COLOR_TEXT = 'rgba(0, 0, 0, 0.7)';
export const COLOR_RED = '#dc0818';

const injectGlobalStyles = () => injectGlobal`
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
        font-family: Roboto, Arial, sans-serif;
        color: ${COLOR_TEXT};
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
    button:focus {
        outline: 0;
    }
`;

export default class ReCyCleTheme extends Component {
    componentDidMount() {
        injectGlobalStyles();
    }
    render() {
        return <ThemeProvider {...this.props} />;
    }
}
