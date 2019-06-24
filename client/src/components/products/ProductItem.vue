<template>
    <div>
        <div class="col-md-12">
            <div class="card">
                <img src="https://instagram.fscl8-1.fna.fbcdn.net/vp/f6998e25573ef6d12aefbda655f1922a/5D86DCB1/t51.2885-15/e35/s1080x1080/61310559_168660610814817_6050408677771382551_n.jpg?_nc_ht=instagram.fscl8-1.fna.fbcdn.net" :alt="product.title" class="card-img-top">
                <div class="card-body">
                    <h4 class="card-title">{{ product.name }}</h4>
                    <div class="card-subtitle">{{product.description}}</div>
                    <div class="row justify-content-end">
                        <button class="btn btn-primary">Add to cart</button>
                    </div>
                </div>
                <div class="card-footer">${{ product.price }}</div>
            </div>
        </div>
<!--        <b-card-->
<!--                title="Product"-->
<!--                md="12"-->
<!--                img-src="https://instagram.fscl8-1.fna.fbcdn.net/vp/f6998e25573ef6d12aefbda655f1922a/5D86DCB1/t51.2885-15/e35/s1080x1080/61310559_168660610814817_6050408677771382551_n.jpg?_nc_ht=instagram.fscl8-1.fna.fbcdn.net"-->
<!--                img-alt="Image"-->
<!--                img-top-->
<!--                tag="article"-->
<!--                style="max-width: 20rem"-->
<!--                class="mb-2"-->
<!--        >-->
<!--            <b-card-text>-->
<!--                <p>{{product.title}}</p>-->
<!--            </b-card-text>-->

<!--        </b-card>-->

    </div>

</template>

<script>
    export default {
      id: 1,
      name: "ProductItem",
      props:["product"]
    }
</script>

<style scooped>
.card{
    max-height: 500px;
}
</style>

