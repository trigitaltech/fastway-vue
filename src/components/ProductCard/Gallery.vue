<template>
  <div>
          <b-card sub-title="Gallery">
            
          <img class="image1" v-for="(image, i) in images" :src="image" :key="i" @click="index = i">
  <vue-gallery-slideshow :images="images" :index="index" @close="index = null"></vue-gallery-slideshow>
               </b-card>
    <h6 class="abc">
      <a href="https://www.trigital.in" target="_blank" >
        <i class="fa fa-edge" aria-hidden="true"></i>
        www.trigital.com
      </a>
      <a class="card-link float-right" href="mailto:info@trigital.com" target="blank"> 
        <i class="fa fa-envelope"  aria-hidden="true"></i>
        info@trigital.in
      </a>
    </h6>
    <a class="add">
      <i class="fa fa-globe mt-2" aria-hidden="true"></i>
      Address: Flat No 408, Hemadurga Plaza, Allwyn Cross Road, Above ICICI bank, Jaya Prakash Narayan Nagar, Miyapur, Hyderabad, Telangana 500049
    </a>
    </div>
</template>
<script>
import VueGallerySlideshow from 'vue-gallery-slideshow';
export default {
  name: 'ProductLeftDescription',
  components: {
    VueGallerySlideshow,
  },
  data: () => {
    return{
    images: [
      'img/Gallery/slider3.jpg',
      'img/Gallery/slider1.jpg',
      'img/Gallery/54.jpg',
      'img/Gallery/slider3.jpg',
      'img/Gallery/53.jpg',
      'img/Gallery/slider3.jpg',
      'img/Gallery/slider2.jpg',
      'img/Gallery/53.jpg',
    ],
    index: null,
    };
  },
};
</script>

<style scoped>
.add{
  color:rgb(58, 55, 55) !important;
}
.image1{    
    width: 80px !important;
    margin-left: 5px;
    margin-right:5px;
    margin-top: 10px;
    cursor: pointer !important;
    border-radius: 3px !important;
    box-shadow: 0px 1px 5px 1px #999fdf !important; 
}
.image1:hover {
  transform: translateY(-1px) scale(2.5);

  transition: 0.4s;
}
.abc{
  margin-top: -20px !important;
}
</style>
