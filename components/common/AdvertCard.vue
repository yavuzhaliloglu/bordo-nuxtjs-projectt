<template>
  <div class="advertcard">
    <div class="advertcard-img">
      <img class="advertcard-img-content" :src="card.images.url" alt="" />
    </div>
    <div class="container">
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
        :date="format_date(card.date)"
      />
      <div class="advertcard-location">
        <font-awesome-icon
          class="advertcard-location-icon icon"
          icon="fa-solid fa-location-dot"
        />
        <span class="advertcard-location-text"
          >{{ card.address.city.name }},</span
        >
        <span class="advertcard-location-text"
          >{{ card.address.district.name }},</span
        >
        <span class="advertcard-location-text">{{
          card.address.town.name
        }}</span>
      </div>

      <div class="advertcard-buttons">
        <button class="advertcard-buttons-item edit">İlanı Düzenle</button>
        <button
          class="advertcard-buttons-item delete"
          @click="deleteAdvert(card._id)"
        >
          İlanı Sil
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'AdvertCard',
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
  },
  methods: {
    format_date(value) {
      if (value) {
        return moment(value).format('DD.MM.YYYY')
      }
    },
    deleteAdvert(cardId) {
      console.log(cardId)
      this.$API.adverts.deleteAdvert(cardId)
    }
  }
}
</script>

<style lang="scss" scoped></style>
