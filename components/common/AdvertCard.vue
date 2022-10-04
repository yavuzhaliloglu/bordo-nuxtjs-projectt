<template>
  <div class="advertcard">
    <div @click="getSingleAdvert(card._id)">
      <div class="advertcard-img">
        <img class="advertcard-img-content" :src="card.images[0].url" alt="" />
      </div>
      <div class="container py-2">
        <div class="advertcard-title">
          <h5 class="advertcard-title-text">
            {{ card.title }}
          </h5>
        </div>
        <div class="advertcard-price">
          <p class="advertcard-price-text">₺ {{ card.price }}</p>
        </div>
        <CommonIconFeatures
          :type="card.type"
          :sqm="card.squareMeters"
          :date="card.createdAt"
        />
        <CommonLocationComponent :address="card.address" />
      </div>
    </div>
    <div class="container">
      <div v-if="!isMainDashboard" class="advertcard-buttons pb-3">
        <button class="advertcard-buttons-item edit" @click="getUpdate(card)">
          İlanı Düzenle
        </button>
        <button
          class="advertcard-buttons-item delete"
          @click="deleteAdvert(card._id)"
        >
          İlanı Sil
        </button>
      </div>
      <div v-if="$route.path === '/dashboard'">
        <button class="radiusbutton" @click="updateDetail(card)">detay</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdvertCard',
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  data() {
    return { data: {} }
  },
  computed: {
    isMainDashboard() {
      const vm = this.$route.path
      return vm === '/' || vm === '/dashboard' || vm === '/adverts'
    }
  },
  methods: {
    deleteAdvert(cardId) {
      const r = confirm('İlanı Silmek İstediğinize Emin misiniz?')
      if (r) {
        this.$API.adverts.deleteAdvert(cardId)
        window.location.reload()
        // sayfaya birdaha istek at
      }
    },
    getSingleAdvert(id) {
      this.$router.push(`/advert/${id}`)
    },
    updateDetail(card) {
      this.$store.commit('UPDATE_DETAIL', card)
    },
    async getUpdate(card) {
      await this.$API.adverts
        .getSingleAdvert(card._id)
        .then((res) => {
          console.log(res.data.data)
          this.$store.commit('UPDATE_INPUT_VALUES', res.data.data[0])
        })
        .then(() => {
          if (card.type === 'İş Yeri') {
            this.$router.push(`/dashboard/newproperty/features/isyeri`)
            return
          }
          this.$router.push(`/dashboard/newproperty/features/${card.type}`)
        })
    }
  }
}
</script>

<style lang="scss" scoped></style>
