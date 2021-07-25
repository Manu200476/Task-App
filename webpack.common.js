const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'production',
  entry: './app/entry',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: path.resolve(__dirname, 'assets'),
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        loader: 'babel-loader',
        type: 'javascript',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', MiniCssExtractPlugin.loader],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.vue', '.css'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
    compress: false,
    historyApiFallback: true,
    hot: true,
    https: true,
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin(),
    new ESLintPlugin({
      eslintPath: path.join(__dirname, '.eslintrc.js'),
      extensions: ['.js', '.vue'],
      fix: true,
    }),
  ],
}
