<template>
        <div>
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

                <b-carousel-slide  img-src="https://img.wallpapersafari.com/desktop/1920/1080/49/11/Kx2QYm.jpg">
                    <h1>
                        Welcome to Te de Tetera!
                    </h1>
                </b-carousel-slide >
                <b-carousel-slide img-src="https://img.wallpapersafari.com/desktop/1920/1080/4/10/SZxeFd.jpg">
                </b-carousel-slide>

            </b-carousel>
        </div>
</template>

<script>
    export default {
      name: "Carousel"
    }

</script>

<style scoped>

</style>