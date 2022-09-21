<template>
  <div class="container my-5">
    <div class="row">
      <div class="col-lg-8">
        <div class="container advert-main py-4">
          <div
            style="--swiper-navigation-color: #fff"
            class="swiper-container mySwiper2"
          >
            <div class="swiper-wrapper">
              <div
                v-for="item in advert.images"
                :key="item.url"
                class="swiper-slide"
              >
                <img :src="item.url" alt="" />
              </div>
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
          </div>
          <div thumbsSlider="" class="swiper-container mySwiper">
            <div class="swiper-wrapper">
              <div
                v-for="item in advert.images"
                :key="item.url"
                class="swiper-slide"
              >
                <img :src="item.url" alt="" />
              </div>
            </div>
          </div>

          <div class="advert-main__description my-5">
            <h5>İlan Açıklaması</h5>
            <p>{{ advert.description }}</p>
          </div>

          <div v-if="advert.type !== 'Arsa'" class="advert-main__feature my-5">
            <h5>İç Özellikler</h5>
            <ul class="row">
              <li
                v-for="feature in advert.interiorFeatures"
                :key="feature.id"
                class="col-4"
              >
                <div>
                  {{ feature.item }}
                </div>
              </li>
            </ul>
          </div>

          <div v-if="advert.type !== 'Arsa'" class="advert-main__feature my-5">
            <h5>Dış Özellikler</h5>
            <ul class="row">
              <li
                v-for="feature in advert.externalFeatures"
                :key="feature.id"
                class="col-4"
              >
                <div>
                  {{ feature.item }}
                </div>
              </li>
            </ul>
          </div>

          <div class="advert-main__feature my-5">
            <h5>Konum Özellikleri</h5>
            <ul class="row">
              <li
                v-for="feature in advert.locationFeatures"
                :key="feature.id"
                class="col-4"
              >
                <div>
                  {{ feature.item }}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col-lg-4">
        <div class="advert-info container py-4">
          <div class="d-flex justify-content-between">
            <h3>{{ advert.title }}</h3>
            <button @click="ChangeFavorite">Favorilere Ekle</button>
            {{ isFav }}
          </div>
          <p class="advert-info__price">₺ {{ advert.price }}</p>
          <CommonLocationComponent
            class="text-white"
            :address="advert.address"
          />
          <p>
            Oluşturma Tarihi: <span>{{ format_date(advert.createdAt) }}</span>
          </p>
          <p>
            İlan Tipi: <span>{{ advert.type }}</span>
          </p>
          <p>
            Metrekare: <span>{{ advert.squareMeters }} m²</span>
          </p>
          <ProfileSingleInputs :type="advert.type" :advert="advert" />

          <div class="advert-info-user">
            <div
              class="d-flex flex-row align-items-start justify-content-between"
            >
              <p>{{ advert.user.userName }}</p>
              <button class="radiusbutton my-3">Mesaj At</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import { Swiper, Navigation, Autoplay, Thumbs } from 'swiper'
import 'swiper/swiper-bundle.css'
export default {
  name: 'SingleAdvert',
  props: {
    advert: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isFav: false
    }
  },
  mounted() {
    Swiper.use([Navigation, Autoplay, Thumbs])
    /* eslint-disable no-unused-vars */
    const swiper = new Swiper('.mySwiper', {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true
    })
    const swiper2 = new Swiper('.mySwiper2', {
      spaceBetween: 10,
      slidesPerView: 1,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      thumbs: {
        swiper
      }
    })
  },
  methods: {
    format_date(value) {
      if (value) {
        return moment(value).format('DD.MM.YYYY')
      }
    },
    ChangeFavorite() {
      this.isFav = !this.isFav
      if (this.isFav) {
        this.$API.adverts.addFavorite(this.advert._id).then(res=>{
          console.log(res)
        })
      }
      else{
        this.$API.adverts.removeFavorite(this.advert._id).then(res=>{
          console.log(res)
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
