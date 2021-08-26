import { Configuration } from 'webpack'
import { merge } from 'webpack-merge'
import { config as configCommon } from './config.common'

const config: Configuration = merge(configCommon, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
})

// eslint-disable-next-line no-restricted-syntax
export default config
