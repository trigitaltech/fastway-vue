<template>
  <aside class="aside-menu">
    <slot>Aside</slot>
  </aside>
</template>

<script>
export default {
  name: 'AppAside',
  props: {
    fixed: {
      type: Boolean,
      default: false,
    },
    display: {
      type: String,
      default: '',
    },
    offCanvas: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    this.isFixed(this.fixed);
    this.isOffCanvas(this.offCanvas);
  },
  methods: {
    isFixed(fixed) {
      // tslint:disable-next-line:max-line-length
      fixed ? document.body.classList.add('aside-menu-fixed') : document.body.classList.remove('aside-menu-fixed');
      return fixed;
    },
    isOffCanvas(offCanvas) {
      // tslint:disable-next-line:max-line-length
      offCanvas ? document.body.classList.add('aside-menu-off-canvas') : document.body.classList.remove('aside-menu-off-canvas');
    },
  },
};
</script>
