import React from 'react';
import ReCyCleTheme from '../src/ReCyCleTheme';
import { BrowserRouter } from 'react-router-dom';
import i18next from 'i18next';

const theme = {
    primary: '#006b94',
    success: '#58b96b',
    warning: '#d45352',
    dark: '#4c4c4c',
    light: '#eee',
};

i18next.init({
    lng: 'en',
    resources: {
        en: {
            translation: {},
        },
    },
});

const PageBootstrap = ({ children }) => // eslint-disable-line
    <ReCyCleTheme theme={theme}>
        <BrowserRouter>
            {children}
        </BrowserRouter>
    </ReCyCleTheme>;

export default PageBootstrap;
