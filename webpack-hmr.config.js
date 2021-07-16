const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const { RunScriptWebpackPlugin } = require('run-script-webpack-plugin');

module.exports = function (options) {
  return {
    ...options,
    entry: ['webpack/hot/poll?100', options.entry],
    externals: [
      nodeExternals({
        allowlist: ['webpack/hot/poll?100'],
      }),
    ],
    // plugins: [
    //   ...options.plugins,
    //   new webpack.HotModuleReplacementPlugin(),
    //   new webpack.WatchIgnorePlugin({
    //     paths: [/\.js$/, /\.d\.ts$/],
    //   }),
    //   new RunScriptWebpackPlugin({ name: options.output.filename }),
    // ],
    plugins: [
      new webpack.NoErrorsPlugin(),
      new htmlWebpackPlugin({
        filename: 'index.html',
        template: './index.html',
        inject: false,
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
      }),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
    ],
  };
};
