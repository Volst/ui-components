const webpack = require('webpack');

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
    loader: require.resolve('ts-loader'),
  });
  baseConfig.resolve.extensions.push('.ts', '.tsx');
  baseConfig.module.rules.push({
    test: /\.(woff2)$/,
    loader: 'file-loader',
  });
  return baseConfig;
};
