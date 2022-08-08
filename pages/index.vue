<template>
  <div>
    <HeroComponent />
    <PopularResidence />
    <OpportunitiesComponent />
  </div>
</template>

<script>
import PopularResidence from '../components/PopularResidence.vue';
import OpportunitiesComponent from '~/components/OpportunitiesComponent.vue';
import HeroComponent from '~/components/HeroComponent.vue';



export default {
  name: "IndexPage",
  layout: "DefaultLayout",
  components: { HeroComponent, PopularResidence, OpportunitiesComponent }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/main.scss';
</style>