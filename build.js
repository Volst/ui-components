const rollup = require('rollup');
const typescript = require('rollup-plugin-typescript2');

process.env.NODE_ENV = 'production';

const external = [
  'emotion',
  'emotion-theming',
  'react-emotion',
  'react',
  'react-dom',
  'prop-types',
  'polished',
  'moment',
  'react-custom-scrollbars',
  'react-router-dom',
  'react-text-mask',
  'react-input-autosize',
  'text-mask-addons/dist/createAutoCorrectedDatePipe',
  'text-mask-addons/dist/createNumberMask',
  'lodash',
  'downshift',
  'i18next',
  'rc-dialog',
  'rc-util/lib/Dom/addEventListener',
  'rc-tooltip',
  'react-day-picker/DayPickerInput',
  'react-day-picker/moment',
  'react-day-picker',
  'react-onclickoutside',
  'react-textarea-autosize',
  // TODO: use `external` as function and Regex this shit
  'typeface-roboto/files/roboto-latin-300.woff2',
  'typeface-roboto/files/roboto-latin-400.woff2',
  'typeface-roboto/files/roboto-latin-500.woff2',
  'typeface-roboto/files/roboto-latin-700.woff2',
];

rollup
  .rollup({
    input: './src/index.ts',
    external,
    plugins: [typescript()],
  })
  .then(bundle => {
    bundle.write({
      format: 'es',
      file: 'dist/volst-ui-components.es.js',
    });
    bundle.write({
      format: 'cjs',
      file: 'dist/volst-ui-components.cjs.js',
    });
  })
  .catch(err => {
    console.log(String(err));
    process.exit(1);
  });
