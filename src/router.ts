import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/views/Authentication/Login.vue';
import Logout from '@/views/Authentication/Logout.vue';
import RecoverPassword from '@/views/Authentication/RecoverPassword.vue';
import DefaultContainer from '@/containers/DefaultContainer.vue';
import Home from '@/views/Home.vue';
import ProductList from '@/views/Product/ProductList.vue';
import ProductDetails from '@/views/Product/ProductDetails.vue';
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
          component: Home
        },
        {
          path: 'product',
          component: {
            render(c) { return c('router-view'); },
          },
          meta: { label: 'Product' },
          children: [
            {
              path: '',
              component: ProductList,
            },
            {
              path: 'details',
              name: 'productDetail',
              component: ProductDetails,
              meta: { label : 'Product Detail' },
            },
          ],
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
    },
    {
      path: '/recoverpw',
      name: 'recoverpw',
      component: RecoverPassword,
    },
  ],
});
