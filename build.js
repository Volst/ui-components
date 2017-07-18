const rollup = require('rollup');
const babel = require('rollup-plugin-babel');

const external = [
    'styled-components',
    'react',
    'prop-types',
    'mobx',
    'mobx-react',
];
const globals = {
    react: 'React',
    'styled-components': 'styled',
    'prop-types': 'PropTypes',
    'mobx-react': 'mobxReact',
    mobx: 'mobx',
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
