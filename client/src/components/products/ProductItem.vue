<template>
    <b-card md="12" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
        <b-card-text>
            <p>{{product.title}}</p>
            <b-button href="#" variant="primary">Buy</b-button>
        </b-card-text>
        <div slot="footer"><small class="text-muted">Last updated 3 mins ago</small></div>
    </b-card>
</template>

<script>
    export default {
      id: 1,
      name: "ProductItem",
      props:["product"]
    }
</script>

<style scooped>

</style>