<template>
  <div class="myadverts">
    <div class="container">
      <ProfileHeader>
        <h1 slot="header">İlanlarınız</h1>
        <p slot="text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
          assumenda distinctio placeat, reiciendis architecto quas deserunt
          veniam quisquam quia inventore labore accusantium, enim tenetur maxime
          eligendi beatae quae aperiam aspernatur.
        </p>
      </ProfileHeader>
      <div
        class="d-flex justify-content-start align-items-start flex-wrap w-100"
      >
        <CommonAdvertCard
          v-for="card in cards"
          :key="card.image"
          :card="card"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileMyAdverts',
  data() {
    return {
      cards: []
    }
  },
  created() {
    this.getAdverts()
  },
  methods: {
    getAdverts() {
      this.$API.adverts.getAdverts().then((res) => {
        this.cards = res.data.data.cards
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
