import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
export default new VueRouter({
  base: "/",
  mode: "history",
  routes: [
    {
      path: "/",
      name: "index",
      meta: { title: 'index' },
      component: () => import("@/views/index"),
    },
    {
      path: "/ds",
      name: "ds",
      component: () =>
        import(/* webpackChunkName: "group-test" */ "@/views/ds"),
      meta: {
        title: 'ds',
      },
      children: [
        {
          path: "dss",
          name: 'dss',
          meta: {
            title: 'dss'
          },
          component: () =>
            import(/* webpackChunkName: "group-test" */ "@/views/dss"),
        },
      ],
    },
    {
      path: "/404",
      name: "404",
      meta: "404",
      component: () => import("@/assets/404/404.vue"),
    },
    {
      path: "*",
      redirect: { name: "404" },
    },
  ],
})