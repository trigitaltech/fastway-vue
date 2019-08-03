<template>
  <router-link tag="li" class="nav-item nav-dropdown" :to="url" disabled>
    <div class="nav-link nav-dropdown-toggle" @click="handleClick"><i :class="classIcon"></i> {{name}}</div>
    <ul class="nav-dropdown-items">
      <slot></slot>
    </ul>
  </router-link>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
    url: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
  },
  computed: {
    classIcon() {
      return [
        'nav-icon',
        this.icon,
      ];
    },
  },
  methods: {
    handleClick(e) {
      e.preventDefault();
      e.target.parentElement.classList.toggle('open');
    },
  },
};
</script>

<style scoped lang="css">
  .nav-link {
    cursor:pointer;
  }
  .sidebar .nav-link{
    color: #cedce4;
    font-size: 15px !important;
  }
  
  .sidebar .nav-link:hover{
    color: #fff;
    text-decoration: none;
    background: none;
  }

  .sidebar .nav-link .nav-icon {
    color: #cedce4;
  }

  .sidebar .nav-link .nav-icon:hover {
    color: #fff;
  }

  .sidebar-minimized .sidebar{
    background: white !important;
  }

  @media (min-width: 992px){
    .sidebar-minimized .sidebar .nav-link:hover {
      color:black;
      background: white !important;
    }
  }
</style>
