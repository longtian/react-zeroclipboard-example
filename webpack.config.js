/**
 * Created by yan on 16-1-8.
 */
var path = require('path');
module.exports = {
  module: {
    loaders: [
      {
        test: /\.js(x)?$/,
        loader: 'babel',
        include: [
          path.join(__dirname, 'app')
        ]
      },
      {
        test: /\.swf$/,
        loader: 'file-loader'
      }
    ]
  },
  entry: path.join(__dirname, 'app', 'index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist/'
  }
}