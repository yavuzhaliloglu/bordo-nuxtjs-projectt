<template>
  <form class="features-inputs row no-gutters" @submit.prevent="post">
          <!--HEADER-->
    <ProfileHeader class="container">
        <h1 slot="header">İlan Özelliklerinizi seçin</h1>
        <p slot="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          nostrum ducimus similique dignissimos atque non sunt, et possimus autem?
          Explicabo!
        </p>
    </ProfileHeader>

    <!--IMAGE-->
    <div class="input-group multiple-image my-3">
      <vue-upload-multiple-image
        :data-images="images"
        idUpload="myIdUpload"
        dragText="Resim sürükleyin"
        browseText="(veya tıklayarak arayın)"
        primaryText="Varsayılan Resim"
        markIsPrimaryText="Varsayılan olarak ayarla"
        accept=image/jpeg,image/png,image/jpg,image/tif,image/tiff
        @upload-success="uploadImageSuccess"
        @before-remove="beforeRemove"
>
      </vue-upload-multiple-image>
    </div>

    <!--SEARCH-->
    <ProfileSearchComponent @location="getLocation">
      <h3>İlan Konumunu seçin</h3>
    </ProfileSearchComponent>

    <div class="container">
      <h3>Genel Özellikleri Seçin</h3>
    </div>
    <!--DEFAULT INPUTS-->
    <div class="features-inputs-defaults">
      
      <CommonInputComponent class="col-md-6" v-model="title" :type="'text'" :title="'İlan Başlığı'" />
      <CommonInputComponent class="col-md-6" v-model="price" :type="'number'" :title="'Fiyat (₺)'" />

      <!--SLOT-->
      <slot></slot>
    </div>

    <!--SELECT BOX-->
    <ProfileSelectBox @features="getFeatures" />

    <!--TEXTAREA-->
    <div class="input-group description-container container">
      <label class="description-container-label" for="description">İlan Açıklaması</label>
      <textarea
        v-model="description"
        class="description-container-input"
        placeholder="İlan açıklamanızı buraya yazın"
        name="description"
        cols="30"
        rows="10"
      />
    </div>

    <button class="b-container-button ml-3" type="submit">İlan Ver</button>
  </form>
</template>

<script>
import { serialize } from 'object-to-formdata';
export default {
  name: 'ProfileDefaultInput',
  props: {
    obj: {
      type: Object,
      default:null
    }
  },
  data() {
    return {
      title: '',
      path: '',
      price: null,
      description: '',
      images: [],
      imagestosend: [],
      file: "",
      location: {},
      features: {},
      endpoint: ''
    }
  },
  mounted() {
    this.getPath()
    this.setInputs()
  },
  methods: {
    getPath() {
      const path = localStorage.getItem('path')
      this.path = path
    },
    setInputs(){
      const data = this.$store.getters.getCommonInputs
      if(data.title){
        this.title = data.title
        this.price = data.price
        this.description = data.description
        return true
      }
      return false
    },
    setData() {
      const baseObject = {
        title: this.title,
        images: this.imagestosend,
        description: this.description,
        price: this.price,
        squareMeters: Number(this.obj.defaults[0]),
        categoryPath: this.path,
        address: this.location,
      };
      if (this.$route.path === '/dashboard/newproperty/features/Konut') {
        baseObject.roomCount = this.obj.selects[0]
        baseObject.netSquareMeters = Number(this.obj.defaults[1])
        baseObject.buildingAge = this.obj.selects[1]
        baseObject.floor = Number(this.obj.defaults[2])
        baseObject.heatingType = this.obj.selects[2]
        baseObject.itemStatus = this.obj.selects[3]
        baseObject.interiorFeatures = this.features.interior
        baseObject.externalFeatures = this.features.external
        baseObject.locationFeatures = this.features.location
        baseObject.type = 'Konut'
        this.endpoint = 'adverts/housing'
      }
      else if (this.$route.path === '/dashboard/newproperty/features/isyeri') {
        baseObject.roomCount = this.obj.selects[0]
        baseObject.netSquareMeters = Number(this.obj.defaults[1])
        baseObject.buildingAge = this.obj.selects[1]
        baseObject.floor = Number(this.obj.defaults[2])
        baseObject.heatingType = this.obj.selects[2]
        baseObject.itemStatus = this.obj.selects[3]
        baseObject.interiorFeatures = this.features.interior
        baseObject.externalFeatures = this.features.external
        baseObject.locationFeatures = this.features.location
        baseObject.type = 'İş Yeri'
        this.endpoint = 'adverts/workPlace'
      }
      else if(this.$route.path === '/dashboard/newproperty/features/Arsa'){
        baseObject.landStatus = this.obj.selects[0]
        baseObject.parcel = this.obj.defaults[1]
        baseObject.locationFeatures = this.features.location
        baseObject.type = 'Arsa'
        this.endpoint = 'adverts/land'
      }
      return baseObject
    },
    post() {
      const formData = this.setData();
      this.$API.post.post(formData,this.endpoint)
    },
    getLocation(value) {
      this.location = value
    },
    getFeatures(value) {
      this.features = value
    },
    uploadImageSuccess(formData, index) {
      const object = {
        image: formData.get("file")
      }
      const fd = serialize(object);
      this.$API.post.postImage(fd).then(response => {
        this.imagestosend[index] = response.data.data.remoteId
      })
    },
    beforeRemove(index, done) {
      const r = confirm("Resmi silmek istediğinizden emin misiniz?")
      if (r === true) { done() }
      this.$API.delete.deleteImage(this.imagestosend[index])
      this.imagestosend.splice(index, 1)
    },
  }
}
</script>

<style lang="scss" scoped>
</style>
