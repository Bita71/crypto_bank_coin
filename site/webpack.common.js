// eslint-disable-next-line no-undef
const path = require('path');
// eslint-disable-next-line no-undef
const HtmlWebpackPlugin = require('html-webpack-plugin');

// eslint-disable-next-line no-undef
module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js',
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    clean: true,
  },

  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },

  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: 'asset/resource',
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Coin.',
    }),
  ],
};
