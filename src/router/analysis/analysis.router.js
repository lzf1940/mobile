export default {
  path: "/analysis",
  name: "analysis",
  component: () =>
    import(/* webpackChunkName: "analysis" */ "@/views/analysis.vue"),
};
