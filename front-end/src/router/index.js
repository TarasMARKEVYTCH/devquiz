import { createRouter, createWebHistory} from "vue-router";

const routes = [
  {
    path: '/Quiz',
    name: "Quiz",
    meta: {layout: 'main'},
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Quiz.vue"),
  },
  {
    path: '/',
    name: 'Index',
    meta: {layout: 'main'},
    component: () =>
    import('../views/Index.vue')
  },
  {
    path: '/RecupPass',
    name: 'Recup',
    meta: {layout: 'empty'},
    component: () =>
    import('../views/RecupPass.vue')
  },
  {
    path: '/SignUp',
    name: 'Signup',
    meta: {layout: 'empty'},
    component: () =>
    import('../views/SignUp.vue')
  },
  {
    path: '/Categories',
    name: 'Categories',
    meta: {layout: 'main'},
    component: () =>
    import('../views/Categories.vue')
  },
  {
    path: '/CategorieItem',
    name: 'CategorieItem',
    meta: {layout: 'main'},
    component: () =>
    import('../views/CategorieItem.vue')
  },
  {
    path: '/Contact',
    name: 'Contact',
    meta: {layout: 'main'},
    component: () =>
    import('../views/Contact.vue')
  },
  {
    path: '/Discover',
    name: 'Discover',
    meta: {layout: 'main'},
    component: () =>
    import('../views/Discover.vue')
  },
  {
    path: '/Account',
    name: 'Account',
    meta: {layout: 'main'},
    component: () =>
    import('../views/Account.vue')
  },
  {
    path: '/Forum',
    name: 'Forum',
    meta: {layout: 'main'},
    component: () =>
    import('../views/Forum.vue')
  },
  

];

const router = createRouter({
  history: createWebHistory(),
  routes
});


export default router;
