<template>
  <div class="container-fluid">
    <!-- start page title -->
    <div class="row">
      <div class="col-12">
        <div class="page-title-box">
          <div class="page-title-right">
            <ol class="breadcrumb m-0">
              <li class="breadcrumb-item" :key="index" v-for="(routeObject, index) in routeRecords">
                <span class="active" v-if="isLast(index)">{{ getName(routeObject) }}</span>
                <router-link :to="routeObject" v-else>{{ getName(routeObject) }}</router-link>
              </li>
            </ol>
          </div>
          <h4 class="page-title">Starter</h4>
        </div>
      </div>
    </div>
    <!-- end page title -->
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  computed: {
    routeRecords() {
      return this.list.filter((route, index) => route.name || route.meta.label);
    },
  },
  methods: {
    getName(item) {
      return item.meta && item.meta.label ? item.meta.label : item.name || null;
    },
    isLast(index) {
      return index === this.list.length - 1;
    },
  },
};
</script>
