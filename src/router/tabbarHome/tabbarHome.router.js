export default {
  path: "/", //  /开头的嵌套路径会被当作根路径
  //name: "home",    //当某个路由有子级路由时，父级路由需要一个默认的路由，因此父级路由不能定义name属性
  meta: {
    keepAlive: true,
  },
  component: () => import("@/layout/"),
  children: [
    {
      path: "",
      name: "tabbarHome",
      component: () => import("@/views/tabbarHome"),
    },
    {
      path: "todo",
      name: "todo",
      component: () =>
        import(/* webpackChunkName: "todo" */ "@/views/todo.vue"),
    },
    {
      path: "mine",
      name: "mine",
      component: () =>
        import(/* webpackChunkName: "mine" */ "@/views/mine.vue"),
    },
  ],
};
