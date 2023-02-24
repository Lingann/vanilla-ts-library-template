const path = require("path");

module.exports = {
  root: path.resolve(__dirname, "../"),
  // Source files
  src: path.resolve(__dirname, "../src"),

  // Production build files
  build: path.resolve(__dirname, "../dist"),

  esm: path.resolve(__dirname, "../es"),

  dist: path.resolve(__dirname, "../dist"),

  lib: path.resolve(__dirname, "../lib"),

  buildImages: path.resolve(__dirname, "../dist"),

  buildJS: path.resolve(__dirname, "../dist"),

  // Static files that get copied to build folder
  public: path.resolve(__dirname, "../public"),

  // 静态输出目录
  js: path.resolve(__dirname, "../public/js"),

  images: path.resolve(__dirname, "../public/images"),
};
