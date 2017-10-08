import React from 'react';
import ReCyCleTheme from '../src/ReCyCleTheme';
import { BrowserRouter } from 'react-router-dom';
import i18next from 'i18next';

// Initialize empty theme; we rely on the default values.
// To temporarily test a dark theme, uncomment these properties;
const theme = {
    // primaryColor: '#eecb3d',
    // dangerColor: '#dc0818',
    // componentBackground: '#333',
    // textColor: '#fff',
    // bodyBackground: '#333',
    // borderColor: '#444',
    // lightColor: '#555',
    // disabledColor: '#444',
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
