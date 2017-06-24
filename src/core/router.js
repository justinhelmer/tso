/**
 * Application router, used by both the client and server.
 *
 * Serves as the basis for code splitting and componentization. The run-time imports will cause bundle split
 * points for webpack, and as a result, load chunks on-demand (when navigating between routes).
 *
 * @see https://ssr.vuejs.org/en/routing.html
 * @see https://webpack.js.org/guides/code-splitting-async/
 * @see https://github.com/babel/babel/tree/master/packages/babel-plugin-syntax-dynamic-import
 */

import Vue from 'vue'
import Router from 'vue-router';

Vue.use(Router);

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        name: 'home',
        path: '/',
        component: () => import('../components/Home.vue')
      },
      {
        name: 'heroes',
        path: '/heroes',
        component: () => import('../components/heroes/Heroes.vue')
      },
      {
        name: 'hero',
        path: '/hero/:id',
        component: () => import('../components/heroes/Hero.vue')
      },
      {
        name: 'cards',
        path: '/cards',
        component: () => import('../components/Cards.vue')
      }
    ]
  });
}
