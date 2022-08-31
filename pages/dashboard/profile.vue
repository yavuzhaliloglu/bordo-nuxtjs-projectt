<template>
  <div class="detail d-flex justify-content-center align-items-start my-3">
    <div class="detail-main">
      <h1 class="detail-main__title">{{ advert.title }}</h1>

      <img
        class="detail-main__img"
        :src="require(`~/assets/images/${advert.images[0].url}.jpg`)"
        alt=""
      />

      <div class="detail-main__location">
        <p>
          <font-awesome-icon class="mr-1" icon="fa-solid fa-location-dot" />
          <span>{{ advert.location.city.name }} - </span>
          <span>{{ advert.location.district.name }} - </span>
          <span>{{ advert.location.town.name }}</span>
        </p>
      </div>

      <div class="detail-main__info">
        <h3>İlan Bilgileri</h3>
        <div class="detail-main__info__container">
          <div class="detail-main__info__container__item">
            <p>Net Metrekare: {{ advert.squareMeters }} m²</p>
          </div>
          <div class="detail-main__info__container__item">
            <p>Brüt Metrekare: {{ advert.netSquareMeters }} m²</p>
          </div>
          <div class="detail-main__info__container__item">
            <p>Oda Sayısı: {{ advert.roomCount }} m²</p>
          </div>
          <div class="detail-main__info__container__item">
            <p>Bina Yaşı: {{ advert.buildingAge }} m²</p>
          </div>
          <div class="detail-main__info__container__item">
            <p>Bulunduğu Kat: {{ advert.floor }} m²</p>
          </div>
          <div class="detail-main__info__container__item">
            <p>Isıtma Tipi: {{ advert.squareMeters }} m²</p>
          </div>
        </div>
      </div>
    </div>
    <div class="detail-aside">
      <h2 class="detail-aside__price">{{ advert.price }} ₺</h2>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProfilePage',

  data() {
    return {
      advert: {
        images: [
          { url: 'property-1' },
          { url: 'property-2' },
          { url: 'property-3' },
          { url: 'property-4' },
          { url: 'property-5' },
          { url: 'property-6' },
          { url: 'property-7' }
        ],
        location: {
          city: { id: 1, name: 'İstanbul' },
          district: { id: 2, name: 'Küçükçekmece' },
          town: { id: 3, name: 'Atatürk Mahallesi' }
        },
        title: 'küçükçekmece sahibinden yeni daire',
        price: 600000,
        squareMeters: 100,
        netSquareMeters: 100,
        floor: 3,
        roomCount: '1+1',
        buildingAge: '5-10',
        heatingType: 'Kombi',
        itemStatus: 'Boş',
        interiorFeatures: [
          { id: 1, name: 'Alaturka Tuvalet' },
          { id: 2, name: 'Amerikan Mutfak' },
          { id: 3, name: 'Duşakabin' },
          { id: 4, name: 'Fiber' }
        ],
        externalFeatures: [
          { id: 1, name: 'Spor Salonu' },
          { id: 2, name: 'Havuz' },
          { id: 3, name: 'Ses Yalıtımı' },
          { id: 4, name: 'Asansör' },
          { id: 5, name: 'Otopark' }
        ],
        locationFeatures: [
          { id: 1, name: 'Hastaneye Yakın' },
          { id: 2, name: 'Deniz Manzaralı' }
        ],
        description:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam omnis ab dolorem? Natus non veniam animi delectus quod velit deserunt quia soluta nisi, aspernatur quas molestiae, repudiandae nihil ipsa nulla dicta nam ullam recusandae modi, ratione esse exercitationem. Quidem incidunt, placeat architecto labore a recusandae?'
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
