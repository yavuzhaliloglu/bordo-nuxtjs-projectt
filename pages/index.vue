<template>
  <div>
    <HeroComponent />
    <PopularResidence />
    <OpportunitiesComponent />
    <ContactComponent />
    <BeginComponent />
  </div>
</template>

<script>
import PopularResidence from '../components/PopularResidence.vue';
import OpportunitiesComponent from '~/components/OpportunitiesComponent.vue';
import HeroComponent from '~/components/HeroComponent.vue';
import ContactComponent from '~/components/ContactComponent.vue';
import BeginComponent from '~/components/BeginComponent.vue';



export default {
  name: "IndexPage",
  layout: "DefaultLayout",
  components: { HeroComponent, PopularResidence, OpportunitiesComponent, ContactComponent, BeginComponent }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/main.scss';
</style>