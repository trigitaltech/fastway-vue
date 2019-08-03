<template>
  <b-row>
    <b-col md="3" v-for="(c,idx) in filterProductList" :key="idx">
      <div class="card d-block card-shadow abc">
        <b-card overlay title="title" :img-src="c.image" img-alt="Image" img-top class="mb-1"/>
          <div class="card-img-overlay">
            <b-button onclick="this.blur();" class="eb-btn float-left">
              <i class="fa fa-star" aria-hidden="true"></i>
              {{c.rating}}
            </b-button>

            <b-button onclick="this.blur();" class="eb-btn float-right" @click="c.like = !c.like">
              <span></span>
              <i class="fa fa-heart" :class="[ c.like===true ? 'yellow' : 'white' ]"></i>
            </b-button>
          </div>
          <div class="card-body">
            <div class="direction">
              <b-row>
                <b-col md="6" class="p-0">
                  <b-link href="https://www.google.com/maps/search/trigital+technologies/@17.5029334,78.3296802,12z/data=!3m1!4b1">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <span class="text-overflow"> {{ c.location }} </span>
                  </b-link>
                </b-col>
                <b-col md="6" class="p-0">
                  <b-link class="float-right" :href="`tel:${c.number}`">
                    <i class="fa fa-phone" aria-hidden="true"> </i>
                    <span class="text-overflow"> {{ c.number }}</span>
                  </b-link>
                </b-col>
              </b-row>
            </div>
            <b-card-text class="text text-center mb-2 mt-2">
              <b @click="details(c)">{{c.name}}</b>
            </b-card-text>
          </div>
      </div>
    </b-col>
  </b-row>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

@Component
export default class ProductCard extends Vue {
  @Prop(Object) private readonly c!: object;

  private details(payload: any){
    this.$router.push({ name: 'productDetail',params:{ id: payload._id} });
  }
  get productList() {
    return this.$store.getters['product/productList'];
  }

  get filterProductList(){
    return this.productList.filter((r: any, idx: any) => r.name.toLowerCase().includes(this.searchText.toLowerCase()) | r.location.toLowerCase().includes(this.searchText.toLowerCase()) | r.number.toLowerCase().includes(this.searchText.toLowerCase()));
  }

  get searchText(){
    return this.$store.getters['product/searchText'];
  }
}
</script>

<style  scoped>
.yellow {
  color: #fff700;
}

.white {
  color: #fff;
}

.eb-btn {
  border: none !important;
  outline: none !important;
  padding: 3px 5px 2px 5px !important;
  border-radius: 0px;
  background-color: #727cf5;
}

.eb-btn:focus,
.eb-btn:hover {
  outline: 0 !important;
  border: none !important;
  background-color: #727cf5;
}

a {
  color: #82757d !important;
}

.card-body {
  padding: 6px 27px 1px 27px;
}

.card-text {
  font-family: Nunito, sans-serif;
  font-size: 0.975rem;
  line-height: 1.5;
  font-weight: 400;
  padding: 0px 8px !important;
}

.card-img-overlay {
  padding: 0px !important ;
  bottom: 200px !important;
}

.card-shadow {
  box-shadow: 0px 1px 1px rgba(0,0,0,0.5);
  cursor: pointer;

}

.abc:hover {
  transform: translateY(-1px) scale(1.04);
  transition: 0.2s;
}

.text-overflow {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
@media (max-width: 1280px){
.direction{
font-size: 10px !important;
}
}



</style>