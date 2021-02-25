const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const port = process.env.PORT || 3000

module.exports = {
  // Webpack configuration goes here
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.[hash].js',
    publicPath: '/',
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      // First Rule
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      // {
      //   test: /\.s[ac]ss$/i,
      //   use: [
      //     { loader: 'style-loader' },
      //     { loader: 'sass-loader' },
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         modules: {
      //           exportLocalsConvention: 'camelCaseOnly',
      //           namedExport: true,
      //           compileType: 'module',
      //           auto: false,
      //           exportGlobals: true,
      //           // compileType?, auto?, mode?, localIdentName?, localIdentContext?, localIdentHashPrefix?, localIdentRegExp?, getLocalIdent?, namedExport?, exportGlobals?, exportLocalsConvention?, exportOnlyLocals?
      //         },
      //         sourceMap: true,
      //       },
      //     },
      //   ],
      // },
      {
        // test: /\.s[ac]ss$/i,
        test: /\.(sass|css)$/,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|woff2|ttf|woff|svg|eot)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      // Second Rule
      // {
      //   test: /\.css$/i,
      //   use: ['style-loader', 'css-loader'],
      // },
      // {
      //   test: /\.css$/i,
      //   use: [
      //     'style-loader',
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         modules: {
      //           compileType: 'module',
      //           mode: 'local',
      //           exportGlobals: true,
      //           localIdentName: '[local]',
      //           // localIdentContext
      //           // localIdentHashPrefix: undefined,
      //           // localIdentRegExp: undefined,
      //           // getLocalIdent: undefined,
      //           namedExport: true,
      //           exportLocalsConvention: 'camelCaseOnly',
      //           exportOnlyLocals: false
      //         },
      //         sourceMap: true,
      //         importLoaders: 1
      //       }
      //     }
      //   ]
      // }
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
  ],
  devServer: {
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    open: true,
    hot: true,
  },
}
