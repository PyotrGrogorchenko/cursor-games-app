const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-styled-component-theme/dist/preset'
  ],
  core: {
    'builder': 'webpack5'
  },
  webpackFinal: async (config, { configType }) => {
 
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, '..')
    ] 
 
    config.resolve.plugins = config.resolve.plugins || [];

    config.resolve.plugins.push(
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, '../tsconfig.json')
      })
    )

    return config
  }
}
