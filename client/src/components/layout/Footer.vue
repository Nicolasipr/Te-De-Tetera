<template>
    <div>
        <b-container fluid  class="Footer1">
            <b-row  class="container1">
                <h1>Footer Section</h1>
            </b-row>
            <b-row class="copyright">
                <h5>Copyright 2019  Te de Tetera</h5>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
      name: "Footer"
    }

</script>

<style scooped>
    h1 {
        text-align: center;
    }
    .container1 {
        background: #353535;
        color: white;
        text-align: center;
    }
    .copyright{
        background: #7a7a7a;
        text-align: center;
        color: white;
    }
    .Footer1 {
        position: relative;
        bottom: 0px;
    }
</style>