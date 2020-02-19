import Vue from "vue";
import Router from "vue-router";
import Modal from "./views/Modal.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "modal",
      component: Modal
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/list",
      name: "list",
      component: () => import("./views/List.vue")
    },
    {
      path: "/drawer",
      name: "drawer",
      component: () => import("./views/Drawer.vue")
    },
    {
      path: '/cards',
      name: 'cards',
      component: () => import('./views/Cards.vue')
    },
    {
      path: '/simple',
      name: 'simple',
      component: () => import('./views/Simple.vue')
    },
  ]
});
