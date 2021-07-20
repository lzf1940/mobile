module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  // 配置vant组件按需加载
  plugins: [
    [
      "import",
      { libraryName: "vant", libraryDirectory: "es", style: true },
      "vant",
    ],
  ],
};
