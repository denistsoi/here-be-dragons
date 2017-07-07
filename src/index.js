import Vue from 'vue';
import App from './App.vue';

import store from './store';

new Vue({
  store,
  ...App
}).$mount('#app');

// import runtime from 'serviceworker-webpack-plugin/lib/runtime';

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('sw.js');
// }      