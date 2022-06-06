// eslint-disable-next-line no-undef
const { merge } = require('webpack-merge');
// eslint-disable-next-line no-undef
const common = require('./webpack.common.js');

// eslint-disable-next-line no-undef
module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',

          'postcss-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
});
