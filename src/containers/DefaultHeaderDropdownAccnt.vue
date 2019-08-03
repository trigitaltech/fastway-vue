<template>
  <AppHeaderDropdown right no-caret>
   <template slot="header">
      <img
        src="img/avatars/6.jpg"
        class="img-avatar"
        alt="support@nipige.com" />Raju Khunt
    </template>
    <template slot="signin">
      <img
        src="img/avatars/6.jpg"
        class="img-avatar"
        alt="support@nipige.com" />Sign in
    </template>
    <template slot="dropdown">
        <b-dropdown-item><i class="fa fa-bell-o" /> Updates </b-dropdown-item>
        <b-dropdown-item><i class="fa fa-envelope-o" /> Messages </b-dropdown-item>
        <b-dropdown-item><i class="fa fa-user" /> Profile</b-dropdown-item>
        <b-dropdown-item><i class="fa fa-wrench" /> Settings </b-dropdown-item>
        <b-dropdown-item><i class="fa fa-usd" /> Payments </b-dropdown-item>
        <b-dropdown-item><i class="fa fa-file" /> Projects </b-dropdown-item>
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
  data: () => {
    return {
      _id: null,
    };
  },
  methods: {
    logout() {
      window.localStorage.setItem('setLoginUser', JSON.stringify({}));
      this.$store.dispatch('auth/loginUser', { _id: null });
      this.$router.push({name: 'login'});
      this.$toasted.info('you have successfully logged out');
    },
  },
  mounted() {
   const user = this.$store.getters['auth/getUserID'];
  },
};
</script>
