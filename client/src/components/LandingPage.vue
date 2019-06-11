<template>
  <div class="Landing Page">
<!--    START CARROUSEL-->
    <div class="container-fluid">
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="5000"
        controls
        indicators
        background="#ababab"
        img-width="1080"
        img-height="100"
        height="500"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Text slides with image -->

        <!-- Slides with custom text -->
<!--        <b-carousel-slide  img-src="https://www.bigelowtea.com/BigelowStoreProd/media/Our-History-Images/iStock_000017173921Medium_teaparty.jpg">-->
<!--          <h1 class="slide-text" >Welcome to Te de Tetera!</h1>-->
<!--        </b-carousel-slide>-->
<!--        <b-carousel-slide   img-src="https://www.tokkoro.com/picsup/5240338-tea-teapot-flower-home-yellow-rose-green-tea-induse-still-cup-kitchen-blur-coffee-break-table-hot-tea-pot-pot-cosy-kettle-png-images.jpg">-->
<!--          <h1 class="slide-text" >Welcome to Te de Tetera!</h1>-->
<!--        </b-carousel-slide>-->
        <b-carousel-slide  img-src="https://img.wallpapersafari.com/desktop/1920/1080/49/11/Kx2QYm.jpg">
          <h1>
            Welcome to Te de Tetera!
          </h1>
        </b-carousel-slide >
        <b-carousel-slide img-src="https://img.wallpapersafari.com/desktop/1920/1080/4/10/SZxeFd.jpg">
        </b-carousel-slide>

      </b-carousel>
    </div>
<!--    END CARROUSEL-->
    <b-container>
      <br>
      <div>
        <b-card-group deck>
          <b-card title="Set de Té" img-src="https://instagram.fscl8-1.fna.fbcdn.net/vp/40c4b36cec59fcee9f5526469a642ba4/5D8D8921/t51.2885-15/e35/s1080x1080/61908434_749362908811493_1734913843080410623_n.jpg?_nc_ht=instagram.fscl8-1.fna.fbcdn.net" img-alt="Image" img-top>
            <b-card-text>

            </b-card-text>
            <div slot="footer"><small class="text-muted">$20.000</small></div>
          </b-card>

          <b-card title="Teteras" img-src="https://instagram.fscl8-1.fna.fbcdn.net/vp/399360fa7de89a33a63de26c51eb5578/5D941563/t51.2885-15/e35/s1080x1080/62007707_467720093990692_873160526444306710_n.jpg?_nc_ht=instagram.fscl8-1.fna.fbcdn.net" img-alt="Image" img-top>
            <b-card-text>

            </b-card-text>
            <div slot="footer"><small class="text-muted">$20.000</small></div>
          </b-card>

          <b-card title="Tazas" img-src="https://instagram.fscl8-1.fna.fbcdn.net/vp/251f94343fa3359586169cdca3dc2e77/5D87C9D5/t51.2885-15/e35/56593837_2403853319625488_8222825805482169083_n.jpg?_nc_ht=instagram.fscl8-1.fna.fbcdn.net" img-alt="Image" img-top>
            <b-card-text>

            </b-card-text>
            <div slot="footer"><small class="text-muted">$20.000</small></div>
          </b-card>
        </b-card-group>
      </div>
    </b-container>

  </div>
</template>

<script>
export default {
  name: 'LandingPage',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#carousel-1{

}

</style>
