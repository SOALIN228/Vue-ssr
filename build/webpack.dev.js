const webpack = require('webpack') // 引入

const devConfig = {
  mode: 'development', // 打包环境，开发还是生产(development or production)
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    overlay: true, // 将eslint 错误显示在页面上
    contentBase: false, // 打开文件路径
    open: true, // 自动打开页面
    port: 8080, // 指定端口号
    hot: true // 开启热更新
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin() // HMR
  ],
  output: {
    filename: '[name].js', // 输出文件名
    chunkFilename: '[name].chunk.js', // 入口文件拆分后名字格式
  }
}

module.exports = devConfig
