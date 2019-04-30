// 主要内容打包
const path = require('path')
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(baseConfig, {
  entry: {
    path: path.resolve(__dirname, '..', 'src', 'baseEntry.js')
  },
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'main.js',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.css'
    })
  ]
})