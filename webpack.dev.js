const { merge } = require('webpack-merge')
const path = require('path')
const common = require('./webpack.common')

module.exports = merge(common, {
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
    compress: false,
    historyApiFallback: true,
    hot: true,
    https: true,
  },
})
