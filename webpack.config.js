const { resolve } = require('path');

module.exports = {
  entry: resolve('./ToDo.js'),
  mode: 'development',
  output: {
    path: resolve('./'),
    filename: 'ToDo.min.js'
  },
  
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};