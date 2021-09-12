import { createRouter, createWebHistory} from "vue-router";

const routes = [
  {
    path: '/:id',
    name: "Quiz",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Quiz.vue"),
  },
];

const router = createRouter({
  // mode: 'history',
  history: createWebHistory(),
  routes
});


export default router;
