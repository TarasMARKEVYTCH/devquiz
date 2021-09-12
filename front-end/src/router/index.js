import { createRouter, createWebHashHistory} from "vue-router";

const routes = [
  {
    path: '/',
    name: "Quiz",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Quiz.vue"),
  },
];

const router = createRouter({
  // mode: 'history',
  history: createWebHashHistory(),
  routes
});


export default router;
