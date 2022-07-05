import Vue from 'vue';
import VueRouter from 'vue-router';

import CartView from '../views/SHOP001.vue';
import DetailView from '../views/SHOP002.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/cart',
        },
        {
          path: '/cart',
          name: 'cart',
          component: CartView,
        },
        {
          path: '/item/:id',
          name: 'item',
          component: DetailView,
        },
      ]
})