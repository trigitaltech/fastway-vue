<template>
<div class="container-fluid">
    <!-- start page title -->
    <div class="row">
      <div class="col-12">
        <div class="page-title-box">
          <product-card></product-card>
        </div>
      </div>
    </div>
    <!-- end page title -->
  </div>

</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import ProductCard from '@/components/ProductCard/ProductCard.vue';
@Component({
  components: {
    ProductCard,
  },
})
export default class extends Vue {
  private mounted() {
    const dumpArray: any = [];
    for (let i = 0; i <= 1; i ++) {
      const obj = {
        location: 'Miyapur',
        number: '8780888198',
        name: 'Emperor Brains',
        rating: i + '.0',
        like: false,
        image: 'img/small-4.jpg',
        _id: i,
      };
      dumpArray.push(obj);
    }
    for (let i = 0; i <= 1; i ++) {
      const obj = {
        location: 'HitechCity',
        number: '8780888198',
        name: 'Advent Technologies',
        rating: i + '.0',
        like: false,
        image: 'img/small-5.jpg',
        _id: i,
      };
      dumpArray.push(obj);
    }
    for (let i = 0; i <= 1; i ++) {
      const obj = {
        location: 'AlwinX road',
        number: '8780888198',
        name: 'Trigital Technologies',
        rating: i + '.0',
        like: false,
        image: 'img/small-3.jpg',
        _id: i,
      };
      dumpArray.push(obj);
    }
    for (let i = 0; i <= 6; i ++) {
      const obj = {
        location: 'Kukatpally',
        number: '8780888198',
        name: 'Bash Technologies',
        rating: i + '.0',
        like: false,
        image: 'img/small-6.jpg',
        _id: i,
      };
      dumpArray.push(obj);
    }
    this.$store.dispatch('product/products', dumpArray);
  }
}
</script>


