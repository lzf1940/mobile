import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

let routerList = [];
function importRoutes(res) {
  res.keys().forEach((path) => {
    routerList.push(res(path).default);
  });
}
importRoutes(require.context("./", true, /\.router\.js/));

const routes = [
  {
    path: "/",
    name: "home",
    meta: {
      keepAlive: true,
      // needLogin: true
    },
    component: () => import("@/views/home"),
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/about.vue"),
  },
  {
    path: "/401",
    name: "401",
    component: () =>
      import(/* webpackChunkName: "401" */ "../views/errorPage/401.vue"),
  },
  {
    path: "*",
    name: "404",
    component: () =>
      import(/* webpackChunkName: "404" */ "../views/errorPage/404.vue"),
  },
  {
    path: "/500",
    name: "500",
    component: () =>
      import(/* webpackChunkName: "500" */ "@/views/errorPage/500.vue"),
  },
  ...routerList,
];

const router = new VueRouter({
  routes,
});

/* 路由发生变化修改页面title */
// router.beforeEach((to, from, next) => {
//   if (to.meta.title) {
//       document.title = to.meta.title;
//   }
//   next();
// })

export default router;
