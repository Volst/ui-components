const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const multiEntry = require('rollup-plugin-multi-entry');

process.env.NODE_ENV = 'production';

const external = [
    'styled-components',
    'react',
    'prop-types',
    'polished',
    'mobx',
    'moment',
    'mobx-react',
    'react-custom-scrollbars',
    'react-styled-flexboxgrid',
    'react-time-input',
    'react-router-dom',
    'react-text-mask',
    'text-mask-addons/dist/createNumberMask',
    'lodash',
    'downshift',
    'i18next',
    'react-dates',
    'react-addons-shallow-compare',
    // TODO: use `external` as function and Regex this shit
    'typeface-roboto/files/roboto-latin-300.woff2',
    'typeface-roboto/files/roboto-latin-400.woff2',
    'typeface-roboto/files/roboto-latin-500.woff2',
    'typeface-roboto/files/roboto-latin-700.woff2',
];

rollup
    .rollup({
        entry: ['./src/index.js', './src/general/icon/index.js'],
        external,
        plugins: [
            multiEntry(),
            babel({
                exclude: 'node_modules/**',
            }),
        ],
    })
    .then(bundle => {
        bundle.write({
            format: 'es',
            dest: 'dist/re-cy-cle.es.js',
        });
        bundle.write({
            format: 'cjs',
            dest: 'dist/re-cy-cle.cjs.js',
        });
    })
    .catch(err => {
        console.log(String(err));
        process.exit(1);
    });
