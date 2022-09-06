<template>
  <div class="d-flex">
    <CommonProfileNavbar class="navbar" />
    <Nuxt class="content" />
  </div>
</template>

<script>
export default {
  name: 'UserProfile'
}
</script>

<style lang="scss" scoped>
    .navbar{
        width:20% !important;
    }

    .content{
        width: 80% !important;
    }
</style>
