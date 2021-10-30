import Vue from 'vue';
import Router from 'vue-router';
import About from './views/about';
import PageNotFound from './views/page-not-found';

Vue.use(Router);
const parseProps = r => ({ id: parseInt(r.params.id) });

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: 'heroes',
    },
    {
      path: '/heroes',
      name: '/heroes',
      component: () =>
        import(/* webpackChunkName: "heroes" */ './views/heroes.vue'),
    },
    {
      path: '/heroes/:id',
      name: 'hero-detail',
      component: () =>
        import(/* webpackChunkName: "hero-detail" */ './views/hero-detail.vue'),
      props: parseProps,
    },
    {
      path: '/about',
      name: '/about',
      component: About,
    },
    {
      path: '',
      component: PageNotFound,
    },
  ],
});