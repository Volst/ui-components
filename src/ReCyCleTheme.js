import React, { Component } from 'react';
import { ThemeProvider, injectGlobal } from 'styled-components';
import RobotoLight from 'typeface-roboto/files/roboto-latin-300.woff2';
import RobotoRegular from 'typeface-roboto/files/roboto-latin-400.woff2';
import RobotoMedium from 'typeface-roboto/files/roboto-latin-500.woff2';
import RobotoBold from 'typeface-roboto/files/roboto-latin-700.woff2';
import { theme } from './config';

const injectGlobalStyles = props => injectGlobal`
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
        background: ${theme(props, 'bodyBackground')};
        font-family: ${theme(props, 'fontFamily')};
        color: ${theme(props, 'textColor')};
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
    button:focus {
        outline: 0;
    }
`;

export default class ReCyCleTheme extends Component {
    componentDidMount() {
        injectGlobalStyles(this.props);
    }
    render() {
        return <ThemeProvider {...this.props} />;
    }
}
