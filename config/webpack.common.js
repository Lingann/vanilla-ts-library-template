const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const WebpackBar = require("webpackbar");
const webpack = require("webpack");
const paths = require("./paths");

module.exports = {
  // Where webpack looks to start building the bundle
  entry: [paths.src + "/index.ts"],
  target: ["web", "es3"],
  // Customize the webpack build process
  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    // new CleanWebpackPlugin({
    //   root: paths.root, //根目录
    //   verbose: true, //开启在控制台输出信息
    //   dry: false,
    // }),
    // Generates an HTML file from a template
    // Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
    // new HtmlWebpackPlugin({
    //   title: 'webpack Boilerplate',
    //   favicon: paths.public + '/images/favicon.png',
    //   // templateContent: paths.src + '/template.html', // template file
    //   template: paths.public + '/template.html', // template file
    //   filename: 'index.html', // output file
    //   scriptLoading: 'blocking'
    // }),
    new WebpackBar(),
    // 检查ts语法
    new ForkTsCheckerWebpackPlugin({
      async: process.env.production !== "production",
      typescript: {
        memoryLimit: 4096,
        configFile: paths.root + "/tsconfig.json",
      },
    }),
  ],

  // Determine how modules within the project are treated
  module: {
    rules: [
      // Images: Copy image files to build folder
      { test: /\.(?:vm|ftl)$/i, type: "asset/source" },

      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: "asset/resource" },

      // Fonts and SVGs: Inline files
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: "asset/inline" },
    ],
  },

  resolve: {
    modules: [paths.src, "node_modules"],
    extensions: [".js", ".ts", ".tsx", ".jsx", ".json"],
    alias: {
      "@": paths.src,
      assets: paths.public,
    },
  },
};
