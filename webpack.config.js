const webpack = require('webpack');

module.exports = {
  devtool: 'eval',

  entry: './src/index.js',

  output: {
    filename: 'public/bundle.js',
    //this is the default name, so you can skip it
    //at this directory our bundle file will be available
  },

  module: {
    loaders: [
      {
        //tell webpack to use jsx-loader for all *.jsx files
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['stage-0', 'es2015', 'react']
        }
      }
    ]
  },

  resolve: {
    extensions: ['', '.js']
  },
}
