<template>
  <div class="app">
    <AppHeader fixed>
      <SidebarToggler class="d-lg-none" display="md" mobile />
      <b-link class="navbar-brand eb-navbar-brand" to="#">
        <span class="navbar-brand-full"><img src="@/assets/images/fastway.png" class="w-50 "/></span>
        <span class="navbar-brand-minimized">N</span>
      </b-link>
      <SidebarToggler class="d-md-down-none" display="lg" />
      <b-navbar-nav class="d-md-down-none">
        <b-nav-item class="px-3">
          <div class="app-search">
            <form>
              <div class="input-group">
                <input type="text" v-model="searchText" class="form-control" placeholder="Search..." />
                <span class="mdi mdi-magnify"></span>
                <div class="input-group-append">
                  <button class="btn btn-primary" type="submit">Search</button>
                </div>
              </div>
            </form>
          </div>
        </b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <DefaultHeaderDropdownAccnt />
      </b-navbar-nav>
    </AppHeader>
    <div class="app-body">
      <AppSidebar fixed>
        <SidebarHeader />
        <SidebarForm />
        <SidebarNav :navItems="nav"></SidebarNav>
        <SidebarFooter />
        <SidebarMinimizer />
      </AppSidebar>
      <main class="main">
        <Breadcrumb :list="list" />
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
      <AppAside fixed>
        <!--aside-->
        <DefaultAside />
      </AppAside>
    </div>
    <TheFooter>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6">
            2018 - 2019 ©
            <a href>Trigital</a> - Nipige.com
          </div>
          <div class="col-md-6">
            <div class="text-md-right footer-links d-none d-md-block">
              <a href="#" class="mr-2">About</a>
              <a href="#" class="mr-2">Support</a>
              <a href="#" class="mr-2">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </TheFooter>
  </div>
</template>

<script>
import nav from '@/_nav';
import {
  Header as AppHeader,
  SidebarToggler,
  Sidebar as AppSidebar,
  SidebarFooter,
  SidebarForm,
  SidebarHeader,
  SidebarMinimizer,
  SidebarNav,
  Aside as AppAside,
  AsideToggler,
  Footer as TheFooter,
  Breadcrumb,
} from '@/components';
import DefaultAside from './DefaultAside';
import DefaultHeaderDropdownAccnt from './DefaultHeaderDropdownAccnt';

export default {
  name: 'DefaultContainer',
  components: {
    AsideToggler,
    AppHeader,
    AppSidebar,
    AppAside,
    TheFooter,
    Breadcrumb,
    DefaultAside,
    DefaultHeaderDropdownAccnt,
    SidebarForm,
    SidebarFooter,
    SidebarToggler,
    SidebarHeader,
    SidebarNav,
    SidebarMinimizer,
  },
  data() {
    return {
      nav: nav.items,
      search : ''
    };
  },
  computed: {
    searchText:{
      get : function(){
        return this.search;
      },
      set : function (newVal){
        this.$store.dispatch('product/search', newVal);
        this.search = newVal;
      }
    },
    name() {
      return this.$route.name;
    },
    list() {
      return this.$route.matched.filter(
        (route) => route.name || route.meta.label,
      );
    },
  },
};
</script>
<style>
.eb-navbar {
  background: linear-gradient(135deg, #8b76de 0, #8178e7 60%);
  width: 200px;
  margin-left: -17px;
  height: 71px;
  margin-top: -15px;
}

@media (min-width: 992px) {
  .brand-minimized .app-header .navbar-brand {
    width: 50px !important;
    background-color: transparent;
    transition: 0.2s;
    transition-timing-function: linear;
  }
}
@media screen and (max-width: 992px) {
  .eb-navbar-brand {
    display: none !important;
  }
}
@media only screen and (max-width: 992px) {
.app-search {
   display: block !important;
}
}

@media (max-width: 575.98px){

.sidebar-show .main::before, .aside-menu-show .main::before {
background: none !important
}
}
@media (min-width: 575.98px){
.header-fixed .app-header{
position:fixed;
}
}
@media (min-width: 200.98px){
.header-fixed .app-header{
position:fixed;
}
}


</style>
