const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ghpages = require("gh-pages");

ghpages.publish("dist", {
  branch: "main",
  repo: "GDaniel96/expenses-chart-component",
});

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.json$/,
        type: "json",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Expenses Chart Component",
      template: path.resolve(__dirname, "src", "assets", "index.html"),
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
  },
};
