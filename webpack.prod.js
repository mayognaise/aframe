const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const name = process.env.npm_package_name;

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: `./packages/${name}/${name}.js`,
    path: path.resolve(__dirname, "."),
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      templateParameters: {
        script: `https://cdn.jsdelivr.net/gh/mayognaise/aframe/packages/${name}/${name}.js`,
        title: name,
      },
      filename: `./docs/${name}.html`,
      minify: false,
    }),
  ],
};
