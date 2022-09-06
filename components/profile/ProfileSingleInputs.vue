<template>
  <div>
    <div v-if="type === 'Konut'">
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
    <div v-if="type === 'İş Yeri'">
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
    <div v-if="type === 'Arsa'">
      <p>
        Arazi Durumu: <span>{{ advert.landStatus }}</span>
      </p>
      <p>
        Parsel: <span>{{ advert.parcel }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileSingleInputs',
  props: {
    type: {
      type: String,
      required: true
    },
    advert: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
