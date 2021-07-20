// 自动按需引入 Vant 组件
import {
  Icon,
  Toast,
  Image,
  Button,
  Loading,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Empty,
  Lazyload,
} from "vant";

let vantUIs = [
  Icon,
  Toast,
  Image,
  Button,
  Loading,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Empty,
  Lazyload,
];

export default {
  install(Vue) {
    vantUIs.forEach((vantUI) => {
      Vue.use(vantUI);
      //Vue.component(vantUI.name, vantUI)  //也可以使用
    });
  },
};
