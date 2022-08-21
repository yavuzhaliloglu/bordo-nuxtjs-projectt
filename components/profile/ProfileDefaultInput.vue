<template>
    <div class="features-inputs">
        <ProfileHeader>
            <h1 slot="header">İlan Özelliklerinizi seçin</h1>
            <p slot="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nostrum ducimus similique
                dignissimos
                atque non sunt, et possimus autem? Explicabo!</p>
        </ProfileHeader>

        <div class="input-group">
            <vue-upload-multiple-image @upload-success="uploadImageSuccess" @before-remove="beforeRemove"
                @edit-image="editImage" :data-images="images" idUpload="myIdUpload" editUpload="myIdEdit"
                dragText="Resim sürükleyin" browseText="(veya tıklayarak arayın)" primaryText="Varsayılan Resim"
                markIsPrimaryText="Varsayılan olarak ayarla" dropText="Drag and drop"
                accept=image/jpeg,image/png,image/jpg,image/tif,image/tiff>
            </vue-upload-multiple-image>
        </div>

        <ProfileSearchComponent @location="getLocation">
            <h3>İlan Konumunu seçin</h3>
        </ProfileSearchComponent>

        <CommonInputComponent v-model="title" :type="'text'" :title="'title'" />
        <CommonInputComponent v-model="price" :type="'number'" :title="'price'" />
        <!-- <CommonInputComponent v-for="input in defaultInputs" :key="input" :type="input.type" :name="input.name" v-model="input.data" /> -->

        <slot></slot>

        <div class="input-group">
            <label for="description">Açıklama</label>
            <textarea name="description" cols="30" rows="10" v-model="description" />
        </div>

        <button @click="set">askdj</button>
    </div>
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
            price: null,
            description: '',
            images: [],
            file: "",
            location:{},
        }
    },
    methods: {
        getLocation(value){
            this.location = value
        },
        set() {
            console.log(this.obj);
            console.log(this.images);
            console.log(this.location)
        },
        uploadImageSuccess(formData, index, fileList) {
            console.log(formData, index, fileList);
            console.log(formData)
            this.images = fileList;
        },
        beforeRemove(index, done, fileList) {
            console.log('index', index, fileList)
            const r = confirm("remove image")
            if (r === true) {
                done()
            }

        },
        editImage(formData, index, fileList) {
            console.log('edit data', formData, index, fileList)
        }
    }
}
</script>

<style lang="scss" scoped>
</style>