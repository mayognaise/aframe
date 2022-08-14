const HtmlWebpackPlugin = require("html-webpack-plugin");
const name = process.env.npm_package_name;

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: "./src/index.js",
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      templateParameters: {
        script: "main.js",
        title: name,
      },
    }),
  ],
};
