<template>
  <header
    :class="classList">
    <slot>Header</slot>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    fixed: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classList() {
      return [
        'app-header',
        'navbar',
      ];
    },
  },
  mounted() {
    this.isFixed(this.fixed);
  },
  methods: {
    isFixed(fixed) {
      fixed ? document.body.classList.add('header-fixed') : document.body.classList.remove('header-fixed');
      return fixed;
    },
  },
};
</script>
<style scoped>

.app-header {
  height: 70px;
  border: 0px;
  box-shadow: 0 0 35px 0 rgba(154,161,171,.15);
}

</style>