<template>
  <div class="app">
    <AppHeader fixed>
      <SidebarToggler class="d-lg-none" display="md" mobile/>
      <b-link class="navbar-brand" to="/">
        <span class="navbar-brand-full">
          <img src="@/assets/images/trigital.jpg" class="w-50">
        </span>
      </b-link>
      <b-navbar-nav class="ml-auto">
        <DefaultHeaderDropdownAccnt/>
      </b-navbar-nav>
    </AppHeader>
    <div class="app-body">
      <main class="main">
        <Breadcrumb :list="list"/>
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
      <AppAside fixed>
        <!--aside-->
        <DefaultAside/>
      </AppAside>
    </div>
    <TheFooter>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6">
            2018 - 2019 ©
            <a href="http://trigital.in">Trigital</a>- Trigital Technologies
          </div>
          <div class="col-md-6">
            <div class="text-md-right footer-links d-none d-md-block">
              <a href="http://trigital.in/" target="_blank" class="mr-2">About</a>
              <a href="http://trigital.in/" target="_blank" class="mr-2">Support</a>
              <a href="http://trigital.in/contact_us.php" target="_blank" class="mr-2">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </TheFooter>
  </div>
</template>

<script>
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
  Breadcrumb
} from "@/components";
import DefaultAside from "./DefaultAside";
import DefaultHeaderDropdownAccnt from "./DefaultHeaderDropdownAccnt";

export default {
  name: "DefaultContainer",
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
    SidebarMinimizer
  },
  data() {
    return {
      search: ""
    };
  },
  computed: {
    name() {
      return this.$route.name;
    },
    list() {
      return this.$route.matched.filter(
        route => route.name || route.meta.label
      );
    }
  }
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

@media (max-width: 575.98px) {
  .sidebar-show .main::before,
  .aside-menu-show .main::before {
    background: none !important;
  }
}
@media (min-width: 575.98px) {
  .header-fixed .app-header {
    position: fixed;
  }
}
@media (min-width: 200.98px) {
  .header-fixed .app-header {
    position: fixed;
  }
}
</style>
