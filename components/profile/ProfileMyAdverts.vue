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
      <CommonLoadingCircle v-if="isLoading" />

      <div
        v-else
        :per-page="perPage"
        :current-page="currentPage"
        class="row w-100"
      >
        <div v-for="card in cards" :key="card" class="container col-md-4 col-sm-6">
          <CommonAdvertCard :card="card" />
        </div>
      </div>
      <b-pagination
        v-model="currentPage"
        class="myadverts-pagination"
        :total-rows="totalPage * 3"
        :per-page="3"
        :hide-goto-end-buttons="true"
      ></b-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileMyAdverts',
  data() {
    return {
      cards: [],
      perPage: 3,
      currentPage: 1,
      totalPage: null,
      isLoading: false
    }
  },
  computed: {
    visibleCards() {
      return this.cards
    }
  },
  watch: {
    currentPage() {
      this.getAdverts(this.currentPage)
    }
  },
  created() {
    this.getAdverts(this.currentPage)
  },
  methods: {
    async getAdverts(currentPage) {
      this.isLoading = true
      await this.$API.adverts
        .getAdverts(currentPage, this.perPage)
        .then((res) => {
          this.cards = res.data.data
          this.isLoading = false
          this.totalPage = res.data.pagination.totalPage
        })
    }
  }
}
</script>

<style lang="scss" scoped></style>
