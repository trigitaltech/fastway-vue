import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/views/Authentication/Login.vue';
import Logout from '@/views/Authentication/Logout.vue';
import RecoverPassword from '@/views/Authentication/RecoverPassword.vue';
import DefaultContainer from '@/containers/DefaultContainer.vue';
import Home from '@/views/Home.vue';
import Customer from '@/views/MakeTransacation.vue';
import AddPlan from '@/views/AddPlan.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: DefaultContainer,
      meta: { label: 'Dashboard' },
      children: [
        {
          path: '',
          component: Home,
        },
        {
          path: 'customer',
          meta: { label: 'customer '},
          component: Customer,
        },
        {
          path: '/addPlan',
          name: 'addPlan',
          component: AddPlan,
        }
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout,
    },
    {
      path: '/recoverpw',
      name: 'recoverpw',
      component: RecoverPassword,
    },
  ],
});
