// 打包组件webpack
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
var MiniCssExtractPlugin = require('mini-css-extract-plugin')
const components = require('../component.json');
// console.log(components);

module.exports = {
  entry: components,
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: '[name]/index.js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['.vue', '.js', '.css'],
    modules: ['node_modules']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        include: process.cwd(),
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]/style.css'
    }),
    new VueLoaderPlugin()
  ],
  externals: {
    vue: {
      commonjs: 'vue',
      commonjs2: 'vue',
      root: 'Vue'
    }
  }
}