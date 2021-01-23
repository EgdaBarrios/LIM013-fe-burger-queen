import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Waiter from '../views/Waiter.vue';
import WaiterTwo from '../views/WaiterTwo.vue';
import Kitchen from '../views/Kitchen.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/waiter',
    name: 'Waiter',
    component: Waiter,
  },
  {
    path: '/waiterTwo',
    name: 'WaiterTwo',
    component: WaiterTwo,
  },
  {
    path: '/kitchen',
    name: 'Kitchen',
    component: Kitchen,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
