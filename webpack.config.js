import HtmlWebpackPlugin from "html-webpack-plugin"
import CopyWebpackPlugin from  "copy-webpack-plugin"

export default {
    mode: 'development',
    devServer: {
      static: './public',
      open: true,
      hot: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './public/index.html',
      }),
      new CopyWebpackPlugin({
        patterns: [
          { context: "public", from: "*.css" }
        ]
      })
    ]
  }