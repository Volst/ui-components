const webpack = require('webpack');
const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const appSrc = path.resolve(__dirname, '../src');
const storybookSrc = path.resolve(__dirname, '../storybook');

// TODO: This whole file can be removed if PR https://github.com/storybooks/storybook/pull/1733 is merged & released.

// Export a function. Accept the base config as the only param.
module.exports = (baseConfig, configType) => {
  // Remove UglifyJsPlugin because it can't handle ES6+ properly.
  const index = baseConfig.plugins.findIndex(
    m => m instanceof webpack.optimize.UglifyJsPlugin
  );
  if (index >= 0) {
    baseConfig.plugins.splice(index, 1);
  }
  baseConfig.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: [appSrc, storybookSrc],
    loader: require.resolve('ts-loader'),
    options: {
      // disable type checker - we will use it in fork plugin
      transpileOnly: true,
    },
  });
  baseConfig.resolve.extensions.push('.ts', '.tsx');
  baseConfig.module.rules.push({
    test: /\.(woff2)$/,
    loader: 'file-loader',
  });
  baseConfig.plugins.push(
    new ForkTsCheckerWebpackPlugin({
      async: false,
      watch: [appSrc, storybookSrc],
      tsconfig: path.resolve(__dirname, '../tsconfig.json'),
    })
  );
  return baseConfig;
};
