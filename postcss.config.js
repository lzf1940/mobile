// 375px即100%宽度 不想转换成rem用PX
module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: [
        "Android 4.1",
        "iOS 7.1",
        "Chrome > 31",
        "ff > 31",
        "ie >= 8",
      ],
    },
    "postcss-pxtorem": {
      rootValue: 37.5,
      propList: ["*"],
      minPixelValue: 12,
    },
  },
};
