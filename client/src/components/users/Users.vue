<template>
    <div>
        <h1>Users</h1>
        <b-container>
            <div class="users">
                <div class="user">
                    <b-table striped hover :items="AllUsers"></b-table>
                </div>
            </div>
        </b-container>
    </div>
</template>

<script>
  import {  mapGetters, mapActions } from 'vuex'

  export default {
    name: "Users",
    methods: {
      ...mapActions(['fetchUsers'])
    },
    computed: mapGetters(['AllUsers']),
    created() {
      this.fetchUsers()
    }
  }
</script>

<style>

</style>