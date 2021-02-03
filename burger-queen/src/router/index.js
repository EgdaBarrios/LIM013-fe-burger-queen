import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import Dashboard from '../components/Dashboard.vue';
import Home from '../views/Home.vue';
import Waiter from '../views/Waiter.vue';
import WaiterTwo from '../views/WaiterTwo.vue';
import Kitchen from '../views/Kitchen.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
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
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
