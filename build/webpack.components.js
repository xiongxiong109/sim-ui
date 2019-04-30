// 打包组件webpack
const path = require('path');
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const components = require('../component.json');
// console.log(components);

module.exports = merge(baseConfig, {
  entry: components,
  output: {
    filename: '[name]/index.js',
    libraryTarget: 'commonjs2'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]/style.css'
    })
  ]
});