// 注册高频全局组件
export default {
  install(Vue) {
    let allComp = require.context("./", false, /\.vue$/);
    allComp.keys().forEach((item) => {
      Vue.component(
        item.replace(/\.\//, "").replace(/\.vue$/, ""),
        allComp(item).default
      );
    });
  },
};
