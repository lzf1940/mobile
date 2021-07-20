import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vant from "./utils/vant";
import "amfe-flexible/index";
import "./assets/css/reset.less";
import "./assets/css/common.less";
// axios vue-axios
import axios from "axios";
import VueAxios from "vue-axios";
import regComp from "components/high/regComp";

Vue.use(vant);
Vue.use(regComp);
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
