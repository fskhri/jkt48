import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Schedule from '../views/Schedule.vue'; // Corrected import path
import Member from '../views/Member.vue';
import Shop from '../views/Shop.vue';
import News from '../views/News.vue';
import About from '../views/About.vue';
import Schedule1 from '../views/Schedule/Schedule1.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'JKT48 Fansite' },
  },
  {
    path: '/schedule', // Corrected path
    name: 'Schedule',
    component: Schedule,
    meta: { title: 'Schdule - JKT48 Fansite' }, // Example: Adjust the title as needed
  },
  {
    path: '/member',
    name: '/Member',
    component: Member,
    meta: { title: 'Member - JKT48 Fansite'}
  },
  {
    path: '/news',
    name: '/News',
    component: News,
    meta: { title: 'News - JKT48 Fansite'}
  },
  {
    path: '/shop',
    name: '/Shop',
    component: Shop,
    meta: { title: 'Shop - JKT48 Fansite'}
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: { title: 'About - JKT48 Fansite'}
  },
  {
    path: '/schedule1',
    name: 'Schedule',
    component: Schedule1,
    meta: { title: 'Schedule - JKT48 Fansite'}
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
