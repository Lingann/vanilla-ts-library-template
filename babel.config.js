module.exports = {
  presets: [
    [
      // 预设环境
      "@babel/preset-env",
      {
        targets: {
          ie: "8", // IE 8 and below
          edge: "17", // Edge 17 and below
          firefox: "60", // Firefox 60 and below
          chrome: "67", // Chrome 67 and below
          safari: "11.1", // Safari 11.1 and below
        },
        useBuiltIns: "usage",
        corejs: "3.6.5",
      },
    ],
    "@babel/preset-typescript", // 预设 TypeScript
  ],
};
