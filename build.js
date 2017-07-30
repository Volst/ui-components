const rollup = require('rollup');
const babel = require('rollup-plugin-babel');

const external = [
    'styled-components',
    'react',
    'prop-types',
    'mobx',
    'mobx-react',
    'react-custom-scrollbars',
    'react-router-dom',
    'lodash',
];
const globals = {
    react: 'React',
    'styled-components': 'styled',
    'prop-types': 'PropTypes',
    'mobx-react': 'mobxReact',
    mobx: 'mobx',
    lodash: '_',
    'react-custom-scrollbars': 'reactCustomScrollbars',
    'react-router-dom': 'ReactRouterDom',
};

rollup
    .rollup({
        entry: './src/index.js',
        external,
        plugins: [
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

// Icons get their own build for now. Not sure if it's a good idea but hey itworks.
rollup
    .rollup({
        entry: './src/icon/index.js',
        external,
        plugins: [
            babel({
                exclude: 'node_modules/**',
            }),
        ],
    })
    .then(bundle => {
        bundle.write({
            format: 'es',
            dest: 'dist/icon.es.js',
        });
        bundle.write({
            format: 'umd',
            moduleName: 'reCyCle',
            dest: 'dist/icon.umd.js',
            globals,
        });
    })
    .catch(err => {
        console.log(String(err));
        process.exit(1);
    });
