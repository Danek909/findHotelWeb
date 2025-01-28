const path = require('path');

module.exports = {
  mode: 'production', // Production-режим
  entry: './src/index.js', // Вхідний файл
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.module\.css$/, // Обробка CSS-модулів
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true, // Увімкнення CSS-модулів
            },
          },
        ],
      },
      {
        test: /\.css$/, // Для звичайних CSS (не модулі)
        exclude: /\.module\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  optimization: {
    minimize: true, // Мініфікація JS
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: true,
          mangle: true,
        },
      }),
    ],
  },
};