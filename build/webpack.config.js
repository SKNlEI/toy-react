
module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js'
  },
  optimization: {
    minimize: false
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [[
              '@babel/plugin-transform-react-jsx',
              {pragma: "ToyReact.createElement"}
            ]]
          }
        }
      }
    ]
  }
}