import Vue from 'vue';
import Router from 'vue-router';

// const Foo = resolve => require(['../views/hello.vue'], resolve);
// import hello from '../views/hello.vue';

import main from '../views/main.vue';
import about from '../views/about.vue';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { name: 'home', path: '/', component: main },
    { name: 'about', path: '/about', component: about },
  ],
});
