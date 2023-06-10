const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//const Dotenv = require("dotenv-webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode: "production",
  mode: "development",
  resolve: {
    extensions: [".js", ".jsx"],
    // alias: {
    //     '@components': path.resolve(__dirname, 'src/components/'),
    //     '@containers': path.resolve(__dirname, 'src/containers/'),
    //     '@pages': path.resolve(__dirname, 'src/pages/'),
    //     '@routes': path.resolve(__dirname, 'src/routes/'),
    //     '@styles': path.resolve(__dirname, 'src/styles/'),
    //     '@icons': path.resolve(__dirname, 'src/assets/icons/'),
    //     '@logos': path.resolve(__dirname, 'src/assets/logos/'),
    //     '@images': path.resolve(__dirname, 'src/assets/images/'),
    // },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        type: "asset",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
      favicon: "./src/assets/images/kaisa.ico",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    //new Dotenv(),
  ],
  devServer: {
    historyApiFallback: true,
  },
};
