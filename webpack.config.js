const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 3000;

module.exports = {
  // Webpack configuration goes here
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.[hash].js',
    publicPath: '/'
  },
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
  devtool: 'inline-source-map',
  module: {
    rules: [

      // First Rule
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      // Second Rule
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
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
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    })
  ],
  devServer: {
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    open: true,
    hot: true
  }
};