import Vue from "vue";
import Vuex from "vuex";
import { createLogger } from "vuex";

Vue.use(Vuex);

const moduleFiles = require.context("./modules", true, /\.js$/);
const modules = moduleFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/\.\//, "").replace(/\.js$/, "");
  modules[moduleName] = moduleFiles(modulePath).default;
  return modules;
}, {});

const openLogger = process.env.NODE_ENV !== "production";

const store = new Vuex.Store({
  modules,
  strict: true,
  plugins: openLogger ? [createLogger()] : [],
});

export default store;
