const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, 'src'),
    },
  },
  devServer: {
    host: process.env.IP,
    port: process.env.PORT,
    disableHostCheck:true
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  devtool: 'source-map',
};
