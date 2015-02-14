var webpack = require('webpack');

module.exports = {
  entry: [
    './client/src/js/boot.js'
  ],
  output: {
    path: __dirname + '/client/build',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module:{
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
      { test: /\.(jpe?g|png|gif)$/i, loader: 'url?limit=10000' },
      { test: /\.jsx?$/, loaders: ['6to5-loader?experimental&optional=selfContained'], exclude: /node_modules/}
    ]
  }
};
