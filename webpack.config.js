const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpackDashboard = require('webpack-dashboard/plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const fs = require('fs');

const config = {
  entry: { main: './src/js'},
  output: {
    filename: 'assets/js/site.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '.',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    alias: {
      Modules: path.resolve(__dirname, 'src/js/modules/'),
      Sass: path.resolve(__dirname, 'src/scss/')
    }
  },
  plugins: [
    new webpackDashboard(),
    new MiniCssExtractPlugin({
      filename: "/assets/css/screen.css",
    })
  ]
};

module.exports = config;
