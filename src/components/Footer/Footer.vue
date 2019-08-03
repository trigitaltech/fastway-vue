<template>
  <footer :class="classList" class="pt-2 pb-2">
    <slot>Footer</slot>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  props: {
    fixed: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classList() {
      return [
        'app-footer',
      ];
    },
  },
  mounted() {
    this.isFixed();
  },
  methods: {
    isFixed() {
      this.fixed ? document.body.classList.add('footer-fixed') : document.body.classList.remove('footer-fixed');
    },
  },
};
</script>
<style scoped>
.app-footer {
  background: #fafbfe;
  border-top: 1px solid #c8ced3;
  color: #98a6ad;
}
</style>

