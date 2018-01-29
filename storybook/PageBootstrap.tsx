import * as React from 'react';
import VolstTheme from '../src/VolstTheme';
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
      translation: {
        form: {
          multiPick: {
            searchPlaceholder: 'Search…',
            selectedText: '$1 of $2 selected',
            noneSelectedText: 'None selected',
            selectAllButton: 'Select all',
            selectNoneButton: 'Select none',
          },
        },
      },
    },
  },
});

const PageBootstrap = (
  { children } // eslint-disable-line
) => (
  <VolstTheme theme={theme}>
    <BrowserRouter>{children}</BrowserRouter>
  </VolstTheme>
);

export default PageBootstrap;
