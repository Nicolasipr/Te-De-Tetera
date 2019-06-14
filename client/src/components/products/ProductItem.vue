<template>
    <b-card  md="12" img-src="https://instagram.fscl8-1.fna.fbcdn.net/vp/f6998e25573ef6d12aefbda655f1922a/5D86DCB1/t51.2885-15/e35/s1080x1080/61310559_168660610814817_6050408677771382551_n.jpg?_nc_ht=instagram.fscl8-1.fna.fbcdn.net" img-alt="Image" img-top>
        <b-card-text>
            <p>{{product.title}}</p>
        </b-card-text>
        <b-button href="#" variant="primary">Buy</b-button>
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