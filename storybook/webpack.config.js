const webpack = require('webpack');

// TODO: This whole file can be removed if PR https://github.com/storybooks/storybook/pull/1733 is merged & released.

// Export a function. Accept the base config as the only param.
module.exports = (storybookBaseConfig, configType) => {
    // Remove UglifyJsPlugin because it can't handle ES6+ properly.
    const index = storybookBaseConfig.plugins.findIndex((m) => m instanceof webpack.optimize.UglifyJsPlugin);
    if (index >= 0) {
        storybookBaseConfig.plugins.splice(index, 1);
    }
    storybookBaseConfig.module.rules.push({
        test: /\.(woff2)$/,
        loader: 'file-loader',
    });
    return storybookBaseConfig;
};
