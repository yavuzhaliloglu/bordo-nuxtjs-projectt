<template>
  <section>
    <div class="hero">
      <div class="hero-content d-flex flex-column justify-content-around">
        <div class="hero-content-text">
          <h1>Perfect way to buy and sell a home</h1>
          <p>
            Diam vitae, nec mattis lectus quam pretium amet facilisis. Urna,
            massa aliqua dui pellentesque. Ac, gravida in eget non amet eget
            purus non.
          </p>
        </div>

        <!--SEARCH-->
        <div
          class="hero-content-search d-flex flex-row justify-content-center align-items-stretch"
        >
          <ProfileSearchComponent />
        </div>
      </div>

      <div class="hero-image">
        <img src="~/assets/images/hero.png" alt="" />
      </div>
    </div>
    <IndexFeaturedComponent />
  </section>
</template>

<script>
export default {
  name: 'HeroComponent',
  data() {
    return {
      text: 'Search',
      path: '/signup',
    }
  },
}
</script>

<style lang="scss" scoped></style>
