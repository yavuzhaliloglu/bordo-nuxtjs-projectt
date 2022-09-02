<template>
  <div class="container my-4">
    <div class="row">
      <div class="col-lg-8">
        <div class="container advert-main py-4">
          <div
            style="
              --swiper-navigation-color: #fff;
              --swiper-pagination-color: #fff;
            "
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

          <div class="advert-main__feature my-5">
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

          <div class="advert-main__feature my-5">
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
            <h5>Lokasyon Özellikleri</h5>
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
          <h3>{{ advert.title }}</h3>
          <p class="advert-info__price">₺ {{ advert.price }}</p>
          <p class="advert-info__location">
            <font-awesome-icon icon="fa-solid fa-location-dot" />
            {{ advert.address.city.name }}, {{ advert.address.district.name }},
            {{ advert.address.town.name }}
          </p>
          <p>
            Oluşturma Tarihi: <span>{{ format_date(advert.createdAt) }}</span>
          </p>
          <p>
            İlan Tipi: <span>{{ advert.type }}</span>
          </p>
          <p>
            Metrekare: <span>{{ advert.squareMeters }} m²</span>
          </p>

          <div v-if="advert.type === 'Konut'">
            <p>
              Bina Yaşı: <span>{{ advert.buildingAge }}</span>
            </p>
            <p>
              Bulunduğu Kat: <span>{{ advert.floor }}</span>
            </p>
            <p>
              Isıtma Tipi: <span>{{ advert.heatingType }}</span>
            </p>
            <p>
              Eşya Durumu: <span>{{ advert.itemStatus }}</span>
            </p>
            <p>
              Oda Sayısı: <span>{{ advert.roomCount }}</span>
            </p>

            <p>
              Net Metrekare : <span>{{ advert.netSquareMeters }} m²</span>
            </p>
          </div>
          <div v-if="advert.type === 'İş Yeri'">
            <p>
              Bina Yaşı: <span>{{ advert.buildingAge }}</span>
            </p>
            <p>
              Bulunduğu Kat: <span>{{ advert.floor }}</span>
            </p>
            <p>
              Isıtma Tipi: <span>{{ advert.heatingType }}</span>
            </p>
            <p>
              Eşya Durumu: <span>{{ advert.itemStatus }}</span>
            </p>
            <p>
              Oda Sayısı: <span>{{ advert.roomCount }}</span>
            </p>
            <p>
              Net Metrekare : <span>{{ advert.netSquareMeters }} m²</span>
            </p>
          </div>
          <div v-if="advert.type === 'Arsa'">
            <p>
              Arazi Durumu: <span>{{ advert.landStatus }}</span>
            </p>
            <p>
              Parsel: <span>{{ advert.parcel }}</span>
            </p>
          </div>
          <div class="advert-info-user">
            <div class="d-flex flex-row align-items-start justify-content-between">
              <p>{{ advert.user.userName }}</p>
              <button class="ml-3">Mesaj At</button>
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
    }
  }
}
</script>

<style lang="scss" scoped></style>
