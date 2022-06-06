// eslint-disable-next-line no-undef
const { merge } = require('webpack-merge');
// eslint-disable-next-line no-undef
const common = require('./webpack.common.js');
// eslint-disable-next-line no-undef
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
// eslint-disable-next-line no-undef
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// eslint-disable-next-line no-undef
module.exports = merge(common, {
  mode: 'production',

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.s?css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS

          'postcss-loader',

          'sass-loader',
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin(),
    new ImageMinimizerPlugin({
      minimizerOptions: {
        // Lossless optimization with custom option
        // Feel free to experiment with options for better result for you
        plugins: [
          ['gifsicle', { interlaced: true }],
          ['jpegtran', { progressive: true }],
          ['optipng', { optimizationLevel: 5 }],
          // Svgo configuration here https://github.com/svg/svgo#configuration
          [
            'svgo',
            {
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: {
                      // customize plugin options
                      convertShapeToPath: {
                        convertArcs: true,
                      },
                      // disable plugins
                      convertPathData: false,
                    },
                  },
                },
              ],
            },
          ],
        ],
      },
    }),
  ],
});
