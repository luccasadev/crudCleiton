import path from 'path';

export default {
  mode: 'development', // ou 'production'
  entry: './dist/util.js', // Certifique-se de que o arquivo de entrada está no local correto
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    static: path.resolve('dist'), // Serve o conteúdo estático a partir da pasta dist
    compress: true,
    port: 9000,
  },
};
