const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { merge } = require("webpack-merge");

const paths = require("./paths");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "production",
  devtool: false,
  output: {
    path: paths.lib,
    filename: "[name].js",
    libraryTarget: "commonjs",
  },
  module: {
    rules: [
      {
        // 匹配ts和tsx文件
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
          },
          {
            loader: "babel-loader",
            options: { babelrc: true },
          },
        ],
      },
      {
        test: /\.(m|c)?jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: { babelrc: true },
          },
        ],
      },
      // JavaScript: Use Babel to transpile JavaScript files
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              babelrc: true,
            },
          },
        ],
      },
      {
        test: /\.(sass|scss|css)$/,
        use: [
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              sourceMap: false,
            },
          },
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      root: paths.root, //根目录
      verbose: true, //开启在控制台输出信息
      dry: false,
    }),
  ],

  optimization: {
    minimize: false,
    minimizer: [],
  },
  // performance: {
  //   hints: false,
  //   maxEntrypointSize: 512000,
  //   maxAssetSize: 512000,
  // },
});
