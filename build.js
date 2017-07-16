const rollup = require('rollup');
const babel = require('rollup-plugin-babel');

rollup
    .rollup({
        entry: './src/index.js',
        external: ['styled-components', 'react', 'prop-types'],
        plugins: [
            babel({
                exclude: 'node_modules/**',
            }),
        ],
    })
    .then(bundle => {
        bundle.write({
            format: 'es',
            dest: 'dist/cy-components.es.js',
        });
        bundle.write({
            format: 'umd',
            moduleId: 'cy-components',
            moduleName: 'cyComponents',
            dest: 'dist/cy-components.umd.js',
            globals: {
                react: 'React',
                'styled-components': 'styled',
                'prop-types': 'PropTypes',
            },
        });
    })
    .catch(err => {
        console.log(String(err));
        process.exit(1);
    });
