/* eslint-disable import/no-extraneous-dependencies */
const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const webpackConfig = require('./webpack.dev.config');

const serverOptions = {
  disableHostCheck: true,
  publicPath: '/', // webpackConfig.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    // Remove built modules information.
    modules: false,
    // Remove built modules information to chunk information.
    chunkModules: false,
    colors: true,
  },
};

const PORT = 3002;

new WebpackDevServer(webpack(webpackConfig), serverOptions).listen(PORT, '0.0.0.0', (err) => {
  if (err) {
    return console.log(err);
  }

  return console.info(`Webpack dev server listening at http://0.0.0.0:${PORT}/`);
});
