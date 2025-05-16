const path = require('path');
const Dotenv = require('dotenv-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'index.jsx'),
  output: {
    path: path.resolve(__dirname, '../dist/server'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ],
  },
  plugins: [
    new Dotenv(
      {
        systemvars: false,
        path: path.resolve(__dirname, '.env')
      }
    ),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     { from:  path.resolve(__dirname, './public'), to: '.' },
    //   ],
    // }),
  ],
};
