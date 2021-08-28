import { Configuration, DefinePlugin, ProvidePlugin } from 'webpack'
import path from 'path'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { DIST_DIR, SRC_DIR } from './env'

export const config: Configuration = {
  context: path.resolve(SRC_DIR),
  entry: {
    main: path.join(__dirname, '../index.tsx')
  },
  output: {
    path: DIST_DIR,
    filename: '[name].[contenthash].js'
  },
  resolve: {
    extensions: ['.ts', '.wasm', '.tsx', '.mjs', '.cjs', '.js', '.json'],
    plugins: [
      new TsconfigPathsPlugin(
        {
          configFile: 'tsconfig.json'
        }
      )]
  },
  resolveLoader: {
    modules: [
      'node_modules'
    ]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/,
        include: path.join(SRC_DIR, 'assets'),
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            outputPath: DIST_DIR
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../static/index.html')
    }),
    new ProvidePlugin({
      process: 'process/browser'
    }),
    new CleanWebpackPlugin(),
    new DefinePlugin({
      IS_CLIENT: JSON.stringify(true),
      IS_SSR: JSON.stringify(false)
    })
  ]
}
