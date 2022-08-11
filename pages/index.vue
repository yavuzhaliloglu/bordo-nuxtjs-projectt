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
  components: { HeroComponent, PopularResidence, OpportunitiesComponent, ContactComponent, BeginComponent },
  layout: "DefaultLayout",


}
</script>

<style lang="scss" scoped>
</style>