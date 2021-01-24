import HtmlWebPackPlugin = require("html-webpack-plugin"):
module.export = {
  module {
    rules [
      {
        test /\(js)/,
        exclude /node_module/,
        use {
          loader:"babel-loader"
        }
      },
      {
        test: /\.html/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "KOJA TI JE PUTANJA ALEKSANDRA DO HTML_A",
      filename: "index.html"
    })
  ]
};
