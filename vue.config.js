const packName = process.env.VUE_APP_PACK_NAME;
const targetUrl = process.env.VUE_APP_API_URL;

const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const vConsolePlugin = require("vconsole-webpack-plugin");

const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

let timeStamp = new Date().getTime();

module.exports = {
  outputDir: packName,
  assetsDir: "resource",
  publicPath: process.env.NODE_ENV === "production" ? "" : "/",
  productionSourceMap: false,

  // 开发环境服务器未去掉 方便本地开发调试
  devServer: {
    // port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true,
    },
    proxy: {
      "": {
        target: targetUrl,
        changeOrigin: true,
      },
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias
      // .set('@',resolve('./src'))
      .set("api", resolve("./src/api"))
      .set("views", resolve("./src/views"))
      .set("utils", resolve("./src/utils"))
      .set("assets", resolve("./src/assets"))
      .set("components", resolve("./src/components"));

    if (process.env.VUE_APP_ANALYSIS == "true") {
      config
        .plugin("webpack-bundle-analyzer")
        .use(BundleAnalyzerPlugin, [{ openAnalyzer: true }]);
    }

    if (
      process.env.VUE_APP_CONSOLE == "true" &&
      process.env.NODE_ENV !== "production"
    ) {
      config
        .plugin("vconsole-webpack-plugin")
        .use(vConsolePlugin, [{ filter: [], enable: true }]);
    }

    // 设置项目title方便开发 多个项目同时开发不好区分 每个新的项目最好重新设置下
    config.plugin("html").tap((args) => {
      args[0].title = process.env.VUE_APP_TITLE;
      return args;
    });
  },
  configureWebpack: {
    output: {
      filename: `resource/js/js[name].${timeStamp}.js`,
      chunkFilename: `resource/js/js[name].${timeStamp}.js`,
    },
    externals: {
      echarts: "echarts",
    },
    performance: {
      hints: "warning",
      maxEntrypointSize: 1024000,
      maxAssetSize: 1024000,
      assetFilter: function (assetFilename) {
        return assetFilename.endsWith(".js");
      },
    },
    // plugins: [],
  },
  css: {
    extract: {
      filename: `resource/css/[name].${timeStamp}.css`,
      chunkFilename: `resource/css/[name].${timeStamp}.css`,
    },
  },
};
