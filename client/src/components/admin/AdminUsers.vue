<template>
    <div>
        <AddUsers/>
        <Users></Users>
    </div>
</template>

<script>
    import Users from '@/components/users/Users'
    import AddUsers from '@/components/users/AddUsers'

    export default {
      name: "Admin",
      components: {
        Users,
        AddUsers
      }
    }
</script>

<style scooped>

</style>