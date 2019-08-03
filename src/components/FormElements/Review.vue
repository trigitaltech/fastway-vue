<template>
  <div>
    <div id="asection1">
      <b-tabs justified fill>
        <b-tab title="User Reviews" active>
          <UserReviews :review=" review " v-for="(review,idx) in reviews" :key="idx"></UserReviews>
        </b-tab>
        <b-tab title="Write a review">
          <div class="container mt-4">
            <b-row>
              <b-col md="6">
                <h4>Rate your total Stars:</h4>
              </b-col>
              <b-col md="6">
                <star-rating
                  v-bind:increment="0.5"
                  v-bind:max-rating="5"
                  inactive-color="#ccc"
                  active-color="#727cf5"
                  v-bind:star-size="20"
                ></star-rating>
              </b-col>
            </b-row>
          </div>
          <div id="asection1" class="container mt-2">
            <div>
              <div>
                <b-form-group
                  id="fieldset-horizontal"
                  label-cols-sm="4"
                  label-cols-lg="3"
                  description="Let us know your name."
                  label="Display Name"
                  label-for="input-horizontal"
                >
                  <b-form-input id="input-horizontal"></b-form-input>
                </b-form-group>
              </div>
            </div>
            <b-form-textarea id="textarea-rows" placeholder="Write A Review" rows="8"></b-form-textarea>
            <div>
              <b-button
                onclick="this.blur();"
                class="mt-2 mx-auto d-block review-submit"
                type="submit"
              >Submit</b-button>
            </div>
          </div>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import UserReviews from "@/components/FormElements/UserReviews.vue";
import StarRating from "vue-star-rating";
@Component({
  components: {
    StarRating,
    UserReviews
  }
})
export default class extends Vue {
  private reviews = [
    {
      name: "Aaron Finch",
      description:
        "This text is styled with some of the text formatting properties.",
      date: "20/6/2019"
    },
    {
      name: "david",
      description:
        "The following example shows center aligned, and left and right aligned text ",
      date: "20/6/2019"
    },
    {
      name: "John",
      description:
        "The CSS box model is essentially a box that wraps around every HTML element. ",
      date: "20/6/2019"
    },
    {
      name: "John2",
      description: "this is a demo",
      date: "20/6/2019"
    }
  ];
}
</script>
<style scoped>
.review-submit {
  background: #727cf5 !important;
  border: none;
}
i.fa {
  color: #727cf5;
}
</style>
<style>
.nav-link.active {
  color: white !important;
}
.nav-tabs .nav-link.active {
  background: #727cf5 !important;
}
.nav-tabs .nav-link {
  background: #cdcedb !important;
  border-radius: 0px !important;
}
.nav-fill .nav-link {
  border: none !important;
  margin-top: 0px !important;
}
</style>


