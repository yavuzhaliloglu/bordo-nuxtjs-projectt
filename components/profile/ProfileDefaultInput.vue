<template>
  <form class="features-inputs" @submit.prevent="post">
    <!--HEADER-->
    <ProfileHeader>
      <h1 slot="header">İlan Özelliklerinizi seçin</h1>
      <p slot="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        nostrum ducimus similique dignissimos atque non sunt, et possimus autem?
        Explicabo!
      </p>
    </ProfileHeader>

    <!--IMAGE-->
    <div class="input-group">
      <vue-upload-multiple-image maxImage="15" @upload-success="uploadImageSuccess" @before-remove="beforeRemove"
        :data-images="images" @edit-image="editImage" idUpload="myIdUpload" editUpload="myIdEdit"
        dragText="Resim sürükleyin" browseText="(veya tıklayarak arayın)" primaryText="Varsayılan Resim"
        markIsPrimaryText="Varsayılan olarak ayarla" accept=image/jpeg,image/png,image/jpg,image/tif,image/tiff>
      </vue-upload-multiple-image>
    </div>

    <!--SEARCH-->
    <ProfileSearchComponent @location="getLocation">
      <h3>İlan Konumunu seçin</h3>
    </ProfileSearchComponent>

    <!--DEFAULT INPUTS-->
    <CommonInputComponent v-model="title" :type="'text'" :title="'title'" />
    <CommonInputComponent v-model="price" :type="'number'" :title="'price'" />

    <!--SLOT-->
    <slot></slot>

    <!--SELECT BOX-->
    <ProfileSelectBox @features="getFeatures" />

    <!--TEXTAREA-->
    <div class="input-group">
      <label for="description">Açıklama</label>
      <textarea v-model="description" name="description" cols="30" rows="10" />
    </div>

    <button type="submit">asdşkjql</button>
  </form>
</template>

<script>
import { serialize } from 'object-to-formdata';
export default {
  name: 'ProfileDefaultInput',
  props: {
    obj: {
      type: Object
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
    }
  },
  mounted() {
    this.getPath()
  },
  methods: {
    getPath() {
      const path = localStorage.getItem('path')
      this.path = path
    },
    setData(){
      const object = {
        title: this.title,
        images: this.imagestosend,
        description:this.description,
        price:this.price,
        squareMeters:Number(this.obj.defaults[0]),
        categoryPath:this.path,
        address:this.location,
        roomCount:this.obj.selects[0],
        netSquareMeters:Number(this.obj.defaults[1]),
        buildingAge:this.obj.selects[1],
        floor:Number(this.obj.defaults[2]),
        heatingType:this.obj.selects[2],
        itemStatus:this.obj.selects[3],
        interiorFeatures:this.features.interior,
        externalFeatures:this.features.external,
        locationFeatures:this.features.location,
      };
      const formData = serialize(object);
      return formData
    },
    post() {
      const formData = this.setData();
      this.$API.post.postAdvert(formData)
    },
    getLocation(value) {
      this.location = value
      console.log(this.location);
    },
    getFeatures(value) {
      this.features = value
    },
    uploadImageSuccess(formData, index) {
      this.imagestosend[index] = formData.get("file")
    },
    beforeRemove(index, done) {
      const r = confirm("Resmi silmek istediğinizden emin misiniz?")
      if (r === true) { done() }
      this.imagestosend.splice(index,1)
    },
    editImage(formData, index) {
      this.imagestosend[index] = formData.get("file")
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
