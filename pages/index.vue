<template>
  <div>
    <HeroComponent />
    <PopularResidence />
  </div>
</template>

<script>
import PopularResidence from '../components/PopularResidence.vue';
import HeroComponent from '~/components/HeroComponent.vue';



export default {
  name: "IndexPage",
  layout: "DefaultLayout",
  components: { HeroComponent, PopularResidence }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/main.scss';
</style>