import Vue from 'vue';
import { firestorePlugin } from 'vuefire';

import App from './App.vue';

import './registerServiceWorker';
import router from './router';

Vue.use(firestorePlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
/*
import Vue from 'vue';
import firebase from 'firebase/app';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

const configOptions = {
  apiKey: 'AIzaSyBNs3NuYub0KFoxk-d_xs41kBq9ULvfN6U',
  authDomain: 'burger-queen-apivue.firebaseapp.com',
  databaseURL: 'https://burger-queen-apivue-default-rtdb.firebaseio.com',
  projectId: 'burger-queen-apivue',
  storageBucket: 'burger-queen-apivue.appspot.com',
  messagingSenderId: '340515172601',
  appId: '1:340515172601:web:0d2be7f19c517454c9f228',
  measurementId: 'G-4M2E33VGGT',
};
firebase.initializeApp(configOptions);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
*/
