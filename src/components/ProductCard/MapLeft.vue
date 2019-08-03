<template>
  <div>
    <div class="map-responsive mt-3">
      <div class="gmap_canvas">
        <iframe
          width="324"
          height="252"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=+`${lan}`,`${lon}`&hl=es;z=14&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </div>
    </div>
    <b-button
      class="direction mx-auto d-block mb-4 mt-3"
      size="md"
      onclick="this.blur();"
      type="submit"
      href="https://www.google.com/maps/dir/17.501565,78.3500764/Flat+No+408,+Koata+Technologies,+Hemadurga+Plaza,+Allwyn+Cross+Road,+Above+ICICI+bank,+Miyapur,+Hyderabad,+Telangana+500049/@17.5045703,78.3498347,16z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3bcb927255229215:0x5025715c2fe7e57!2m2!1d78.358481!2d17.504876"
      target="_blank"
    >
      Go to Direction
      <i class="fa fa-street-view" aria-hidden="true"></i>
    </b-button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Map extends Vue {
  @Prop({ default:'' })
  private lan!: string;
}

</script>

<style scoped>
.map-responsive {
  overflow: hidden;
  padding-bottom: 72%;
  position: relative;
  height: 0;
}
.direction {
  border: none !important;
  background: #727cf5 !important;
  cursor: pointer !important;
}
</style>
