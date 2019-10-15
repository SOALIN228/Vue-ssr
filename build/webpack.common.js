const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin') // 引入
const HtmlWebpackPlugin = require('html-webpack-plugin') // 通过插件生成html模板
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const merge = require('webpack-merge')
const devConfig = require('./webpack.dev')
const prodConfig = require('./webpack.prod')

const isDev = process.env.NODE_ENV === 'development'

const commonConfig = {
  entry: { // 入口文件
    main: './src/main.js' // 文件名为main.js
  },
  output: { // 出口文件
    path: path.resolve(__dirname, '../dist') // 输出文件路径 __dirname为webpack.config当前文件
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(vue|js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/, // 对node_modules中的JS进行忽略
        use: [{
          loader: 'babel-loader'
        }]
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
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/, // 字体格式
        use: [{
          loader: 'file-loader'
        }]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(), // 自动清空输出文件
    new HtmlWebpackPlugin({ template: 'index.html' }), // 指定html模板文件
    new VueLoaderPlugin()
  ],
  optimization: {
    splitChunks: {
      chunks: 'all' // 默认为 async
    },
    runtimeChunk: true
  }
}

module.exports = () => {
  if (isDev) {
    return merge(commonConfig, devConfig)
  } else {
    return merge(commonConfig, prodConfig)
  }
}
