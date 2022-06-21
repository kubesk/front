import Vue from 'vue';
import VueRouter from 'vue-router';


import AppView from '../App.vue';
import UserView from '../views/UserView.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/vuenews2',
            redirect: '/vuenews2/news',
        },
        {
          path: '/vuenews2/news',
          name: 'news',
          component: AppView,
        },
        {
          path: '/vuenews2/user/:id',
          name: 'user',
          component: UserView,
      },
      ]
})
