const path = require('path');

module.exports = {
  entry: './src/index.ts',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'dolibarr-api-ts.min.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'DolibarrApi',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
};