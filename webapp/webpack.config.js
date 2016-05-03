module.exports = {
  entry: `${__dirname}/src/index.js`,
  output: { path: `${__dirname}/dist`, filename: 'my-favourite-wine.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
};
