<template>
    <div>
        <b-container fluid>
            <b-row  class="container1">
                <h1>Footer Section</h1>
            </b-row>
            <b-row class="copyright">
                <h5>Copyright 2019 Te de Tetera</h5>
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

</style>