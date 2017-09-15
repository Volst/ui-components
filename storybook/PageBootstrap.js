import React from 'react';
import ReCyCleTheme from '../src/ReCyCleTheme';
import { BrowserRouter } from 'react-router-dom';
import i18next from 'i18next';

// Initialize empty theme; we rely on the default values.
const theme = {};

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
