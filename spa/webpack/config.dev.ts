import webpack, { Configuration, DefinePlugin } from 'webpack'
import { merge } from 'webpack-merge'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import { DIST_DIR } from './env'
import { config as configCommon } from './config.common'

const config: Configuration = merge(configCommon, {
  mode: 'development',
  devServer: {
    contentBase: DIST_DIR,
    historyApiFallback: true,
    writeToDisk: true,
    hot: true,
    overlay: true,
    port: 4000
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        // use: 'babel-loader',
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              plugins: [
                require.resolve('react-refresh/babel')
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
    new DefinePlugin({
      IS_DEV: JSON.stringify(true)
    })
  ]
})

// eslint-disable-next-line no-restricted-syntax
export default config
