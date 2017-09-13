const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const image = require('rollup-plugin-image');
const multiEntry = require('rollup-plugin-multi-entry');

const external = [
    'styled-components',
    'react',
    'prop-types',
    'polished',
    'mobx',
    'mobx-react',
    'react-custom-scrollbars',
    'react-styled-flexboxgrid',
    'react-router-dom',
    'lodash',
    'downshift',
    'i18next',
];

// TODO: instead of a UMD build we can also make a CommonJS build; then we don't need to do this shit anymore...
const globals = {
    react: 'React',
    i18next: 'i18next',
    'styled-components': 'styled',
    'prop-types': 'PropTypes',
    'polished': 'polished',
    'mobx-react': 'mobxReact',
    mobx: 'mobx',
    downshift: 'downshift',
    lodash: '_',
    'react-custom-scrollbars': 'reactCustomScrollbars',
    'react-styled-flexboxgrid': 'reactStyledFlexboxgrid',
    'react-router-dom': 'ReactRouterDom',
};

rollup
    .rollup({
        entry: ['./src/index.js', './src/icon/index.js'],
        external,
        plugins: [
            multiEntry(),
            babel({
                exclude: 'node_modules/**',
            }),
            image(),
        ],
    })
    .then(bundle => {
        bundle.write({
            format: 'es',
            dest: 'dist/re-cy-cle.es.js',
        });
        bundle.write({
            format: 'umd',
            moduleName: 'reCyCle',
            dest: 'dist/re-cy-cle.umd.js',
            globals,
        });
    })
    .catch(err => {
        console.log(String(err));
        process.exit(1);
    });
