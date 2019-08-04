import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/views/Authentication/Login.vue';
import Logout from '@/views/Authentication/Logout.vue';
import RecoverPassword from '@/views/Authentication/RecoverPassword.vue';
import DefaultContainer from '@/containers/DefaultContainer.vue';
import Home from '@/views/Home.vue';
import Customer from '@/views/MakeTransacation.vue';
import AddPlan from '@/views/AddPlan.vue';
import { store } from './store/store';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: DefaultContainer,
      redirect: 'home',
      beforeEnter: (to, from, next) => {
        try{
          let user = JSON.parse(localStorage.getItem("user") as string);
          if(Object.keys(user).length > 0){
            next();
          }
          else{
            next('Login');
          }
        }catch(e){
          next('Login');
        }
      },
      meta: { label: 'Dashboard' },
      children: [
        {
          path: 'home',
          component: Home,
          meta: {
            requiresAuth: true,
          }
        },
        {
          path: 'customer',
          component: {
            render(c) { return c('router-view'); },
          },
          meta: { 
            label: 'Customer',
            requiresAuth: true,
          },
          children:[
            {
              path: '',
              component: Customer,
            },
            {
              path: 'add-plan',
              name: 'addPlan',
              component: AddPlan,
              meta: {
                label: 'Add New Plan',
                requiresAuth: true,
              }
            }
          ]
        },
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
      meta: {
        requiresVisitor: true
      },
    },
    {
      path: '/recoverpw',
      name: 'recoverpw',
      component: RecoverPassword,
      meta: {
        requiresVisitor: true
      },
    },
  ],
});
