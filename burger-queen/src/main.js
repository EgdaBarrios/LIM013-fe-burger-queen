import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
// import firebase from './firebase';

Vue.config.productionTip = false;

new Vue({
  router,
  // firebase,
  render: (h) => h(App),
}).$mount('#app');
