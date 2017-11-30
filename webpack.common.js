const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const CleanWebpackPluginConfig = new CleanWebpackPlugin(['dist']);

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: {
    app: './client/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    loaders: [{
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }, {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules',
        include: /flexboxgrid/,
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
  node: {
    'fs': 'empty',
    'net': 'empty',
    'tls': 'empty',
    'dns': 'empty'
  },
  plugins: [
    CleanWebpackPluginConfig,
    HtmlWebpackPluginConfig,
  ],
}
