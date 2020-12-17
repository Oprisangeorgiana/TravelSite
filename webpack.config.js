const htmlPlugins = require("html-webpack-plugin")
// const copyPlugin = require("copy-webpack-plugin")

module.exports = {entry: "./src/main.js",
                  plugins: [
                      new htmlPlugins({template:"./home.html"}),
                    //   new copyPlugin({patterns: [{
                    //       from: "travel", 
                    //       to: "travel"
                    //   }]})
                    
                    ],
                  devServer: {
                    historyApiFallback: true
                  },
                  devtool: "eval-source-map"
                }