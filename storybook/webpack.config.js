const webpack = require('webpack');

// Export a function. Accept the base config as the only param.
module.exports = (storybookBaseConfig, configType) => {
    // Remove UglifyJsPlugin because it can't handle ES6+ properly.
    const index = storybookBaseConfig.plugins.findIndex((m) => m instanceof webpack.optimize.UglifyJsPlugin);
    if (index >= 0) {
        storybookBaseConfig.plugins.splice(index, 1);
    }
    storybookBaseConfig.module.rules.push({
        loader: 'file-loader',
        test: /\.(gif|jpg|png|svg)$/,
    });
    return storybookBaseConfig;
};
