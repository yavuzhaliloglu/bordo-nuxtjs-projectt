<template>
  <form class="features-inputs" @submit.prevent="set">
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
      <vue-upload-multiple-image @upload-success="uploadImageSuccess" @before-remove="beforeRemove"
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

    <!-- <LinksButtonComponent :text="'İlan ver'" :type="submit" /> -->
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
      data: {
        imagestosend: [],
        title: '',
        description: '',
        price: null,
        squareMeters: null,
        categoryPath: '',
        address: {},
        roomCount: '',
        netSquareMeters: null,
        buildingAge: '',
        floor: null,
        heatingType: '',
        itemStatus: '',
        interiorFeatures: [],
        externalFeatures: [],
        locationFeatures: []
      }
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
    set() {
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
      const options = {
        /**
         * include array indices in FormData keys
         * defaults to false
         */
        indices: false,

        /**
         * treat null values like undefined values and ignore them
         * defaults to false
         */
        nullsAsUndefineds: false,

        /**
         * convert true or false to 1 or 0 respectively
         * defaults to false
         */
        booleansAsIntegers: false,

        /**
         * store arrays even if they're empty
         * defaults to false
         */
        allowEmptyArrays: false,

        /**
         * don't include array notation in FormData keys for Files in arrays
         * defaults to false
         */
        noFilesWithArrayNotation: false,

        /**
         * use dots instead of brackets for object notation in FormData keys
         * defaults to false
         */
        dotsForObjectNotation: false,
      };

      const formData = serialize(object, options);
      this.$axios.$post('advertHousing', formData,
        { headers: { 'Content-Type': 'multipart/form-data',Accept: "application/json", } })

    },
    getLocation(value) {
      this.location = value
      console.log(this.location);
    },
    getFeatures(value) {
      this.features = value
    },
    setData() {
      // const vm = this.data
      // vm.imagestosend = this.imagestosend;
      // vm.title = this.title
      // vm.description = this.description
      // vm.price = Number(this.price)
      // vm.squareMeters = Number(this.obj.defaults[0])
      // vm.categoryPath = this.path
      // vm.address = this.location
      // vm.roomCount = this.obj.selects[0]
      // vm.netSquareMeters = Number(this.obj.defaults[1])
      // vm.buildingAge = this.obj.selects[1]
      // vm.floor = Number(this.obj.defaults[2])
      // vm.heatingType = this.obj.selects[2]
      // vm.itemStatus = this.obj.selects[3]
      // vm.interiorFeatures = this.features.interior
      // vm.externalFeatures = this.features.external
      // vm.locationFeatures = this.features.location
    },
    post() {
      const fd = new FormData();
      fd.append('title', this.title);
      fd.append('file', this.location);
      fd.append('description', this.description);
      fd.append('price', Number(this.price));
      fd.append('squareMeters', Number(this.obj.defaults[0]));
      fd.append('categoryPath', this.path);
      fd.append('address', this.location);
      fd.append('roomCount', this.obj.selects[0]);
      fd.append('netSquareMeters', Number(this.obj.defaults[1]));
      fd.append('buildingAge', this.obj.selects[1])
      fd.append('floor', Number(this.obj.defaults[2]))
      fd.append('heatingType', this.obj.selects[2])
      fd.append('itemStatus', this.obj.selects[3])
      fd.append('interiorFeatures', this.features.interior)
      fd.append('externalFeatures', this.features.external)
      fd.append('locationFeatures', this.features.location)

      this.$axios.$post('advertHousing', fd,
        { headers: { 'Content-Type': 'multipart/form-data;' } })
    },

    uploadImageSuccess(formData, index, fileList) {
      this.imagestosend[index] = formData.get("file")
      console.log(this.imagestosend);
      console.log(fileList)
    },
    beforeRemove(index, done, fileList) {
      const r = confirm("Resmi silmek istediğinizden emin misiniz?")
      if (r === true) { done() }
    },
    editImage(formData, index, fileList) {
      this.imagestosend[index] = formData.get("file")
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
