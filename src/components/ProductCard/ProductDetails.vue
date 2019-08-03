<template>
  <div>
    <ProductImageCard></ProductImageCard>
    <div>
      <b-row>
        <b-col md="4">
          <Gallery></Gallery>
          <MapLeft></MapLeft>
        </b-col>
        <b-col md="8">
          <div>
            <b-card title="What We Do">
              <ProductCardDescription></ProductCardDescription>
              <b-button
                class="enquire mx-auto d-block mb-4"
                size="md"
                onclick="this.blur();"
                type="submit"
              >
                Enquire Now
                <i class="fa fa-superpowers" aria-hidden="true"></i>
              </b-button>
              <Review></Review>
            </b-card>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import StarRating from 'vue-star-rating';
import ProductImageCard from '@/components/FormElements/ProductImageCard.vue';
import Review from '@/components/FormElements/Review.vue';
import ProductCardDescription from '@/components/ProductCard/ProductCardDescription.vue';
import Gallery from '@/components/ProductCard/Gallery.vue';
import MapLeft from '@/components/ProductCard/MapLeft.vue';

@Component({
  components: {
    ProductImageCard,
    Review,
    ProductCardDescription,
    StarRating,
    Gallery,
    MapLeft,
  },
})
export default class ProductDetail extends Vue {
  private productId!: string;

  private mounted() {
    try {
      this.productId = this.$route.params.id;
    } catch (error) {
      console.log('error in mounted ', error);
    }
  }
}

</script>


<style scoped>
.enquire {
  border: none !important;
  background: #727cf5 !important;
}
</style>
