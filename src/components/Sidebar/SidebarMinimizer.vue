<template>
  <button variant="facebook icon" class="sidebar-minimizer" type="button" @click="onClick()"></button>
</template>
<script>
import { togglePs } from '../../mixins/togglePs';

export default {
  name: 'sidebar-minimizer',
  mixins: [ togglePs ],
  mounted() {
    const isMinimized = document.body.classList.contains('sidebar-minimized');
    this.togglePs(!isMinimized);
  },
  methods: {
    onClick() {
      this.sidebarMinimize();
      this.brandMinimize();
      // tslint:disable:no-console
      console.log('this is called');
    },
    sidebarMinimize() {
      const isMinimized = document.body.classList.toggle('sidebar-minimized');
      this.$emit('cui-sidebar-minimize', isMinimized);
      this.togglePs(!isMinimized);
    },
    brandMinimize() {
      document.body.classList.toggle('brand-minimized');
    },
  },
};
</script>
<style scoped>
.sidebar-minimizer{
  background: #727cf5 !important;
}
.fa-user{
  color:black !important;
}
</style>
<style>
@media (min-width: 992px){

.sidebar-minimized .sidebar .nav-item:hover > .nav-link {
    background:white !important;
    color: black !important;
    
}
}
@media (min-width: 992px)
{
.sidebar-minimized .sidebar .nav-item:hover > .nav-link .nav-icon {
    color: #000 !important;
}
}

</style>



