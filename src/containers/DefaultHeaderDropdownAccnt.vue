<template>
  <AppHeaderDropdown right no-caret>
   <template slot="header">
      <img
        src="img/avatars/6.jpg"
        class="img-avatar"
        alt="support@fastway.com" /> {{ USERID }}
    </template>
    <template slot="signin">
      <img
        src="img/avatars/6.jpg"
        class="img-avatar"
        alt="support@nipige.com" />Sign in
    </template>
    <template slot="dropdown">
        <b-dropdown-item><i class="fa fa-bell-o" /> <router-link to="/home"> Home </router-link></b-dropdown-item>
        <b-dropdown-item><i class="fa fa-envelope-o" /> <router-link to="/customer"> Make Transaction</router-link></b-dropdown-item>
        <b-dropdown-item><i class="fa fa-user" /> Search Tarnsaction</b-dropdown-item>
        <b-dropdown-divider />
        <b-dropdown-item><i class="fa fa-shield" /> Lock Account</b-dropdown-item>
        <b-dropdown-item @click="logout"><i class="fa fa-lock" /> Logout</b-dropdown-item>
     </template>
  </AppHeaderDropdown>
</template>

<script>
import { HeaderDropdown as AppHeaderDropdown } from '@/components';
export default {
  name: 'DefaultHeaderDropdownAccnt',
  components: {
    AppHeaderDropdown,
  },
  methods: {
    logout() {
      window.localStorage.setItem('user', JSON.stringify({}));
      this.$store.dispatch('auth/loginUser', {
        USERID: '',
        DEVICEIMEI: '',
        PASSWORD: '',
      });
      this.$router.push({name: 'login'});
      this.$toasted.info('you have successfully logged out');
    },
  },
  computed:{
    USERID(){
      return this.$store.getters['auth/getUserID'];
    }
  }
};
</script>
