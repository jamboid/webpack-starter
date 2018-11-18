const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpackDashboard = require('webpack-dashboard/plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');

// Our function that generates our html plugins
function generateHtmlPlugins (templateDir) {
  // Read files in template directory
  const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir))
  return templateFiles.map(item => {
    // Split names and extension
    const parts = item.split('.')
    const name = parts[0]
    const extension = parts[1]
    // Create new HTMLWebpackPlugin with options
    return new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`)
    })
  })
}

const htmlPlugins = generateHtmlPlugins('./src/html/pages')

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
      // ,
      // {
      //   test: /\.(html)$/,
      //   use: {
      //     loader: 'html-loader',
      //     options: {
      //       interpolate: true
      //     }
      //   }
      // }
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
    }),
    new CopyWebpackPlugin([
      {from:'src/img',to: 'assets/img'}
    ])
  ].concat(htmlPlugins)
};

module.exports = config;
