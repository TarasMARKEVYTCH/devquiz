import { createRouter, createWebHistory} from "vue-router";

const routes = [
  {
    path: '/:id',
    name: "Quiz",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Quiz.vue"),
  },
  {
    path: '/',
    name: 'Index',
    component: () =>
    import('../views/Index.vue')
  },
  {
    path: '/RecupPass',
    name: 'Recup',
    component: () =>
    import('../views/RecupPass.vue')
  },
  {
    path: '/SignUp',
    name: 'Signup',
    component: () =>
    import('../views/SignUp.vue')
  },
  {
    path: '/Categories',
    name: 'Categories',
    component: () =>
    import('../views/Categories.vue')
  },
  {
    path: '/CategorieItem',
    name: 'CategorieItem',
    component: () =>
    import('../views/CategorieItem.vue')
  }
];

const router = createRouter({
  // mode: 'history',
  history: createWebHistory(),
  routes
});


export default router;
