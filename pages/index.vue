<template>
  <div>
    <IndexHeroComponent />
    <IndexPopularResidence />
    <IndexOpportunitiesComponent />
    <IndexContactComponent />
    <IndexBeginComponent />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'DefaultLayout'
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/pages/homepage.scss';
</style>
