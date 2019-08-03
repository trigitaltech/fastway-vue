<template>
  <div>
    <b-row>
      <b-col md="6">
        <h6>
          <i class="fa fa-user-circle-o mr-1 fa-lg"></i>
          {{review.name}}
          <span class="date">{{review.date}}</span>
        </h6>
      </b-col>
      <b-col md="6">
        <star-rating
          v-bind:increment="0.5"
          v-bind:max-rating="5"
          inactive-color="#ccc"
          active-color="#727cf5"
          v-bind:star-size="10"
        ></star-rating>
      </b-col>
    </b-row>
    <p>{{review.description}}</p>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import StarRating from 'vue-star-rating';
@Component({
  components: {
    StarRating,
  },
})
export default class UserReviews extends Vue {
  @Prop(Object) private readonly review!: object;
}
</script>
<style scoped>
.fa-user-circle-o:before{
    color:teal !important;
}
</style>


