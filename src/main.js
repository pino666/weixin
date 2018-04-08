import Vue from 'vue';
import WeVue from 'we-vue';
import 'we-vue/lib/style.css';
import App from './App.vue';
import VueRouter from 'vue-router';
import routeConfig from './router.config';
import axios from 'axios';

Vue.use(WeVue);
Vue.prototype.axios = axios;
Vue.use(VueRouter);


const router = new VueRouter ({
       routes : routeConfig
});


new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
