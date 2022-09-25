<template>
  <section class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="h-100 d-flex flex-column justify-content-center">
          <h1>Perfect way to buy and sell a home</h1>
          <p>
            Diam vitae, nec mattis lectus quam pretium amet facilisis. Urna,
            massa aliqua dui pellentesque. Ac, gravida in eget non amet eget
            purus non.
          </p>
        </div>

        <div>
          <HeroSearchComponent />
        </div>
      </div>

      <div class="col-md-6">
        <div>
          <img class="w-100 h-100" src="~/assets/images/hero.png" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HeroSearchComponent from './HeroSearchComponent.vue'
export default {
  name: 'HeroComponent',
  components: { HeroSearchComponent },
  data() {
    return {
      text: 'Search',
      path: '/signup'
    }
  }
}
</script>

<style lang="scss" scoped></style>
