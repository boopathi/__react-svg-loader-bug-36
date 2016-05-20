const fs = require('fs');
const nodeModules = {};

fs.readdirSync('node_modules').filter(function(m) {
  return ['.bin'].indexOf(m) === -1;
}).forEach(function(m) {
  nodeModules[m] = 'commonjs2 ' + m;
});

module.exports = {
  entry: './src/enzyme-mount.js',
  output: {
    path: './build',
    filename: 'bundle.js',
    libraryTarget: 'commonjs2'
  },
  target: 'node',
  externals: nodeModules,
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        loader: 'babel!react-svg'
      }
    ]
  }
};