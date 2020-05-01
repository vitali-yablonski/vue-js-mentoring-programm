import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';
import common from './plugins/common.js';
import store from './store/movies.js'

Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.use(common);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
