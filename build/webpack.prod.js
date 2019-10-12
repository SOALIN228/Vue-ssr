const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const prodConfig = {
  mode: 'production', // 打包环境，开发还是生产(development or production)
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ // 打包css
      filename: '[name].[contenthash:8].css', // 配置hash
      chunkFilename: '[id].[contenthash:8].css'
    })
  ],
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})] // css代码压缩
  },
  output: {
    filename: '[name].[contenthash:8].js', // 输出文件名
    chunkFilename: '[id].[contenthash:8].js', // 入口文件拆分后名字格式
  }
}

module.exports = prodConfig
