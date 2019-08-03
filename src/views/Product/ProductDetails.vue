<template>
<div class="container-fluid">
    <!-- start page title -->
    <div class="row">
      <div class="col-12">
        <div class="page-title-box">
          <ProductDetails></ProductDetails>
        </div>
      </div>
    </div>
    <!-- end page title -->
  </div>

</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import ProductDetails from '@/components/ProductCard/ProductDetails.vue';

@Component({
  components: {
    ProductDetails,
  },
})
export default class ProductDetail extends Vue {
  private productID: string = '';

  private mounted() {
    try {
      this.productID = this.$route.params.id;
    } catch (error) {
      // tslint:disable-next-line:no-console
      console.log(error);
    }
  }
}
</script>


