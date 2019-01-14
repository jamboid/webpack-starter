const path = require('path');
//const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpackDashboard = require('webpack-dashboard/plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackNotifierPlugin = require("webpack-notifier");
// const fs = require('fs');

const config = {
  entry: ["./src/js", "./src/scss/screen.scss"],
  output: {
    filename: "js/site.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "."
  },
  devtool: "source-map",
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
          {
            loader: 'file-loader',
            options: {
              name: '[name].css',
              context: './src/scss/',
              outputPath: '/css',
              publicPath: '/dist/css'
            }
          },
          {
            loader: 'extract-loader'
          },
          {
            loader: "css-loader",
            options: {
              url: false,
              importLoaders: 2,
              sourceMap: true
            }
          },
          {
            loader: "postcss-loader",
            options: { sourceMap: true }
          },
          {
            loader: "sass-loader",
            options: { sourceMap: true }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      Modules: path.resolve(__dirname, "src/js/modules/"),
      Sass: path.resolve(__dirname, "src/scss/")
    }
  },
  plugins: [
    new webpackDashboard(),
    // new MiniCssExtractPlugin({
    //   filename: "/css/screen.css"
    // }),
    new CopyWebpackPlugin([{ from: "src/img", to: "img" }]),
    new WebpackNotifierPlugin({ alwaysNotify: true })
  ]
};

module.exports = config; 
