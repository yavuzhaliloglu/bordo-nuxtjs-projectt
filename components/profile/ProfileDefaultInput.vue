<template>
  <form class="features-inputs" @submit.prevent="post" enctype='multipart/form-data'>
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
                markIsPrimaryText="Varsayılan olarak ayarla" dropText="Drag and drop"
                accept=image/jpeg,image/png,image/jpg,image/tif,image/tiff>
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
      imagestosend:[],
      file: "",
      location: {},
      features: {},
      data: {
        imagestosend:[],
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
    getLocation(value) {
      this.location = value
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
      console.log(this.imagestosend)
      fd.append('title',this.title);
      fd.append('images',Array(this.imagestosend));
      fd.append('description',this.description);
      fd.append('price',Number(this.price));
      fd.append('squareMeters',Number(this.obj.defaults[0]));
      fd.append('categoryPath',this.path);
      fd.append('address',this.location);
      fd.append('roomCount',this.obj.selects[0]);
      fd.append('netSquareMeters',Number(this.obj.defaults[1]));
      fd.append('buildingAge',this.obj.selects[1])
      fd.append('floor',Number(this.obj.defaults[2]))
      fd.append('heatingType',this.obj.selects[2])
      fd.append('itemStatus',this.obj.selects[3])
      fd.append('interiorFeatures',this.features.interior)
      fd.append('externalFeatures',this.features.external)
      fd.append('locationFeatures',this.features.location)

      this.$axios.$post('advertHousing',fd,
      {headers: {'Content-Type': 'multipart/form-data'}})


    //   this.$API.post.postAdvert(this.data)
    //   this.$axios.$post('advertHousing',this.data);
    //   const route = '/dashboard/newproperty/features';
    //   if(this.$route.path === `${route}/Arsa`){
    //       this.$API.post.postLand(this.data)
    //   }
    //   else if(this.$route.path === `${route}/isyeri`){
    //       this.$API.post.postWorkPlace(this.data)
    //   }
    //   else if(this.$route.path === `${route}/konut`){

    //   }

    //  
    },

    uploadImageSuccess(formData, index, fileList) {
      const name = formData.get("file");
      console.log(name);
      this.imagestosend[index] = {
        name:name.name,
        lastModified:name.lastModified,
        size:name.size,
        type:name.type
      };
      console.log(this.imagestosend);
      console.log(this.location);

    },
    beforeRemove(index, done, fileList) { 
        const r = confirm("Resmi silmek istediğinizden emin misiniz?")
        if (r === true) {done()}
    },
    editImage(formData, index, fileList) {
      this.imagestosend[index] = formData.get("file")
    }
  }
}
</script>

<style lang="scss" scoped></style>
