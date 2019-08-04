import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { store } from './store/store';
import BootstrapVue from 'bootstrap-vue';
import './registerServiceWorker';
import './assets/scss/custom.scss';
import './assets/css/app.main.css';
import Toasted from 'vue-toasted';

const option = {
  theme: 'toasted-primary',
  position: 'top-right',
  duration : 2000,
  action : {
    text : 'Cancel',
    onClick : (e: any, toastObject: any) => {
      toastObject.goAway(0);
    },
 },
};

Vue.use(Toasted, option);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

let user = JSON.parse(localStorage.getItem("user") as string);
store.dispatch('auth/loginUser', user);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
