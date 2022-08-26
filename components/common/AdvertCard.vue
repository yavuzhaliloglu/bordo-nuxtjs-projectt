<template>
  <div class="advertcard">
    <div class="advertcard-img">
      <img class="advertcard-img-content" :src="card.images.url" alt="" />
    </div>
    <div class="container">
      <div class="advertcard-title">
        <h6 class="advertcard-title-text">
          {{ card.title }}
        </h6>
      </div>
      <div class="advertcard-price">
        <p class="advertcard-price-text">₺ {{ card.price }}</p>
      </div>
      <div class="advertcard-features">
        <div class="advertcard-features-item">
          <img
            class="advertcard-features-item-icon"
            src="~/assets/images/area.png"
            alt=""
          />
          <span class="advertcard-features-item-text">{{ card.type }}</span>
        </div>

        <div class="advertcard-features-item">
          <img
            class="advertcard-features-item-icon"
            src="~/assets/images/area.png"
            alt=""
          />
          <span class="advertcard-features-item-text"
            >{{ card.squareMeters }} m²</span
          >
        </div>

        <div class="advertcard-features-item">
          <img
            class="advertcard-features-item-icon"
            src="~/assets/images/area.png"
            alt=""
          />
          <span class="advertcard-features-item-text">{{
            format_date(card.date)
          }}</span>
        </div>
      </div>

      <div class="advertcard-location">
        <img
          class="advertcard-location-icon"
          src="~/assets/images/bed.png"
          alt=""
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
  created() {
    this.printCard()
  },
  methods: {
    format_date(value) {
      if (value) {
        return moment(value).format('DD.MM.YYYY')
      }
    },
    printCard() {
      console.log(this.card)
    }
  }
}
</script>

<style lang="scss" scoped></style>
