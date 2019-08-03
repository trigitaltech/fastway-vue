<template>
  <div>
    <b-nav-item-dropdown :right="right" :no-caret="noCaret" class="mr-3 profile" v-if="id!=null">
      <template slot="button-content">
        <slot name="header">
          &#10068;
        </slot>
      </template>
      <slot name="dropdown">
        <div :style="{ right: 'auto', height: '200px' }">
          <span class="text-center">dropdown</span>
        </div>
      </slot>
    </b-nav-item-dropdown>
    <b-nav-item-dropdown :right="right" :no-caret="noCaret" class="mr-3 profile" v-else>
       <template slot="button-content">
        <slot name="signin">
          &#10068;
        </slot>
      </template>
      <b-dropdown-item><router-link to="/login"><i class="fa fa-lock" /> Sign in</router-link></b-dropdown-item>
    </b-nav-item-dropdown>
  </div>
</template>
<script>
export default {
  name: 'HeaderDropdown',
  data() {
    return {
       id: null,
    };
  },
  props: {
    right: {
      type: Boolean,
      default: false,
    },
    noCaret: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    const user = this.$store.getters['auth/getUserID'];
    this.id = user;
  },
};
</script>
<style>
  .profile{
    margin-right: 28px !important;
    background-color: #fafbfd;
    padding: 17px;
    margin-top: -9px !important;
    border: 1px;
  }
  .app-header .dropdown-item {
    min-width: 170px;
  }
</style>
