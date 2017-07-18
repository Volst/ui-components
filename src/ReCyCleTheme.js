import React, { Component } from 'react';
import { ThemeProvider, injectGlobal } from 'styled-components';

export const COLOR_TEXT = 'rgba(0, 0, 0, 0.7)';

const injectGlobalStyles = () => injectGlobal`
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
