<template>
  <div>
    <b-card
      overlay
      img-src="img/slider3.jpg"
      id="overlay"
      img-alt="Card Image"
      text-variant="white"
    >
      <h2>Trigital Technologies</h2>
      <div>
        <b-link>
          <b-button onclick="this.blur();" variant="primary" class="rating float-left" size="sm">
            <i class="fa fa-star" aria-hidden="true"></i>
            4.5
          </b-button>
        </b-link>
        <a class="review text-white ml-3 mt-5" href="#asection1">30 User Ratings,23 Reviews</a>
      </div>
      <b-link
        href="https://www.google.com/maps/dir/17.501565,78.3500764/Flat+No+408,+Koata+Technologies,+Hemadurga+Plaza,+Allwyn+Cross+Road,+Above+ICICI+bank,+Miyapur,+Hyderabad,+Telangana+500049/@17.5045703,78.3498347,16z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3bcb927255229215:0x5025715c2fe7e57!2m2!1d78.358481!2d17.504876"
        class="text-muted"
        target="_blank"
      >
        <h5 class="text-white">
          <i class="fa fa-map-marker" aria-hidden="true"></i>
          Flat No 408, Hemadurga Plaza, Allwyn Cross Road,
        </h5>
      </b-link>
      <b-link href="https://www.trigital.in" target="_blank">
        <h6 class="text-white">
          <i class="fa fa-phone" aria-hidden="true"></i>
          +91-987646737
        </h6>
      </b-link>
    </b-card>
  </div>
</template>
<script>
export default {
  name: 'ProductImageCard',
  components: {},
};
</script>

<style scoped>
img {
  opacity: 0.5 !important;
  box-shadow: 1px 1px 5px 1px black;
}
#overlay {
  background: #000000 !important;
}
h5 {
  margin: 11px 0 !important;
  margin-top: 20px !important;
}
</style>



    