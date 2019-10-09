const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin') // 引入
const HtmlWebpackPlugin = require('html-webpack-plugin') // 通过插件生成html模板
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const isDev = process.env.NODE_ENV === 'development'

const config = {
  entry: { // 入口文件
    main: './src/main.js' // 文件名为main.js
  },
  output: { // 出口文件
    filename: '[name].js', // 输出文件名
    path: path.resolve(__dirname, 'dist') // 输出文件路径 __dirname为webpack.config当前文件
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name]_[hash].[ext]', // 配置打包后的名字 ext为文件扩展名
            outputPath: 'images/', // 输出路径
            limit: 20480 // 图片大于2kb使用base64进行打包，减少http请求
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'index.html' }), // 指定html模板文件
    new VueLoaderPlugin()
  ]
}

if (isDev) {
  config.mode = 'development'
  config.devtool = 'cheap-module-eval-source-map'
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader',
      'postcss-loader',
      'sass-loader'
    ]
  })
  config.devServer = {
    contentBase: './dist', // 打开文件路径
    open: true, // 自动打开页面
    port: 8080 // 指定端口号
  }
} else {
  config.mode = 'production'
  config.devtool = 'cheap-module-source-map'
  config.output.filename = '[name].[chunkhash:8].js'
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      'postcss-loader',
      'sass-loader'
    ]
  })
  config.plugins.push(
    new CleanWebpackPlugin(), // 自动清空输出文件
    new MiniCssExtractPlugin({ // 打包css
      filename: '[name].[chunkhash:8].css', // 配置hash
      chunkFilename: '[id].[chunkhash:8].css'
    })
  )
}

module.exports = config
